import * as React from "react";
import { View, ScrollView, Text } from "react-native";

// Components
import Wrapper from "@components/Wrapper";
import Header from "@components/Header";

// Styles
import styles from "./styles";

interface Props {
  componentId: string;
}

const Security: React.FC<Props> = (props) => {
  const { componentId } = props;

  return (
    <Wrapper componentId={componentId}>
      <Header title="Security" />
      <View style={styles.container}>
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          showsVerticalScrollIndicator={false}
        >
          <Text>Security</Text>
        </ScrollView>
      </View>
    </Wrapper>
  );
};

export default Security;
