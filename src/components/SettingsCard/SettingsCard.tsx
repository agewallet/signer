import * as React from "react";
import { TouchableOpacity, View, Text } from "react-native";

// Styles
import styles from "./styles";

interface Props {
  title: string;
  onPress: () => void;
}

const SettingsCard: React.FC<Props> = (props) => {
  const { title, onPress } = props;

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.row}>
        <View style={styles.iconRow} />
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.arrowIcon} />
    </TouchableOpacity>
  );
};

export default SettingsCard;
