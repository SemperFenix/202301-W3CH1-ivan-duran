import { Fighter } from './Luchador';

describe('Given the class Fighter', () => {
  describe('When pass the name, family, age, weapon and dexterity properties', () => {
    test('Then it should return an object with the same properties, alive true and the values given', () => {
      const r = new Fighter('Jaime', 'Lannister', 30, 'Sword', 8);
      const result = {
        name: 'Jaime',
        family: 'Lannister',
        age: 30,
        alive: true,
        weapon: 'Sword',
        dexterity: 8,
      };
      expect(r).toEqual(result);
    });
  });

  describe('When a King item uses its method talk', () => {
    test('Then it should return "Vais a morir todos"', () => {
      const robert = new King('Robert', 'Baratheon', 50, 12);
      const r = robert.talk();
      expect(r).toBe('Vais a morir todos');
    });
  });
});
