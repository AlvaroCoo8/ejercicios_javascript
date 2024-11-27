import * as promises from "./main";

describe("DataBase Promises - selectUserById", () => {
  it("should gets user with id = 2", () => {
    return promises.selectUserById(2).then((user) => {
      expect(user).toEqual({ id: 2, name: "Usuario2" });
    });
  });

  it("should gets user not found with id = 5", () => {
    return promises.selectUserById(5).catch((error) => {
      expect(error).toEqual("User not found");
    });
  });
});

describe("DataBase Promises - selectUserByName", () => {
  it("should gets user with name = Usuario3", () => {
    return promises.selectUserByName("Usuario3").then((user) => {
      expect(user).toEqual({ id: 3, name: "Usuario3" });
    });
  });

  it("should gets user not found with name = John", () => {
    return promises.selectUserByName("John").catch((error) => {
      expect(error).toEqual("User not found");
    });
  });
});

describe("Calculate Pow Promise", () => {
  it("should get [1, 4, 9, 16, 25] with [1, 2, 3, 4, 5]", () => {
    return promises.calculatePowArray([1, 2, 3, 4, 5]).then((result) => {
      expect(result).toEqual([1, 4, 9, 16, 25]);
    });
  });

  it("should get The lenght arrays is 0 with []", () => {
    return promises.calculatePowArray([]).catch((error) => {
      expect(error).toEqual("The length array is 0");
    });
  });
});
