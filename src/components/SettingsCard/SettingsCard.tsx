import * as React from "react";
import { TouchableOpacity, View, Text, Image } from "react-native";

// Config
import { ICONS } from "@config/icons";

// Styles
import styles from "./styles";

interface Props {
  title: string;
  onPress: () => void;
  color: string;
  icon: number;
}

const SettingsCard: React.FC<Props> = (props) => {
  const { title, onPress, color, icon } = props;

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.row}>
        <View style={[styles.iconRow, { backgroundColor: color }]}>
          <Image source={icon} style={styles.icon} resizeMode="contain" />
        </View>
        <Text style={styles.title}>{title}</Text>
      </View>
      <Image
        source={ICONS.listArrow}
        style={styles.arrowIcon}
        resizeMode="contain"
      />
    </TouchableOpacity>
  );
};

export default SettingsCard;
