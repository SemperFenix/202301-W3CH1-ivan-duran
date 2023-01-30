import { Character } from './Personaje';
describe('Given the class Character', () => {
  describe('When pass the name, family and age properties', () => {
    test('Then it should return an object with the same properties and the values given', () => {
      const r = new Character('Eddard', 'Stark', 42);
      const result = { name: 'Eddard', family: 'Stark', age: 42, alive: true };
      expect(r).toEqual(result);
    });
  });
});
