import GameSavingLoader from './GameSavingLoader';

GameSavingLoader.load()
  .then((saving) => {
    saving;
    throw new Error('err');
  })
  .catch((error) => error);
