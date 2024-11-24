export class Book {
  #tittle;
  #author;
  #published;

  constructor(tittle, author) {
    this.#tittle = tittle;
    this.#author = author;
  }

  get tittle() {
    return this.#tittle;
  }

  set tittle(tittle) {
    this.#tittle = tittle;
  }

  get author() {
    return this.#author;
  }

  set author(author) {
    this.#author = author;
  }

  get published() {
    return this.#published;
  }

  set published(published) {
    this.#published = published;
  }
}
