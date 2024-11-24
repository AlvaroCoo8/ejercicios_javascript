import { Movie } from "./movie";

const movie = new Movie(
  "El Señor de los Anillos: La Comunidad del Anillo",
  "Peter Jackson",
  "31 de octubre de 1961",
  "Pukerua Bay, Nueva"
);

describe("Inheritance - Birth class", () => {
  it("should gets date and place birth of Peter Jacson", () => {
    expect(movie.date).toBe("31 de octubre de 1961");
    expect(movie.place).toBe("Pukerua Bay, Nueva");
  });
});

describe("Inheritance - Director class", () => {
  movie.nationality = "Neozelandes";
  movie.notableFilmography = [
    "El Señor de los Anillos",
    "El Hobbit",
    "King Kong",
  ];

  it("should gets name, nationality and notableFiImography for Director", () => {
    expect(movie.name).toBe("Peter Jackson");
    expect(movie.nationality).toBe("Neozelandes");
    expect(movie.notableFilmography).toEqual([
      "El Señor de los Anillos",
      "El Hobbit",
      "King Kong",
    ]);
  });
});

describe("Inheritance - Movie class", () => {
  movie.year = 2001;
  movie.genre = "Fantasía";
  movie.duration = 178;
  movie.rating = 9.2;
  movie.synopsis =
    "Un hobbit llamado Fordo Baggins emprende un viaje épico para destuir un anillo malévolo y evitar que caiga en manos del Señor Oscuro";

  it("should gets title, year, genre, duration, rating and synopsis for El Señor de los Anillos", () => {
    expect(movie.title).toBe(
      "El Señor de los Anillos: La Comunidad del Anillo"
    );
    expect(movie.year).toBe(2001);
    expect(movie.duration).toBe(178);
    expect(movie.rating).toBe(9.2);
    expect(movie.synopsis).toBe(
      "Un hobbit llamado Fordo Baggins emprende un viaje épico para destuir un anillo malévolo y evitar que caiga en manos del Señor Oscuro"
    );
  });
});
