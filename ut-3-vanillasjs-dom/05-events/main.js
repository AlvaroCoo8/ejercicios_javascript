const botones = document.querySelectorAll("button");

botones[0].addEventListener("click", () => {
  alert("Click Event");
});

botones[1].addEventListener("mouseenter", () => {
  alert("Mouse Enter Event");
});

botones[2].addEventListener("mouseup", () => {
  alert("Mouse Up Event");
});

botones[3].addEventListener("mouseleave", () => {
  alert("Mouse Leave Event");
});

botones[4].addEventListener("mouseenter", () => {
  botones[4].className = "btn btn-danger";
});

botones[4].addEventListener("mouseleave", () => {
  botones[4].className = "btn btn-warning";
});

botones[5].addEventListener("click", () => {
  document.body.style.backgroundColor = "red";
});

botones[6].addEventListener("click", () => {
  document.body.style.backgroundColor = "white";
});

botones[7].addEventListener("click", () => {
  botones.forEach((boton) => {
    boton.className = "btn btn-dark";
    console.log(boton);
  });
});
