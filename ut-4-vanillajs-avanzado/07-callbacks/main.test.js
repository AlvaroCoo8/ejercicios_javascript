import * as callback from "./main";

describe("callbacks", () => {
  it("should get 23 when adds [1,2,3,4,5] + [2,3,1,2]", () => {
    const result = callback.addTwoArrays(
      [1, 2, 3, 4, 5],
      [2, 3, 1, 2],
      callback.sumCallback
    );
    expect(result).toBe(23);
  });

  it("should get 'My tasks list: study buy sleep play' when pass ['study','buy','sleep','play']", () => {
    const result = callback.showTasksList(
      ["study", "buy", "sleep", "play"],
      callback.tasksListCallback
    );
    expect(result).toBe("My tasks list: study, buy, sleep, play");
  });

  it("should double the elements of the array", (done) => {
    callback.doubleElement([2, 3, 4], (result) => {
      expect(result).toEqual([4, 6, 8]);
      done();
    });
  });

  it("should get 18 when adds [2,3,4] + [2,3,4] asynchronously", (done) => {
    callback.addTwoArraysAsync([2, 3, 4], [2, 3, 4], (result) => {
      expect(result).toBe(18);
      done();
    });
  });

  it("should get 'My tasks list: study buy sleep play' asynchronously", (done) => {
    callback.showTasksListAsync(["study", "buy", "sleep", "play"], (result) => {
      expect(result).toBe("My tasks list: study, buy, sleep, play");
      done();
    });
  });
});

// *************************************************************

// Declarar función
function obtenerDatos(callback) {
  setTimeout(() => {
    const datos = { nombre: "John", edad: 30 };
    callback(datos);
  }, 3000);
}

// Ejecutar función con una callback
obtenerDatos(function (datos) {
  console.log(datos);
});

console.log("Se están obteniendo los datos...");
