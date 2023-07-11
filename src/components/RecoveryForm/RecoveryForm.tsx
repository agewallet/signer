import * as React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  NativeSyntheticEvent,
  TextInputKeyPressEventData,
  Image,
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native";

// Utils
import { getString } from "@utils/clipboard";

// Config
import { ICONS } from "@config/icons";

// Styles
import styles from "./styles";

interface Props {
  words: string[];
  updateWords: (values: string[]) => void;
  label: string;
}

const RecoveryForm: React.FC<Props> = (props) => {
  const { words, updateWords, label } = props;

  const [value, setValue] = React.useState<string>("");
  const [isFocused, setIsFocued] = React.useState<boolean>(false);

  const inputRef = React.useRef<TextInput>(null);

  const onSubmitEditing = (): void => {
    updateWords([...words, ...value.split(" ")]);
    setValue("");

    setTimeout(() => {
      inputRef.current?.focus();
    }, 0);
  };

  const onRemove = (word: string) => (): void => {
    updateWords(words.filter((i: string) => i !== word));
  };

  const onKeyPress = ({
    nativeEvent,
  }: NativeSyntheticEvent<TextInputKeyPressEventData>) => {
    if (nativeEvent.key === "Backspace") {
      if (value.length) {
        setValue((prev: string) => prev.slice(0, -1));
      } else if (words.length) {
        setValue(words[words.length - 1]);
        updateWords(words.slice(0, -1));
      }
    }
  };

  const onFocus = (): void => {
    setIsFocued(true);
  };

  const onBlur = (): void => {
    setIsFocued(false);
  };

  const onPressButton = async (): Promise<void> => {
    if (words.length) {
      updateWords([]);
    } else {
      const getClipboard = await getString();

      if (getClipboard?.length) {
        updateWords(getClipboard.split(" "));
      }
    }
  };

  const onPress = (): void => {
    if (!isFocused) {
      inputRef.current?.focus();
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>

      <TouchableWithoutFeedback
        style={[styles.row, isFocused && styles.rowActive]}
        onPress={onPress}
      >
        <View style={styles.formRow}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.form}
          >
            {words.map((word: string, index: number) => (
              <View style={styles.itemRow} key={`${word}/${index}`}>
                <View style={styles.item}>
                  <Text style={styles.itemPosition}>{index + 1}</Text>
                  <Text style={styles.itemValue}>{word}</Text>
                  <TouchableOpacity
                    style={styles.itemIconRow}
                    onPress={onRemove(word)}
                  >
                    <Image
                      source={ICONS.close}
                      style={styles.itemIcon}
                      resizeMode="contain"
                    />
                  </TouchableOpacity>
                </View>
              </View>
            ))}
            <TextInput
              value={value}
              onChangeText={setValue}
              style={styles.input}
              onSubmitEditing={onSubmitEditing}
              ref={inputRef}
              onKeyPress={onKeyPress}
              selectionColor="#008E47"
              onFocus={onFocus}
              onBlur={onBlur}
            />
          </ScrollView>
          <TouchableOpacity
            onPress={onPressButton}
            style={[styles.button, words.length > 0 && styles.buttonFocused]}
          >
            <Image
              source={words.length ? ICONS.close : ICONS.paste}
              style={[
                styles.buttonIcon,
                words.length > 0 && styles.buttonIconFocused,
              ]}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default RecoveryForm;
