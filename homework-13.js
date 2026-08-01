console.log("lkfhff")

class Drink {
  #temperature;
  constructor(name, size, price, temperature) {
    if (new.target === Drink) {
      throw new Error("Нельзя создавать экземпляры абстрактного класса Drink!");
    }
    this.name = name;
    this.size = size;
    this.price = price;
    this.#temperature = temperature
  }

  getTemperature() {
    return this.#temperature
  }
  setTemperature(newTemperature) {
    this.#temperature = newTemperature;

  }
  #prepare() {
    return ("Вода нагревается");

  }
  serve() {
    const process = this.#prepare(); {
      return (process ('Напиток подан! Приятного аппетита!'))
    }

  }

  getInfo() {
    return (`${this.name}, ${this.size}, ${this.price}`);
  }
}

class Lemonade extends Drink {
  constructor(name, size, price, temperature) {
    super(name, size, price, temperature)
  }
}

class Tea extends Drink {
  constructor(name, size, price, temperature) {
    super(name, size, price, temperature)
  }
}
class Coffee extends Drink {
  constructor(name, size, price, temperature, beanType, milkType) {
    super(name, size, price, temperature);
    this.beanType = beanType;
    this.milkType = milkType
  }

  getInfo() {
    return (`${super.getInfo()}, ${this.beanType}, ${this.milkType}`);
   }
}

class CoffeeShop {
  constructor(name, address) {
    this.name = name;
    this.address = address;
  }

  getCafeInfo() {
    return (`Кафе "${this.name}", ${this.address}`);
   }

  orderDrink(drink) {
    console.log(drink.getInfo());
    return drink.serve();
   }
}

const myCafe = new CoffeeShop("Кофейня", "ул.Садовая 24");
const Cappuccino = new Coffee("Капучино", "0.5л", 200, 80, "Арабика", "Кокосовое");

console.log(myCafe.getCafeInfo());console.log(myCafe.orderDrink(Cappuccino));