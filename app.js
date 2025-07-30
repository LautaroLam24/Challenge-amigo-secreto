// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombres = [];

function agregarAmigo() {
  let nombreIngresado = document.getElementById("amigo").value;

  if (nombreIngresado == "") {
    alert("Por favor, inserte un nombre.");
  } else {
    nombres.push(nombreIngresado);
    actualizarAmigo(nombres);
  }
  return (document.querySelector("#amigo").value = "");
}

function actualizarAmigo(nombres) {
  let lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";

  for (let i = 0; i < nombres.length; i++) {
    let item = document.createElement("li");
    item.textContent = nombres[i];
    lista.appendChild(item);
  }
}
