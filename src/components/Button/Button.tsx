import * as React from "react";
import { TouchableOpacity, Text, ViewStyle } from "react-native";

// Styles
import styles from "./styles";

interface Props {
  title: string;
  onPress: () => void;
  style?: ViewStyle;
  mt?: number;
  disabled?: boolean;
}

const Button: React.FC<Props> = (props) => {
  const { title, onPress, style, mt = 0, disabled } = props;

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.container,
        disabled && styles.disabled,
        { marginTop: mt },
        style,
      ]}
      disabled={disabled}
    >
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
