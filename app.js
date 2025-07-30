// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
  let nombreIngresado = document.getElementById("amigo").value;

  if (nombreIngresado == "") {
    alert("Por favor, inserte un nombre.");
  } else {
    amigos.push(nombreIngresado);
    actualizarAmigo(amigos);
  }
  return (document.querySelector("#amigo").value = "");
}

function actualizarAmigo(amigos) {
  let lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";

  for (let i = 0; i < amigos.length; i++) {
    let item = document.createElement("li");
    item.textContent = amigos[i];
    lista.appendChild(item);
  }
}

function sortearAmigo() {
  if (amigos.length < 2) {
    alert("Para poder sortear se necesita al menos 2 nombres!");
    return;
  } else {
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSecreto = amigos[indiceAleatorio];

    let resultadoAmigo = document.getElementById("resultado");
    resultadoAmigo.innerHTML = `<li>Tu amigo secreto es: ${amigoSecreto}</li>`;

    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

    amigos = [];
  }
}
