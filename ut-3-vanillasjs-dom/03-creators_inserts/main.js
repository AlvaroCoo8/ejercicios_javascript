const body = document.querySelector("body");

const crearElemento = (tag, atributos = {}, texto = "") => {
  const elemento = document.createElement(tag);
  Object.entries(atributos).forEach(([key, value]) =>
    elemento.setAttribute(key, value)
  );
  if (texto) elemento.textContent = texto;
  return elemento;
};

const container = crearElemento("div");

container.appendChild(
  crearElemento("h1", {}, "The input min and max attributes")
);
container.appendChild(document.createElement("br"));
container.appendChild(
  crearElemento(
    "p",
    {},
    "The min and max attributes specify the minimum and maximum values for an input element"
  )
);
container.appendChild(document.createElement("br"));

const form = crearElemento("form", { action: "/action_page.php" });

form.appendChild(
  crearElemento("label", { for: "datemax" }, "Enter a date before 1980-01-01:")
);
form.appendChild(
  crearElemento("input", {
    type: "date",
    id: "datemax",
    name: "datemax",
    max: "1979-12-31",
  })
);
form.appendChild(document.createElement("br"));
form.appendChild(document.createElement("br"));

form.appendChild(
  crearElemento("label", { for: "datemin" }, "Enter a date after 2000-01-01:")
);
form.appendChild(
  crearElemento("input", {
    type: "date",
    id: "datemin",
    name: "datemin",
    min: "2000-01-02",
  })
);
form.appendChild(document.createElement("br"));
form.appendChild(document.createElement("br"));

form.appendChild(
  crearElemento("label", { for: "quantity" }, "Quantity (between 1 and 5):")
);
form.appendChild(
  crearElemento("input", {
    type: "number",
    id: "quantity",
    name: "quantity",
    min: "1",
    max: "5",
  })
);
form.appendChild(document.createElement("br"));
form.appendChild(document.createElement("br"));

form.appendChild(crearElemento("input", { type: "submit", value: "Submit" }));

container.appendChild(form);
body.appendChild(container);
