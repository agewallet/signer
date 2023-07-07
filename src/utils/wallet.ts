import * as bip39 from "bip39";

export const generateMnemonic = (): string => {
  return bip39.generateMnemonic();
};
