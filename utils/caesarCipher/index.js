const CHAR_BOUNDARIES = [
  {
    min: 65,
    max: 90,
  },
  {
    min: 97,
    max: 122,
  },
];

const isWithinBoundaries = (charCode) =>
  CHAR_BOUNDARIES.some(
    (boundary) => charCode >= boundary.min && charCode <= boundary.max
  );

const mutateChar = (char, step) => {
  let mutatedChar = char.charCodeAt(0) + step;

  if (!isWithinBoundaries(mutatedChar)) {
    let charBoundary = 0;

    if (char.toLowerCase() === char) {
      charBoundary = 1;
    }

    mutatedChar =
      mutatedChar -
      CHAR_BOUNDARIES[charBoundary].max +
      CHAR_BOUNDARIES[charBoundary].min -
      1;
  }

  return mutatedChar;
};

const caesarCipher = (str, step) => {
  let strArr = str.split("");

  strArr = strArr.map((char) => {
    if (isWithinBoundaries(char.charCodeAt(0))) {
      return String.fromCharCode(mutateChar(char, step));
    }

    return char;
  });

  return strArr.join("");
};

export default caesarCipher;
