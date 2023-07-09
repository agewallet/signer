import * as React from "react";
import { View, Text } from "react-native";

// Components
import Button from "@components/Button";

// Styles
import styles from "./styles";

interface Props {
  text: string;
  button: {
    title: string;
    onPress: () => void;
  };
}

const ActionCard: React.FC<Props> = (props) => {
  const { text, button } = props;

  return (
    <View style={styles.container}>
      <View style={styles.iconRow} />
      <Text style={styles.text}>{text}</Text>
      <Button {...button} title={button.title} style={styles.button} />
    </View>
  );
};

export default ActionCard;
