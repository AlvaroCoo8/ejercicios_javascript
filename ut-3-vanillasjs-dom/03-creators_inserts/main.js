const body = document.querySelector("body")

let crearDiv = document.createElement("div")

let crearH1 = document.createElement("h1")
crearH1.textContent = "The input min and max attributes"
crearDiv.appendChild(crearH1)

let br = document.createElement("br")
crearDiv.appendChild(br)

let crearP = document.createElement("P")
crearP.textContent = "The mind and and max attributtes specifity the minimum and maximus values for an input element"
crearDiv.appendChild(crearP)

let crearBr = document.createElement("br")
crearDiv.appendChild(crearBr)

let crearForm = document.createElement("form")
crearForm.action = "/action_page.php"

let crearLabel1 = document.createElement("label")
// crearLabel1.htmlFor = "datemax"
crearLabel1.setAttribute("for", "datemax")
crearLabel1.textContent = "Enter a date befeore 1980-01-01:"
crearForm.appendChild(crearLabel1)

let crearInput = document.createElement("input")
crearInput.type = "date"
crearInput.id = "datemax"
crearInput.name = "datemax"
crearInput.max = "1979-12-31"
crearForm.appendChild(crearInput)

let crearBr1 = document.createElement("br")
crearForm.appendChild(crearBr1)

let crearBr2 = document.createElement("br")
crearForm.appendChild(crearBr2)

let crearLabel2 = document.createElement("label")
// crearLabel2.htmlFor = "datemin"
crearLabel2.setAttribute("for", "datemin")
crearLabel2.textContent = "Enter a date after 2000-01-01:"
crearForm.appendChild(crearLabel2)

let crearInput2 = document.createElement("input")
crearInput2.type = "date"
crearInput2.id = "datemin"
crearInput2.name = "datemin"
crearInput2.max = "2000-001-02"
crearForm.appendChild(crearInput2)

let crearBr3 = document.createElement("br")
crearForm.appendChild(crearBr3)

let crearBr4 = document.createElement("br")
crearForm.appendChild(crearBr4)

let crearLabel3 = document.createElement("label")
// crearLabel3.htmlFor = "quantity"
crearLabel3.setAttribute("for", "quantity")

crearLabel3.textContent = "Quantity (between 1 and 5):"
crearForm.appendChild(crearLabel3)

let crearInput3 = document.createElement("input")
crearInput3.type = "number"
crearInput3.id = "quantity"
crearInput3.name = "quantity"
crearInput3.min = "1"
crearInput3.max = "5"
crearForm.appendChild(crearInput3)

let crearBr5 = document.createElement("br")
crearForm.appendChild(crearBr5)

let crearBr6 = document.createElement("br")
crearForm.appendChild(crearBr6)

let crearInput4 = document.createElement("input")
crearInput4.type = "submit"
crearInput4.value = "Submit"

crearDiv.appendChild(crearForm)

body.appendChild(crearDiv)

