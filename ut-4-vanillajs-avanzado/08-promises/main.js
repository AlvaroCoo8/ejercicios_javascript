// Objeto que emula una base de datos
const database = {
  users: [
    { id: 1, name: "Usuario1" },
    { id: 2, name: "Usuario2" },
    { id: 3, name: "Usuario3" },
  ],
};

export const selectUserById = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = database.users.find((user) => user.id === id);
      user ? resolve(user) : reject("User not found");
    }, 2000);
  });
};

export const selectUserByName = (name) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = database.users.find((user) => user.name === name);
      user ? resolve(user) : reject("User not found");
    }, 2000);
  });
};

export const calculatePowArray = (numbers) => {
  return new Promise((resolve, reject) => {
    numbers.length === 0
      ? reject("The length array is 0")
      : resolve(numbers.map((num) => num ** 2));
  });
};
