import * as React from "react";
import { View, Text, TouchableOpacity } from "react-native";

// Utils
import { dismissModal } from "@utils/navigation";

// Styles
import styles from "./styles";

interface Props {
  componentId: string;
  children: React.ReactNode;
  title?: string;
}

const ModalWrapper: React.FC<Props> = (props) => {
  const { componentId, children, title } = props;

  const onClose = (): void => {
    dismissModal(componentId);
  };

  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <TouchableOpacity style={styles.button} onPress={onClose}>
          <Text>X</Text>
        </TouchableOpacity>
        <Text style={styles.title} numberOfLines={1}>
          {title}
        </Text>
        <View style={styles.button} />
      </View>
      {children}
    </View>
  );
};

export default ModalWrapper;
