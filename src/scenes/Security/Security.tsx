import * as React from "react";
import { View, ScrollView } from "react-native";

// Components
import Wrapper from "@components/Wrapper";
import Header from "@components/Header";
import ListItem from "@components/ListItem";

// Styles
import styles from "./styles";

interface Props {
  componentId: string;
}

const Security: React.FC<Props> = (props) => {
  const { componentId } = props;

  const onViewPasscode = (): void => {
    //
  };

  return (
    <Wrapper componentId={componentId}>
      <Header title="Security" />
      <View style={styles.container}>
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          showsVerticalScrollIndicator={false}
        >
          <ListItem title="Passcode & Face ID" onPress={onViewPasscode} />
        </ScrollView>
      </View>
    </Wrapper>
  );
};

export default Security;
