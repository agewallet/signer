import * as React from "react";
import { View, Text } from "react-native";

// Components
import Wrapper from "@components/Wrapper";
import Header from "@components/Header";
import Keyboard from "@components/Keyboard";

// Navigation
import { renderApp } from "@navigation/index";

// Styles
import styles from "./styles";

interface Props {
  componentId: string;
}

const CreatePasscode: React.FC<Props> = (props) => {
  const { componentId } = props;

  const [passcode, setPasscode] = React.useState<string>("");

  React.useEffect(() => {
    if (passcode.length === 6) {
      renderApp();
    }
  }, [passcode]);

  const onPressKeyboard = (key: string): void => {
    setPasscode((prev) => `${prev}${key}`);
  };

  const onRemove = (): void => {
    setPasscode((prev) => prev.slice(0, -1));
  };

  return (
    <Wrapper componentId={componentId}>
      <Header title="Create Passcode" />
      <View style={styles.container}>
        <View style={styles.row}>
          <Text style={styles.title}>Enter you new Passcode</Text>
          <View style={styles.dots}>
            {Array(6)
              .fill("dot")
              .map((i, index) => (
                <View
                  key={`${i}/${index}`}
                  style={[
                    styles.dot,
                    passcode.length > index && styles.dotActive,
                  ]}
                />
              ))}
          </View>
        </View>
        <Keyboard
          onPress={onPressKeyboard}
          onRemove={onRemove}
          disabled={passcode.length === 6}
        />
      </View>
    </Wrapper>
  );
};

export default CreatePasscode;
