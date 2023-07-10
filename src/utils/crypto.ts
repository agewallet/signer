import { AES, enc, SHA256, SHA512 } from "crypto-js";

export const encrypt = (message: string, key: string): string => {
  return AES.encrypt(message, key).toString();
};

export const decrypt = (message: string, key: string): string | null => {
  try {
    return AES.decrypt(message, key).toString(enc.Utf8);
  } catch {
    return null;
  }
};

export const sha256hash = (message: string): string => {
  return SHA256(message).toString();
};

export const sha521hash = (message: string): string => {
  return SHA512(message).toString();
};
