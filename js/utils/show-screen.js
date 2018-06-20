const showScreen = (element) => {
  const appScreen = document.querySelector(`.app`);
  appScreen.querySelector(`section.main`).remove();
  appScreen.prepend(element);
};

export default showScreen;
