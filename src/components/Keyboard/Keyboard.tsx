import * as React from "react";
import { View, Text, TouchableOpacity } from "react-native";

// Styles
import styles from "./styles";

interface Props {
  onRemove: () => void;
  onPress: (value: string) => void;
  disabled?: boolean;
}

const keys = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "", "0", "x"];

const Keyboard: React.FC<Props> = (props) => {
  const { onRemove, onPress, disabled } = props;

  const onPressKey = (index: number) => (): void => {
    if (index === keys.length - 1) {
      onRemove();
    } else {
      onPress(keys[index]);
    }
  };

  return (
    <View style={styles.container}>
      {keys.map((key, index) => (
        <View key={`${key}/${index}`} style={styles.button}>
          <TouchableOpacity
            style={styles.keyRow}
            disabled={index === 9 || disabled}
            onPress={onPressKey(index)}
          >
            <Text style={styles.key}>{key}</Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};

export default Keyboard;
