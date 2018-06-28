const getTimer = function (time) {
  if (typeof time !== `number`) {
    throw new Error(`time is type of number`);
  }
  if (time < 0) {
    throw new Error(`time not negative and is not equal to zero`);
  }
  const SECOND = 1000;
  return {
    timerTime: time,
    _activeTimer: true,
    _levelStartTime: time,
    tick() {
      if (this.timerTime <= 0) {
        this._activeTimer = false;
      }
      if (this._activeTimer) {
        this.timerTime -= SECOND;
      }
    },
    getTime() {
      return this.timerTime;
    },
    getLevelTime() {
      const levelTime = this._levelStartTime - this.timerTime;
      this._levelStartTime = this.timerTime;
      return levelTime;
    }
  };
};

export default getTimer;
