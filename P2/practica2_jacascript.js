console.log("Ejecutando JS...");

const ejemplo2 = document.getElementById('ejemplo');
const boton1 = document.getElementById('boton1');

console.log(ejemplo2.innerHTML)
console.log(ejemplo.innerHTML)


boton1.onclick = () => {
  console.log("Click!");

  //-- Cambiar el color de fondo
  //-- Si no tenia color asignado, poner amarillo
  if (boton1.style.backgroundColor=="") {
    boton1.style.backgroundColor = "yellow";
    boton1.innerHTML = "+"

  //-- Ya tiene color: quitarselo
  } else {
    boton1.style.backgroundColor = "";
  }
}
