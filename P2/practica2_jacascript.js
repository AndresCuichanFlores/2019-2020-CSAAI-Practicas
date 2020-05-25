console.log("Ejecutando JS...");

const contenedor_abrir = document.getElementById('contenedor_abrir');
const display = document.getElementById('display');
const display_2 = document.getElementById('display_2');
const boton_suma = document.getElementById('boton_suma');
const boton_resta = document.getElementById('boton_resta');
const boton_dividir = document.getElementById('boton_dividir');
const boton_multiplicar = document.getElementById('boton_multiplicar');
const boton_borrar = document.getElementById('boton_borrar');
const boton_igual = document.getElementById('boton_igual');
const clear = document.getElementById("clear")
const digito = document.getElementsByClassName("digito")


var cadena_historial = [];
var n = 0;
const max_digitos = 80;
const max_calculos = 7;


document.getElementById('caja_todos_elementos').style.display = 'none';
document.getElementById('caja_historial').style.display = 'none';
document.getElementById('error_maximo_digitios').style.display = 'none';


function Open_Calculadora() {
  document.getElementById('caja_todos_elementos').style.display = 'inline-block';
  document.getElementById('caja_historial').style.display = 'inline-block';
  elementoPadre = contenedor_abrir.parentNode
  elementoPadre.removeChild(contenedor_abrir)
}

/*

*/


for (i=0; i<digito.length; i++) {
  digito[i].onclick = (ev) => {

    if(display.innerHTML.length <= max_digitos){
        if (display.innerHTML == "0" ){
            if(ev.target.value==00){
              display.innerHTML = 0;
            }else if (ev.target.value=="."){
              display.innerHTML = "0.";
            }else{
              display.innerHTML = ev.target.value
            }
        }else{
          display.innerHTML += ev.target.value
        }
    }else{
      document.getElementById('error_maximo_digitios').style.display = 'block';
    }
  }
}



clear.onclick = () => {
  document.getElementById('error_maximo_digitios').style.display = 'none';
  display.innerHTML = 0
}

boton_suma.onclick = (ev) => {
  if(display.innerHTML.length <= max_digitos){
    display.innerHTML += ev.target.value
  }else{

    document.getElementById('error_maximo_digitios').style.display = 'block';
  }

}

boton_resta.onclick = (ev) => {
  if(display.innerHTML.length <= max_digitos){
    display.innerHTML += ev.target.value
  }else{

    document.getElementById('error_maximo_digitios').style.display = 'block';
  }

}

boton_dividir.onclick = (ev) => {
  if(display.innerHTML.length <= max_digitos){
    display.innerHTML += ev.target.value
  }else{

    document.getElementById('error_maximo_digitios').style.display = 'block';
  }
}

boton_multiplicar.onclick = (ev) => {
  if(display.innerHTML.length <= max_digitos){
    display.innerHTML += ev.target.value
  }else{

    document.getElementById('error_maximo_digitios').style.display = 'block';
  }
}

boton_borrar.onclick = () => {

  document.getElementById('error_maximo_digitios').style.display = 'none';
  let cadena = []

  console.log(display.innerHTML.length);

  if(display.innerHTML.length == 1){
    display.innerHTML = 0;
  }else{
    for (i=0; i<display.innerHTML.length-1; i++) {
      cadena += display.innerHTML[i];
    }
    display.innerHTML  = cadena;
  }
}

boton_igual.onclick = () => {

  let cadena_aux = []

  if(n < max_calculos ){
    display_2.innerHTML += display.innerHTML + " = " + eval(display.innerHTML) + "<br>";
    cadena_historial[n] = display.innerHTML + " = " + eval(display.innerHTML) + "<br>";
    n = n + 1;
  }else{
    for (i=0; i<max_calculos; i++) {
      cadena_aux[i] = cadena_historial[i];
    }

    for (i=0; i<max_calculos-1; i++) {
      cadena_historial[i] = cadena_aux[1+i];
    }

    cadena_historial[max_calculos-1] = display.innerHTML + " = " + eval(display.innerHTML) + "<br>";
    display_2.innerHTML = [];

    for (i=0; i<max_calculos; i++) {
      display_2.innerHTML += cadena_historial[i];
    }
  }
  display.innerHTML = eval(display.innerHTML);
}
