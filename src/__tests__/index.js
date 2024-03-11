import GameSaving from '../index';

const correct = {
  id: undefined,
  created: undefined,
  userInfo: {
    id: undefined,
    name: undefined,
    level: undefined,
    points: undefined,
  },
};

test(('Creating new GameSaving'), () => {
  expect(new GameSaving()).toEqual(correct);
});
