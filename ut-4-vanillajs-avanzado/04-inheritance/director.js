import { Birth } from "./birth";

export class Director extends Birth {
  #name;
  #nationality;
  #notableFilmography;

  constructor(name, date, place) {
    super(date, place);
    this.name = name;
  }

  get name() {
    return this.#name;
  }

  set name(name) {
    this.#name = name;
  }

  get nationality() {
    return this.#nationality;
  }

  set nationality(nationality) {
    this.#nationality = nationality;
  }

  get notableFilmography() {
    return this.#notableFilmography;
  }

  set notableFilmography(notableFilmography) {
    this.#notableFilmography = notableFilmography;
  }
}
