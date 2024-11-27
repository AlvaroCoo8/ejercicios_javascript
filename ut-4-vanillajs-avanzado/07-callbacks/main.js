export const addTwoArrays = (arr1, arr2, callback) => {
  return callback(arr1, arr2);
};

export const sumCallback = (arr1, arr2) => {
  const arrayConcatenado = [...arr1, ...arr2];
  return arrayConcatenado.reduce((total, valor) => total + valor, 0);
};

export const showTasksList = (tasks, callback) => {
  return callback(tasks);
};

export const tasksListCallback = (tasks) => {
  return `My tasks list: ${tasks.join(", ")}`;
};

export const doubleElement = (array, callback) => {
  setTimeout(() => {
    const doubled = array.map((num) => num * 2);
    callback(doubled);
  }, 4000);
};

export const addTwoArraysAsync = (arr1, arr2, callback) => {
  setTimeout(() => {
    const arrayConcatenado = [...arr1, ...arr2];
    callback(arrayConcatenado.reduce((total, valor) => total + valor, 0));
  }, 3000);
};

export const showTasksListAsync = (tasks, callback) => {
  setTimeout(() => {
    callback(`My tasks list: ${tasks.join(", ")}`);
  }, 2000);
};
