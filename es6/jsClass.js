// Run in command -> node .

class Animal {
  constructor(legs) {
    this.legs = legs;
  }

  walk()
  {
    console.log("Animal can walking.");
  }
}

class Dog extends Animal
{
  walk()
  {
    console.log("Dogs can walking.");
  }
}

var bobby = new Dog(4);
bobby.walk();
