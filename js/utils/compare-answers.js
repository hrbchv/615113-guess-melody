export const compareAnswers = (firstArray, secondArray) => {
  if (firstArray.length !== secondArray.length) {
    return false;
  }
  let compareResult = true;
  firstArray.forEach((it, indx) => {
    if (firstArray[indx] !== secondArray[indx]) {
      compareResult = false;
    }
  });
  return compareResult;
};
