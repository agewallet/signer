import * as bip39 from "bip39";

export const generateMnemonic = (strength: number = 256): string => {
  return bip39.generateMnemonic(strength);
};
