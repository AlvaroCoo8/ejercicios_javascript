import { Book } from "./book";

describe("OOP", () => {
  it("should gets title, author and published for La vida del lazarillo de Tormes", () => {
    let book = new Book("La vida del lazarillo de Tormes", "Anonymus");
    book.published = "1554";
    expect(book.tittle).toBe("La vida del lazarillo de Tormes");
    expect(book.author).toBe("Anonymus");
    expect(book.published).toBe("1554");
  });

  it("should gets title, author and published for The NeverEnding Story", () => {
    let book = new Book("The NeverEnding Story", "Michael Ende");
    book.published = "1984";

    expect(book.tittle).toBe("The NeverEnding Story");
    expect(book.author).toBe("Michael Ende");
    expect(book.published).toBe("1984");
  });

  it("should gets title, author and published for The Lord of the Rings", () => {
    let book = new Book("The Lord of the Rings", "J. R. R. Tolkien");
    book.published = "1954";

    expect(book.tittle).toBe("The Lord of the Rings");
    expect(book.author).toBe("J. R. R. Tolkien");
    expect(book.published).toBe("1954");
  });

  it("should gets title, author and published for Beowulf", () => {
    let book = new Book("Beowulf", "Anonymus");
    book.published = "900";

    expect(book.tittle).toBe("Beowulf");
    expect(book.author).toBe("Anonymus");
    expect(book.published).toBe("900");
  });
});
