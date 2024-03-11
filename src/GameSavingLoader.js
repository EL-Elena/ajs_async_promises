import read from './reader';
import json from './parser';
import GameSaving from './index';

export default class GameSavingLoader {
  static load() {
    return read()
      .then((data) => json(data))
      .then((value) => Object.assign(new GameSaving(), JSON.parse(value)));
  }
}

GameSavingLoader.load()
  .then((value) => value);
