import { Character } from './Personaje';

export class King extends Character {
  constructor(
    public name: string,
    public family: string,
    public age: number,
    // eslint-disable-next-line no-unused-vars
    public kingYears: number
  ) {
    super(name, family, age);
  }

  talk() {
    return super.talk('Vais a morir todos');
  }
}
