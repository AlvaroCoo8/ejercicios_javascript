export class Person {
  #name;
  #surname;
  country = null;
  age = null;

  constructor(name, surname) {
    this.#name = name;
    this.#surname = surname;
  }

  get name() {
    return this.#name;
  }

  set name(name) {
    this.#name = name;
  }

  get surname() {
    return this.#surname;
  }

  set surname(surname) {
    this.#surname = surname;
  }

  getAge() {
    return this.age;
  }
}
