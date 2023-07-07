import * as React from "react";
import { View, Text } from "react-native";

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
    <View>
      <Text>ActionCard</Text>
    </View>
  );
};

export default ActionCard;
