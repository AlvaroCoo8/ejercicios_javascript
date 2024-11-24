import { Director } from "./director";

export class Movie extends Director {
  #title;
  #year;
  #genre;
  #duration;
  #rating;
  #synopsis;

  constructor(title, name, date, place) {
    super(name, date, place);
    this.#title = title;
  }

  get title() {
    return this.#title;
  }

  set title(title) {
    this.#title = title;
  }

  get year() {
    return this.#year;
  }

  set year(year) {
    this.#year = year;
  }

  get genre() {
    return this.#genre;
  }

  set genre(genre) {
    this.#genre = genre;
  }

  get duration() {
    return this.#duration;
  }

  set duration(duration) {
    this.#duration = duration;
  }

  get rating() {
    return this.#rating;
  }

  set rating(rating) {
    this.#rating = rating;
  }

  get synopsis() {
    return this.#synopsis;
  }

  set synopsis(synopsis) {
    this.#synopsis = synopsis;
  }
}
