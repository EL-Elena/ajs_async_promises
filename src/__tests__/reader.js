import read from '../reader';

const correct = '{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}';

test('Checking reader', async () => {
  const data = await read();
  return expect(String.fromCharCode.apply(null, new Uint16Array(data))).toEqual(correct);
});
