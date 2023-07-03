import * as React from "react";
import { View, Text, ScrollView } from "react-native";
import QRCode from "react-native-qrcode-svg";

// Components
import ModalWrapper from "@components/ModalWrapper";

// Styles
import styles from "./styles";

interface Props {
  componentId: string;
  name: string;
  symbol: string;
  address: string;
}

const ReceiveModal: React.FC<Props> = (props) => {
  const { componentId, name, symbol, address } = props;

  return (
    <ModalWrapper componentId={componentId} title={`Receive ${symbol}`}>
      <View style={styles.container}>
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.qrCode}>
            <QRCode
              value={address}
              color="#FFFFFF"
              backgroundColor="#1D1D22"
              size={222}
            />
          </View>
          <Text>ReceiveModal</Text>
        </ScrollView>
      </View>
    </ModalWrapper>
  );
};

export default ReceiveModal;
