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

const Language: React.FC<Props> = (props) => {
  const { componentId } = props;

  return (
    <Wrapper componentId={componentId}>
      <Header title="Language" />
      <View style={styles.container}>
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          showsVerticalScrollIndicator={false}
        >
          <Text>Language</Text>
        </ScrollView>
      </View>
    </Wrapper>
  );
};

export default Language;
