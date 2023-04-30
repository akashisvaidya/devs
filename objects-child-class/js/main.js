//Create an a class and extend it - Can be anything you would like it to be!
class Animal {
  constructor(name) {
    this._name = name;
  }
  get name() {
    return this._name;
  }
  speak() {
    console.log(`${this._name} makes a sound`);
  }
}

class dog extends Animal {
  contructor(name, breed) {
    super(name);
    this.breed = breed;
  }
}

class cat extends Animal {
  contructor(name, breed) {
    super(name);
    this.breed = breed;
  }
}

class cow extends Animal {
  constructor(name, breed, gender) {
    super(name);
    this.breed = breed;
    this.gender = gender;
  }
}

class domestic extends dog {
  contructor(name, breed, age, owner) {
    super(name, breed);
    this.age = age;
    this.owner = owner;
  }
}
