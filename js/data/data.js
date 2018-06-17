export const gameState = {
  level: 1,
  noteErorr: 0,
  time: 300000,
  userAnswers: []
};

export const resultLose = {
  attempts:
    {
      title: `Какая жалость!`,
      mainStat: `У вас закончились все попытки.\<br>Ничего, повезёт в следующий раз!`
    },
  time:
    {
      title: `Увы и ах!`,
      mainStat: `Время вышло!\<br>Вы не успели отгадать все мелодии`
    },
};

export const allPlayersResult = [12, 4, 5, 6, 7, 8, 10, 12, 18];

const audioTracks = [
  {
    artist: `Kevin MacLeod`,
    name: `Long Stroll`,
    image: `https://yt3.ggpht.com/-fkDeGauT7Co/AAAAAAAAAAI/AAAAAAAAAAA/dkF5ZKkrxRo/s900-c-k-no-mo-rj-c0xffffff/photo.jpg`,
    src: `https://www.youtube.com/audiolibrary_download?vid=91624fdc22fc54ed`,
    genre: `Jazz`
  },
  {
    artist: `Jingle Punks`,
    name: `In the Land of Rhinoplasty`,
    image: `https://i.vimeocdn.com/portrait/992615_300x300`,
    src: `https://www.youtube.com/audiolibrary_download?vid=dc3b4dc549becd6b`,
    genre: `Rock`
  },
  {
    artist: `Audionautix`,
    name: `Travel Light`,
    image: `http://4.bp.blogspot.com/-kft9qu5ET6U/VPFUBi9W-MI/AAAAAAAACYM/UxXilXKYwOc/s1600/audionautix%2BHalf%2BSize.jpg`,
    src: `https://www.youtube.com/audiolibrary_download?vid=a127d9b7de8a17cf`,
    genre: `Country`
  },
  {
    artist: `Riot`,
    name: `	Level Plane`,
    image: `https://i.ytimg.com/vi/jzgM3m8Vp1k/maxresdefault.jpg`,
    src: `https://www.youtube.com/audiolibrary_download?vid=dfb828f40096184c`,
    genre: `R&B`
  },
  {
    artist: `Jingle Punks`,
    name: `Lucky Day`,
    image: `https://i.vimeocdn.com/portrait/992615_300x300`,
    src: `https://www.youtube.com/audiolibrary_download?vid=bcbe5be936a32fb1`,
    genre: `Pop`
  },
  {
    artist: `Gunnar Olsen`,
    name: `Home Stretch`,
    image: `https://f4.bcbits.com/img/0004181452_10.jpg`,
    src: `https://www.youtube.com/audiolibrary_download?vid=bcbe5be936a32fb1`,
    genre: `Electronic`
  }
];

const GameQuestionsTitle = {
  TYPE_ONE: `Кто исполняет эту песню?`,
  TYPE_TWO: `Выберите ${audioTracks[3].genre} треки`
};

const GameType = {
  TYPE_ONE: `artist`,
  TYPE_TWO: `genre`
};

const listQuestionsChunk = [
  {
    type: GameType.TYPE_ONE,
    question: GameQuestionsTitle.TYPE_ONE,
    answers: [{
      artist: audioTracks[0].artist,
      image: audioTracks[0].image,
      src: ``
    }, {
      artist: audioTracks[1].artist,
      image: audioTracks[1].image,
      src: audioTracks[1].src
    }, {
      artist: audioTracks[2].artist,
      image: audioTracks[2].image,
      src: ``
    }]
  },
  {
    type: GameType.TYPE_TWO,
    question: GameQuestionsTitle.TYPE_TWO,
    answers: [{
      src: audioTracks[0].src,
      genre: audioTracks[0].genre,
      answer: true
    }, {
      src: audioTracks[1].src,
      genre: audioTracks[1].genre,
      answer: false
    }, {
      src: audioTracks[2].src,
      genre: audioTracks[2].genre,
      answer: false
    }, {
      src: audioTracks[0].src,
      genre: audioTracks[0].genre,
      answer: true
    }]
  }];

export const listQuestions = [...listQuestionsChunk, ...listQuestionsChunk, ...listQuestionsChunk, ...listQuestionsChunk, ...listQuestionsChunk];
