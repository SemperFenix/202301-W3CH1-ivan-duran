import { Character } from './Personaje';

export class Fighter extends Character {
  constructor(
    public name: string,
    public family: string,
    public age: number,
    public weapon: string,
    public dexterity: number
  ) {
    super(name, family, age);
    this.weapon = weapon;
    this.dexterity = dexterity;
  }

  talk() {
    return super.talk('Primero pego y luego pregunto');
  }
}
