export class Character {
  alive: boolean;
  constructor(public name: string, public family: string, public age: number) {
    this.name = name;
    this.family = family;
    this.age = age;
    this.alive = true;
  }
}
