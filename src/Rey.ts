import { Character } from './Personaje';

export class King extends Character {
  constructor(
    public name: string,
    public family: string,
    public age: number,
    public kingYears: number
  ) {
    super(name, family, age);
    this.kingYears = kingYears;
  }

  talk() {
    return super.talk('Vais a morir todos');
  }
}
