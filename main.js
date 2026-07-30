import './Modal.js';

import './register.js';

console.log('файл загружен')

class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  speak() {
    console.log(`${this.name}, ${this.age} голос.`);
  }
}

class Bird extends Animal {
  constructor(name, age, color) {
    super(name,age)
    this.color = color;
  }

  canFly() {
    console.log(`${this.name}, ${this.age}, ${this.color} Летает!`);
  }
}

const eagle = new Bird('Орел', '4', 'черный');
eagle.canFly();
