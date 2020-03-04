console.log("Ejecutando JS...");

const ejemplo = document.getElementById('ejemplo');
const boton1 = document.getElementById('boton1');
const boton2 = document.getElementById('boton2');
const boton3 = document.getElementById('boton3');
const boton_suma = document.getElementById('boton_suma');
const boton_igual = document.getElementById('boton_igual');


console.log(ejemplo.innerHTML)

 var cadena = [];

boton1.onclick = () => {
  console.log("Click!");
  ejemplo.innerHTML = ejemplo.innerHTML + 1



    //-- Cambiar el color de fondo
  //-- Si no tenia color asignado, poner amarillo
  if (boton1.style.backgroundColor=="") {
    boton1.style.backgroundColor = "yellow";


  //-- Ya tiene color: quitarselo
  } else {
    boton1.style.backgroundColor = "";
  }
}

boton2.onclick = () => {
  ejemplo.innerHTML = ejemplo.innerHTML + 2
  cadena.push("2")



}
boton3.onclick = () => {
  ejemplo.innerHTML = ejemplo.innerHTML + 3
  cadena.push("3")
}
boton_suma.onclick = () => {
  ejemplo.innerHTML = ejemplo.innerHTML + "+"

}
boton_igual.onclick = () => {
  ejemplo.innerHTML = ejemplo.innerHTML + "="

}
