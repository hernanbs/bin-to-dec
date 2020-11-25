const Converter = {
  binaryToDecimal: (binary: string) => {
    if (binary.length) {
      const intArray: Array<number> = binary
        .split('')
        .reverse()
        .map(v => parseInt(v, 10));

      return intArray.reduce(
        (previous, current, index) => 2 ** index * current + previous,
      );
    }
    return '';
  },

  decimalToBinary: (binary: string) => {
    if (binary) {
      let value: number = parseInt(binary, 10);
      let binaryTxt = '';
      while (value > 0) {
        value = Math.floor(value / 2);
        if (Math.floor(value % 2) >= 1) {
          binaryTxt = 0 + binaryTxt;
        } else {
          binaryTxt = 1 + binaryTxt;
        }
      }
      return binaryTxt;
    }
    return '';
  },
};

export default Converter;
