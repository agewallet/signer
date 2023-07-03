import * as React from "react";
import { View, Text } from "react-native";
import { useSelector } from "react-redux";

// Store
import { RootState } from "@store/index";

// Styles
import styles from "./styles";

interface Props {
  title: string;
}

const Header: React.FC<Props> = (props) => {
  const { title } = props;

  const { statusBarHeight } = useSelector((state: RootState) => state.app);

  return (
    <View
      style={[
        styles.container,
        {
          paddingTop: statusBarHeight,
        },
      ]}
    >
      <View style={styles.row}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
};

export default Header;
