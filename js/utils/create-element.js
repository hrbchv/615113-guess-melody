const createElement = (string) => {
  if (typeof string !== `string`) {
    return false;
  }
  const parentElement = document.createElement(`div`);
  parentElement.innerHTML = string;
  return parentElement.firstChild;
};

export default createElement;
