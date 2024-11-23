const persons = [
  { name: "Juan", age: 25 },
  { name: "María", age: 30 },
  { name: "Carlos", age: 22 },
  { name: "Luisa", age: 28 },
  { name: "Ana", age: 35 },
];

/*
 ** Usando el array persons crea una función que devuelva
 ** otro array de los nombres
 ** Usando el bucle FOR
 **/
export const getNameWithFor = () => {
  let nombres = [];

  for (let i = 0; i < persons.length; i++) {
    nombres.push(persons[i].name);
  }

  return nombres;
};

/*
 ** Usando el array persons crea una función que devuelva
 ** otro array de los nombres
 ** Usando el bucle DO WHILE
 **/
export const getNameWithDoWhile = () => {
  let nombres = [];
  let i = 0;

  do {
    nombres.push(persons[i].name);
    i++;
  } while (i < persons.length);

  return nombres;
};

/*
 ** Usando el array persons crea una función que devuelva
 ** otro array de los nombres
 ** Usando el bucle WHILE
 **/
export const getNameWithWhile = () => {
  let nombres = [];
  let i = 0;

  while (i < persons.length) {
    nombres.push(persons[i].name);
    i++;
  }

  return nombres;
};

/*
 ** Usando el array persons crea una función que devuelva
 ** otro array de las edades
 ** Usando el bucle FOR
 **/
export const getAgeWithFor = () => {
  let edades = [];

  for (let i = 0; i < persons.length; i++) {
    edades.push(persons[i].age);
  }

  return edades;
};

/*
 ** Usando el array persons crea una función que devuelva
 ** otro array de las edades
 ** Usando el bucle DO WHILE
 **/
export const getAgeWithDoWhile = () => {
  let edades = [];
  let i = 0;

  do {
    edades.push(persons[i].age);
    i++;
  } while (i < persons.length);

  return edades;
};

/*
 ** Usando el array persons crea una función que devuelva
 ** otro array de las edades
 ** Usando el bucle WHILE
 **/
export const getAgeWithWhile = () => {
  let edades = [];
  let i = 0;

  while (i < persons.length) {
    edades.push(persons[i].age);
    i++;
  }

  return edades;
};
