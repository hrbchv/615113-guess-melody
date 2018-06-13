const getTimer = function (time) {
  if (typeof time !== `number`) {
    throw new Error(`time is type of number`);
  }
  if (time < 0) {
    throw new Error(`time not negative and is not equal to zero`);
  }
  const removeSecond = 1000;
  return {
    activeTimer: true,
    timerTime: time,
    tick() {
      let returnValue = ``;
      if (this.timerTime <= 0) {
        this.activeTimer = false;
      }
      if (this.activeTimer) {
        this.timerTime -= removeSecond;
      } else {
        returnValue = `Время вышло!`;
      }
      return returnValue;
    }
  };
};

export default getTimer;
