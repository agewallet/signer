import * as React from "react";
import { View, Text, ScrollView } from "react-native";

// Components
import Wrapper from "@components/Wrapper";
import Header from "@components/Header";

// Styles
import styles from "./styles";

interface Props {
  componentId: string;
}

const Tx: React.FC<Props> = (props) => {
  const { componentId } = props;

  return (
    <Wrapper componentId={componentId}>
      <Header title="Tx info" />
      <View style={styles.container}>
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.group}>
            <View style={styles.groupItem}>
              <View style={styles.groupItemIcon} />
              <View style={styles.groupItemRow}>
                <Text style={styles.groupItemTitle}>Sent</Text>
                <View style={styles.groupItemBottom}>
                  <Text style={styles.groupItemValue}>0.0158 ETH</Text>
                  <View style={styles.badge}>
                    <Text style={styles.badgeText}>$ 986.22</Text>
                  </View>
                </View>
              </View>
            </View>

            <View style={styles.dividerLine} />

            <View style={styles.groupItem}>
              <View style={styles.groupItemIcon} />
              <View style={styles.groupItemRow}>
                <Text style={styles.groupItemTitle}>Sent</Text>
                <View style={styles.groupItemBottom}>
                  <Text style={styles.groupItemValue}>0.0158 ETH</Text>
                  <View style={styles.badge}>
                    <Text style={styles.badgeText}>$ 986.22</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </Wrapper>
  );
};

export default Tx;
