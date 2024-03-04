import GameSavingLoader from '../GameSavingLoader';
import * as index from '../index';

const correct = {
  id: 9,
  created: 1546300800,
  userInfo: {
    id: 1,
    name: 'Hitman',
    level: 10,
    points: 2000,
  },
};

test('Checking saving', async () => {
  const value = await GameSavingLoader.load();
  return expect(value).toEqual(correct);
});

test('Checking error', async () => {
  await GameSavingLoader.load()
    .catch((error) => expect(error).toEqual('err'));
});
