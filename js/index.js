function myFunction() {
  var x = document.getElementById("lista-itens");
  if (x.className === "lista-itens") {
    x.className += " responsive";
  } else {
    x.className = "lista-itens";
  }
}