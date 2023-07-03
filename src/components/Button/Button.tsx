import * as React from "react";
import { TouchableOpacity, Text, ViewStyle } from "react-native";

// Styles
import styles from "./styles";

interface Props {
  title: string;
  onPress: () => void;
  style?: ViewStyle;
}

const Button: React.FC<Props> = (props) => {
  const { title, onPress, style } = props;

  return (
    <TouchableOpacity onPress={onPress} style={[styles.container, style]}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
