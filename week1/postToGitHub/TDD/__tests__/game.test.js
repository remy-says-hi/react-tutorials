import * as tools from '../src/tools';

describe('Game', () => {
  test('should make an instance of new Game', () => {
    const initialState = {players: []}
    const myGame = tools.storeState(initialState);
    expect(myGame()).toMatchObject({players: []});
  });
});