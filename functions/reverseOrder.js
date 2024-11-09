export const reverseOrder = (array) => {
  let temp;
  const arrayInvert = [];
  for (let i = 1; i <= array.length; i++) {
    temp = array[array.length - i];
    arrayInvert[i - 1] = temp;
  }
  return arrayInvert;
};
