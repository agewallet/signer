import * as React from "react";
import { TouchableOpacity, View, Text } from "react-native";

// Styles
import styles from "./styles";

interface Props {
  onPress: () => void;
}

const HistoryCard: React.FC<Props> = (props) => {
  const { onPress } = props;

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.icon} />
      <View style={styles.row}>
        <View style={styles.rowLeft}>
          <Text style={styles.title}>WalletName</Text>
          <Text style={styles.value}>1E3ekkt7...k9kt1E38</Text>
        </View>
        <View style={styles.rowRight}>
          <View style={styles.amountRow}>
            <Text style={styles.amount}>0.04168257</Text>
            <Text style={styles.symbol}>btc</Text>
          </View>
          <Text style={styles.estimated}>$ 5,712.75</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default HistoryCard;
