import * as tools from '../src/tools';
import * as character from '../src/character';

describe('Character', () => {
  test('should make an instance of new character', () => {
    const initialState = {brawn: 2, brains: 4, beauty:3}
    const myCharacter = tools.storeState(initialState);
    expect(myCharacter()).toMatchObject({brawn: 2, brains: 4, beauty:3});
  });

  test('should level up new character', () => {
    const initialState = {brawn: 2, brains: 4, beauty: 3}
    const myCharacter = tools.storeState(initialState);
    expect(myCharacter(character.levelUp)).toMatchObject({brawn: 2, brains: 4, beauty:3, level: 1});
  });
});

