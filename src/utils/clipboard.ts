import Clipboard from "@react-native-clipboard/clipboard";

export const setString = (string: string): void => {
  Clipboard.setString(string);
};

export const getString = async (): Promise<string> => {
  return await Clipboard.getString();
};
