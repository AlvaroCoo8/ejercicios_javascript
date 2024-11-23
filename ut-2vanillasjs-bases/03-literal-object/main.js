const coche = {
  matricula: "1673MJP",
  marca: "ford",
  modelo: "fiesta",
  fechaMatriculacion: new Date("2021-05-11"),
  piezas: ["motor", "ruedas", "puertas", "maletero"],
  itv: {
    pasada: true,
    ultimaInspeccion: new Date("2023-10-25"),
    fechaVencimiento: new Date("2025-10-25")
  },
  concesionario: {
    nombre: "FORD",
    direccion: "Calle nueva",
    ubicacion: "Yunquera",
    codPostal: 29410,
  },
};

console.log(Object.keys(coche));
console.log(Object.values(coche));
