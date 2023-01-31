import { Character } from './Personaje';

export class Fighter extends Character {
  constructor(
    name: string,
    family: string,
    age: number,
    // eslint-disable-next-line no-unused-vars
    public weapon: string,
    // eslint-disable-next-line no-unused-vars
    public dexterity: number
  ) {
    super(name, family, age);
  }

  talk() {
    return super.talk('Primero pego y luego pregunto');
  }
}
