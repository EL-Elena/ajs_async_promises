import GameSavingLoader from '../GameSavingLoader';

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

test('Checking class GameSavingLoader', async () => {
  const value = await GameSavingLoader.load();
  return expect(value).toEqual(correct);
});
