const analyzeArray = (arr) => {
  const sortedArray = arr.slice().sort((a, b) => a - b);
  const average =
    sortedArray.reduce((acc, num) => acc + num, 0) / sortedArray.length;

  return {
    average,
    min: sortedArray[0],
    max: sortedArray[sortedArray.length - 1],
    length: sortedArray.length,
  };
};

export default analyzeArray;
