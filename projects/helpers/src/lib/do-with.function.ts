export const doWith = <T>(value: T, callback: (value: T) => void): T  => {
  callback(value);

  return value;
};
