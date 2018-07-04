import {adaptServerData} from "./data-adapter";

const SERVER_URL_DATA = `https://es.dump.academy/guess-melody/questions`;
const SERVER_URL_STATS = `https://es.dump.academy/guess-melody/stats/50604877`;

const checkStatus = (response) => {
  if (response.status >= 200 && response.status < 300) {
    return toJSON(response);
  } else if (response.status === 404) {
    return false;
  }
  throw new Error(`${response.status}: ${response.statusText}`);
};


const toJSON = (res) => res.json();

export default class serverRouter {
  static loadData() {
    return fetch(SERVER_URL_DATA).then(checkStatus).then(adaptServerData);
  }

  static loadResults() {
    return fetch(SERVER_URL_STATS).then(checkStatus);
  }

  static saveResults(thisUserPoints) {
    const requestSettings = {
      body: JSON.stringify({
        date: new Date(),
        points: thisUserPoints
      }),
      headers: {
        'Content-Type': `application/json`
      },
      method: `POST`
    };
    return fetch(SERVER_URL_STATS, requestSettings);
  }
}
