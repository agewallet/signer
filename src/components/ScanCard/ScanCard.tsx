import * as React from "react";
import { View, Text } from "react-native";

// Components
import Button from "@components/Button";

// Utils
import { showModal } from "@utils/navigation";

// Screens
import * as screens from "@config/screens";

// Styles
import styles from "./styles";

interface Props {}

const ScanCard: React.FC<Props> = (props) => {
  const {} = props;

  const onScan = (): void => {
    showModal(screens.SCAN_MODAL);
  };

  return (
    <View style={styles.container}>
      <View style={styles.icon} />
      <Text style={styles.text}>
        Some text to scan. Some text to scan. Some text to scan
      </Text>
      <Button title="Scan" onPress={onScan} style={styles.button} />
    </View>
  );
};

export default ScanCard;
