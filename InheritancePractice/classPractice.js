class Character {
  constructor(name, weapon) {
    this.name = name;
    this.weapon = weapon;
  }
  attack() {
    return `${this.name} attacks with ${this.weapon}`;
  }
}

class Elf extends Character {
  #age;
  constructor(name, weapon, type, age) {
    super(name, weapon);
    this.type = type;
    this.#age = age
  }
  playsPosition() {
    return `Plays position ${this.type}`;
  }
  getAge() {
    return this.#age;
  }
}

const PeterElf = new Elf("Peter", "Axe", "Forward", 42);
console.log(PeterElf.getAge())
// const puneet = new Character("puneet", "none")
// console.log(puneet.__proto__)