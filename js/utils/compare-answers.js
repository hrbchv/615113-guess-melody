export const compareAnswers = (firstArray, secondArray) => {
  let compareResult = true;
  for (let i = 0; i < firstArray.length; i++) {
    if (firstArray[i] !== secondArray[i]) {
      compareResult = false;
      return false;
    }
  }
  return compareResult;
};
