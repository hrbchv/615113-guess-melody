const showScreen = (element) => {
  const appScreen = document.querySelector(`.app`);
  if (appScreen.querySelector(`section.main`)) {
    appScreen.querySelector(`section.main`).remove();
  }
  appScreen.prepend(element);
};

export default showScreen;
