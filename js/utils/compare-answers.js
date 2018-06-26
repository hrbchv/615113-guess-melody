export const compareAnswers = (firstArray, secondArray) => {
  if (firstArray.length !== secondArray.length) {
    return false;
  }
  let compareResult = true;
  for (let i = 0; i < firstArray.length; i++) {
    if (firstArray[i] !== secondArray[i]) {
      compareResult = false;
      return false;
    }
  }
  return compareResult;
};
