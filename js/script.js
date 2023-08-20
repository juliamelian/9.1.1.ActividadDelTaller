// Array extraño
const strangeArray = [
  "Zero",
  function () {
    alert("Hola soy una función en un array");
  },
  22,
  null,
  "Go lang",
  undefined,
  "Cobol",
  "I'm programmer",
  -2000,
  "Hello world",
  `One is ${1}`,
  { name: "Info", lastname: "last info" },
  () => true,
  function showNumbers() {
    return "1, 2, 3, 4";
  },
  "Another String",
  ["Hola mundo!"],
  "b is a letter",
  "JavaScript",
];

// Función que recibe por parámetro un array y muestra sus elementos en pantalla
function showList(array) {
  const container = document.getElementById("list");
  container.innerHTML = "";
  // Más info de forEach => https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
  array.forEach((element) => {
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(element));
    container.appendChild(li);
  });
}

document.addEventListener("DOMContentLoaded", (e) => {
  // acá uso una función flecha declarada dentro del método filter
  const filteredStrangeArray1 = strangeArray.filter((elemento) => typeof elemento === "string");
  filteredStrangeArray1.sort(function (a, b) {
    return a.localeCompare(b);
  });
  const p1 = document.querySelector("p");
  p1.innerHTML = "Esta es una manera de hacerlo con una función de flecha declarada dentro del método filter:"
  showList(filteredStrangeArray1);

  function isAString(value) {
    if (typeof value === "string") {
      return true;
    }
  }
  const filteredStrangeArray2 = strangeArray.filter(isAString);
  filteredStrangeArray2.sort(function (a, b) {
    return a.localeCompare(b);
  });
  ul2 = document.createElement("ul");
  ul2.innerHTML = "";
  filteredStrangeArray2.forEach((element) => {
    const li2 = document.createElement("li");
    li2.appendChild(document.createTextNode(element));
    ul2.appendChild(li2);
  });
  p2 = document.createElement("p");
  p2.innerHTML = "Y esta es otra manera también válida de hacerlo, pero que declara la función fuera del método y luego la llama:";
  body = document.querySelector("body");
  body.appendChild(p2);
  body.appendChild(ul2);
});