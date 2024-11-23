let body = document.querySelector("body");

let crearImagen = document.createElement("img");
crearImagen.setAttribute("src", "./assests/img_la.jpg");
crearImagen.setAttribute("alt", "LA");

let crearH1 = document.createElement("h1");
crearH1.textContent = "This is a Heading";

let crearP = document.createElement("p");
crearP.textContent = "This is a paragraph";

let crearP2 = document.createElement("p");
crearP2.textContent = "This is a another paragraph";

body.appendChild(crearImagen);
body.appendChild(crearH1);
body.appendChild(crearP);
body.appendChild(crearP2);
