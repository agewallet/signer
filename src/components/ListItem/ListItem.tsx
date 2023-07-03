import * as React from "react";
import { TouchableOpacity, View, Text } from "react-native";

// Styles
import styles from "./styles";

interface Props {
  title: string;
  onPress: () => void;
}

const ListItem: React.FC<Props> = (props) => {
  const { title, onPress } = props;

  return (
    <TouchableOpacity onPress={onPress}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

export default ListItem;
