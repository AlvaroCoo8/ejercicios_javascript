export class Birth {
  #date;
  #place;

  constructor(date, place) {
    this.#date = date;
    this.#place = place;
  }

  get date() {
    return this.#date;
  }

  set date(date) {
    this.#date = date;
  }

  get place() {
    return this.#place;
  }

  set place(place) {
    this.#place = place;
  }
}
