import { Person } from "./person";

describe("OOP Person", () => {
  it("should gets name, surname, country and age", () => {
    let person = new Person("Antonio", "Rufus");
    person.country = "ESPAÑA";
    person.age = "27";
    expect(person.name).toBe("Antonio");
    expect(person.surname).toBe("Rufus");
    expect(person.country).toBe("ESPAÑA");
    expect(person.age).toBe("27");
  });

  it("should sets name = Peter, surname = Jackson, country = CANADA and age = 39", () => {
    let person = new Person("Peter", "Jackson");
    person.country = "CANADA";
    person.age = "39";
    expect(person.name).toBe("Peter");
    expect(person.surname).toBe("Jackson");
    expect(person.country).toBe("CANADA");
    expect(person.age).toBe("39");
  });
});
