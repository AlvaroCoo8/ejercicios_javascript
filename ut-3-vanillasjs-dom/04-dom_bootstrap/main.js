const body = document.querySelector("body");
body.classList.add("p-3", "m-0", "border-0", "bd-example");

const div = document.createElement("div");
div.classList.add("list-group");

const types = [
  "default",
  "primary",
  "secondary",
  "success",
  "danger",
  "warning",
  "info",
  "light",
  "dark",
];

types.forEach((type) => {
  const a = document.createElement("a");
  a.href = "#";
  a.textContent = "A simple " + type + " list group item";
  a.classList.add("list-group-item", "list-group-item-action");

  if (type != "default") {
    a.classList.add("list-group-item-" + type);
  }

  div.appendChild(a);
});

body.appendChild(div);
