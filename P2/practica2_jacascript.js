console.log("Ejecutando JS...");

const display = document.getElementById('display');
const boton1 = document.getElementById('boton1');
const boton2 = document.getElementById('boton2');
const boton3 = document.getElementById('boton3');
const boton_suma = document.getElementById('boton_suma');
const boton_igual = document.getElementById('boton_igual');
const clear = document.getElementById("clear")


/*
const gui = {
  display: document.getElementById("display"),
  boton_inc: document.getElementById("boton_suma"),
  boton_dec: document.getElementById("boton_igual")
}

const counter = {
  valor: 0,
  inc : function(value) {
    console.log(this.valor)
    console.log(counter.valor)
    this.valor += value;
    console.log(this.valor)
    console.log(counter.valor)
    gui.display.innerHTML = this.valor;
  }
}

gui.boton_inc.onclick = () => {
  counter.inc(1);
}

gui.boton_dec.onclick = () =>{
  counter.inc(-1);
}
pepe = "10+22"
console.log(eval(pepe))

*/




boton1.onclick = () => {
  if (display.innerHTML == 0){
    display.innerHTML = boton1.value
  }else{
    display.innerHTML += boton1.value
  }
}

boton2.onclick = () => {
  if (display.innerHTML == 0){
    display.innerHTML = boton2.value
  }else{
    display.innerHTML += boton2.value
  }
}
boton3.onclick = () => {
  if (display.innerHTML == 0){
    display.innerHTML = boton3.value
  }else{
    display.innerHTML += boton3.value
  }
}
clear.onclick = () => {
  display.innerHTML = 0

}
boton_suma.onclick = () => {
  display.innerHTML += boton_suma.value

}
boton_igual.onclick = () => {
  console.log(display.innerHTML)
  display.innerHTML = eval(display.innerHTML)

}
