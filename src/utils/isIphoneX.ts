import { Dimensions, Platform } from "react-native";

const values: number[] = [780, 812, 844, 896, 926, 852, 932];

const isIphoneX = () => {
  const { width, height } = Dimensions.get("window");

  const findByWidth = values.indexOf(width) !== -1;
  const findByHeight = values.indexOf(height) !== -1;

  return (
    Platform.OS === "ios" &&
    !Platform.isPad &&
    !Platform.isTV &&
    (findByWidth || findByHeight)
  );
};

export const hasIsland = () => {
  const dimen = Dimensions.get("window");

  return (
    Platform.OS === "ios" &&
    !Platform.isPad &&
    !Platform.isTV &&
    (dimen.height === 852 ||
      dimen.width === 852 ||
      dimen.height === 932 ||
      dimen.width === 932)
  );
};

export const plusOffset = (offset: number): number => {
  if (isIphoneX()) {
    return offset + 34;
  }
  return offset + 16;
};

export default isIphoneX;
