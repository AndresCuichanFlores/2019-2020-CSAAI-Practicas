console.log("Ejecutando JS...");

const display = document.getElementById('display');
const boton_suma = document.getElementById('boton_suma');
const boton_resta = document.getElementById('boton_resta');
const boton_dividir = document.getElementById('boton_dividir');
const boton_multiplicar = document.getElementById('boton_multiplicar');
const boton_borrar = document.getElementById('boton_borrar');
const boton_igual = document.getElementById('boton_igual');
const clear = document.getElementById("clear")
const digito = document.getElementsByClassName("digito")





for (i=0; i<digito.length; i++) {
  digito[i].onclick = (ev) => {
    if (display.innerHTML == 0){
      display.innerHTML = ev.target.value
    }else{
      display.innerHTML += ev.target.value
    }
  }
}

clear.onclick = () => {
  display.innerHTML = 0
}

boton_suma.onclick = (ev) => {
  display.innerHTML += ev.target.value
}

boton_resta.onclick = (ev) => {
  display.innerHTML += ev.target.value
}

boton_dividir.onclick = (ev) => {
  display.innerHTML += ev.target.value
}

boton_multiplicar.onclick = (ev) => {
  display.innerHTML += ev.target.value
}

boton_borrar.onclick = () => {

  let oracion = []

  for (i=0; i<display.innerHTML.length-1; i++) {
  oracion += display.innerHTML[i]
  }
  display.innerHTML  = oracion;

}

boton_igual.onclick = () => {
  display.innerHTML = eval(display.innerHTML)
  console.log(display.innerHTML)
  console.log(display.innerHTML.length)
}
