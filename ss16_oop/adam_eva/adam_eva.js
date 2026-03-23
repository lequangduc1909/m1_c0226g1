class Apple {
  #weight;

  constructor() {
    this.#weight = 10;
  }

  decrease() {
    if (this.#weight > 0) {
      this.#weight--;
    }
  }

  isEmpty() {
    return this.#weight <= 0;
  }

  getWeight() {
    return this.#weight;
  }
}

class Human {
  constructor(name, gender, weight) {
    this.name = name;
    this.gender = gender;
    this.weight = weight;
  }

  say(text) {
    console.log(this.name + ": " + text);
  }

  checkApple(apple) {
    return !apple.isEmpty();
  }

  eat(apple) {
    if (!apple.isEmpty()) {
      apple.decrease();
      this.weight++;
      console.log(`${this.name} ăn 1 miếng táo`);
    } else {
      console.log("Táo hết rồi!");
    }
  }
}

// RUN
const apple = new Apple();
const adam = new Human("Adam", true, 60);
const eva = new Human("Eva", false, 45);

while (!apple.isEmpty()) {
  adam.eat(apple);
  console.log("Táo còn:", apple.getWeight());

  if (!apple.isEmpty()) {
    eva.eat(apple);
    console.log("Táo còn:", apple.getWeight());
  }
}

console.log("Adam:", adam.weight);
console.log("Eva:", eva.weight);