import * as React from "react";
import { TouchableOpacity, View, Text } from "react-native";

// Styles
import styles from "./styles";

interface Props {
  name: string;
  symbol: string;
  onPress: () => void;
}

const AssetCard: React.FC<Props> = (props) => {
  const { onPress, name, symbol } = props;

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.logo} />
      <View style={styles.row}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.symbol}>{symbol}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default AssetCard;
