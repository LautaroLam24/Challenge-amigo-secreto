// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombres = [];

function agregarAmigo() {
  let nombreIngresado = document.getElementById("amigo").value;

  if (nombreIngresado == "") {
    alert("Por favor, inserte un nombre.");
  } else {
    nombres.push(nombreIngresado);
  }
  console.log(nombres);
  return (document.querySelector("#amigo").value = "");
}
