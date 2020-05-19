console.log("Ejecutando JS...");

const canvas = document.getElementById("canvas");

console.log(`canvas: Anchura: ${canvas.width}, Altura: ${canvas.height}`);
//body = document.getElementsByTagName('body')[0]
const display = document.getElementById("display");
const start = document.getElementsByClassName("start")
const caja_finish = document.getElementsByClassName("caja_finish")
const nombre_jugador_ficha = document.getElementById("nombre_jugador_ficha")
const sonido_raqueta = new Audio("hit_raqueta.mp3");
const sonido_pared = new Audio("ht_pared.mp3");
const sonido_punto = new Audio("gol.mp3");
const sonido_boton = new Audio("boton.mp3");
const ESTADO = {
    INIT: 0,
    SAQUE: 1,
    JUGANDO: 2,
}
const NOMBRES_JUGADORES = ["Andresxp04","Dorum de ternera","GO CHOCAPIC","Merchan","Faker"]


const ctx = canvas.getContext("2d");


const caja_input = document.getElementById("caja_input")


let posY_anterior_raqI = 100;
let distancia_recorrida_raqI_y = 0;
let nivel_vy = 360 / 7;
let velocidadY_por_recorrido = 0;
let marcador_izquierda = 0;
let marcador_derecha = 0;
let estado = ESTADO.INIT;
let nombre_jugador_online = NOMBRES_JUGADORES;

let juego_playvspc = false;


function tiempo_busqueda_acabada(){
    console.log("Pasaron 2 segundos antes de que pudieras ver esto.");
    document.getElementById('gif_buscando_jugadores').style.display = 'none';
    document.getElementById('partida_encontrada_imagen').style.display = 'block';
    document.getElementById('foto_jugador_online').style.display = 'block';
    document.getElementById('ficha_jugador_online').style.display = 'block';
    document.getElementById('vs_imagen').style.display = 'block';
    document.getElementById('aceptar_partida').style.display = 'block';
    nombre_jugador_ficha.innerHTML = nombre_jugador_online[num_random(0,5)] + "<br>" + "Partidas jugadas: " + num_random(0,1000)
}


function color_nuevo_elemento(elemento,color_elegido) {
  sonido_boton.currentTime = 0;
  sonido_boton.play();


  switch (color_elegido) {
    case "red":

        if(elemento == "raqueta_izquierda"){
          raqI.color_raqueta = color_elegido;
        }else if(elemento == "raqueta_derecha"){
          raqD.color_raqueta = color_elegido;
        }else if(elemento == "bola"){
          bola.color_bola = color_elegido;
        }
        break;
    case "yellow":

        if(elemento == "raqueta_izquierda"){
          raqI.color_raqueta = color_elegido;
        }else if(elemento == "raqueta_derecha"){
          raqD.color_raqueta = color_elegido;
        }else if(elemento == "bola"){
          bola.color_bola = color_elegido;
        }
        break;
    case "blue":
        if(elemento == "raqueta_izquierda"){
          raqI.color_raqueta = color_elegido;
        }else if(elemento == "raqueta_derecha"){
          raqD.color_raqueta = color_elegido;
        }else if(elemento == "bola"){
          bola.color_bola = color_elegido;
        }
        break;
    case "green":
        if(elemento == "raqueta_izquierda"){
          raqI.color_raqueta = color_elegido;
        }else if(elemento == "raqueta_derecha"){
          raqD.color_raqueta = color_elegido;
        }else if(elemento == "bola"){
          bola.color_bola = color_elegido;
        }
        break;
  }
}

function volver_pagina_principal() {
  sonido_boton.currentTime = 0;
  sonido_boton.play();

  document.getElementById('pagina_principal').style.display = 'block';
  document.getElementById('pagina_settings').style.display = 'none';

}


function juego_pvp() {
  sonido_boton.currentTime = 0;
  sonido_boton.play();

  document.getElementById('pagina_principal').style.display = 'none';
}

function juego_plyvspc() {
  sonido_boton.currentTime = 0;
  sonido_boton.play();
  console.log("juego player vs pc");
  document.getElementById('pagina_principal').style.display = 'none';
  juego_playvspc = true;

}

function juego_plyvsonline() {
  sonido_boton.currentTime = 0;
  sonido_boton.play();
  console.log("juego player vs online");
  document.getElementById('pagina_principal').style.display = 'none';
  document.getElementById('pagina_online').style.display = 'block';

}



function buscar_jugadores_online() {
  sonido_boton.currentTime = 0;
  sonido_boton.play();
  document.getElementById('gif_buscando_jugadores').style.display = 'block';
  setTimeout(tiempo_busqueda_acabada,1000,"JavaScript");
  console.log(caja_input.value);
}

function juego_settings() {
  sonido_boton.currentTime = 0;
  sonido_boton.play();
  document.getElementById('pagina_principal').style.display = 'none';
  document.getElementById('pagina_settings').style.display = 'block';

}



function start_juego() {
  sonido_boton.currentTime = 0;
  sonido_boton.play();
  estado = ESTADO.SAQUE;
  document.getElementById('start').style.display = 'none';
}

function finish_juego() {
  sonido_boton.currentTime = 0;
  sonido_boton.play();
  estado = ESTADO.INIT;
  marcador_izquierda = 0;
  marcador_derecha = 0;
  document.getElementById('start').style.display = 'inline-block';
  raqI.init();
  raqD.init();
}

function num_random(min, max_exluido) {
  let numero_que_salio = 0;
  numero_que_salio = Math.floor(Math.random() * (max_exluido - min)) + min;
  return numero_que_salio;
}

function draw(){
  if (estado == ESTADO.SAQUE) {
     ctx.font = "30px Arial";
     ctx.fillStyle = "yellow";
     ctx.fillText("Saca! con la tecla (s)", 10, 350);
   }

  if (estado == ESTADO.JUGANDO) {
     bola.draw();
  }

  raqI.draw();
  raqD.draw();

  //--------- Dibujar la red
  ctx.beginPath();
  ctx.setLineDash([10, 10]);
  ctx.strokeStyle = 'white';
  ctx.lineWidth = 2;
  ctx.moveTo(canvas.width/2, 0);
  //-- Dibujar hasta el punto inferior
  ctx.lineTo(canvas.width/2, canvas.height);
  ctx.stroke();

  //------ Dibujar el tanteo
  ctx.font = "100px Arial";
  ctx.fillStyle = "white";
  ctx.fillText(marcador_izquierda, 200, 80);
  ctx.fillText(marcador_derecha, 340, 80);
}

function animacion(){
  raqI.update();

  if (juego_playvspc){
    raqD.y = bola.y * 0.89;
  }

  raqD.update();

  if (bola.x >= canvas.width) {
      sonido_punto.currentTime = 0;
      sonido_punto.play();
      marcador_izquierda += 1;
      estado = ESTADO.SAQUE;
      bola.init();
      raqI.init();
      raqD.init();
      bola.vx = 0;
      bola.vy = 0;
  }else if(bola.x <= 0){
      sonido_punto.currentTime = 0;
      sonido_punto.play();
      marcador_derecha += 1;
      estado = ESTADO.SAQUE;
      bola.init();
      raqI.init();
      raqD.init();
      bola.vx = 0;
      bola.vy = 0;
  }
  if (bola.x >= raqI.x_ini+raqI.width && bola.x <= raqD.x_ini && bola.y <= 0) {
      sonido_pared.currentTime = 0;
      sonido_pared.play();
      bola.vy = bola.vy * -1;
  }
  if (bola.x >= raqI.x_ini+raqI.width && bola.x <= raqD.x_ini && bola.y+bola.size >= canvas.height  ) {
      sonido_pared.currentTime = 0;
      sonido_pared.play();
      bola.vy = bola.vy * -1;
  }
  if (bola.x >= raqI.x && bola.x <=(raqI.x+10) &&
     bola.y >= raqI.y && bola.y <=(raqI.y+40)) {
      sonido_raqueta.currentTime = 0;
      sonido_raqueta.play();
      bola.vx = bola.vx * -1;



  }
  if (bola.x >= raqD.x && bola.x <=(raqD.x+10) &&
     bola.y >= raqD.y && bola.y <=(raqD.y+40)) {
      sonido_raqueta.currentTime = 0;
      sonido_raqueta.play();
      bola.vx = bola.vx * -1;



  }

  bola.update();

  if(raqI.y <= 0){
     raqI.y = 0;
  }else if(raqI.y >= canvas.height-raqI.height){
     raqI.y = canvas.height-raqI.height;
  }

  if(raqD.y <= 0){
     raqD.y = 0;
  }else if(raqD.y >= canvas.height-raqD.height){
     raqD.y = canvas.height-raqD.height;
  }

  ctx.clearRect(0,0, canvas.width, canvas.height);
 //-- Dibujar el nuevo frame
  draw();
}

//-- Inicializa la bola: A su posicion inicial
const bola = new Bola(ctx);
//-- Crear las raquetas
const raqI = new Raqueta(ctx);
const raqD = new Raqueta(ctx);

raqD.x_ini = 540;
raqD.y_ini = 180;
raqD.init();
document.getElementById('pagina_settings').style.display = 'none';
document.getElementById('pagina_online').style.display = 'none';












//-- Arrancar la animación
setInterval(()=>{
  animacion();
},16);


window.onkeydown = (e) => {
  if(estado == ESTADO.SAQUE || estado == ESTADO.JUGANDO){
      switch (e.key) {
        case "s":
          if(estado == ESTADO.SAQUE){
            //body.classList.toggle("color");
            bola.init();
            if(num_random(0,2) == 0){
              bola.vx = bola.vx_ini;
            }else{
              bola.vx = bola.vx_ini  * -1;
            }

            if(num_random(0,2) == 0){
              bola.vy = bola.vy_ini;
            }else{
              bola.vy = bola.vy_ini  * -1;
            }
            estado = ESTADO.JUGANDO;
            break;
          }
          break;
        case "q":
           raqI.v = raqI.v_ini * -1;
           break;
        case "a":
           raqI.v = raqI.v_ini;
           break;
        case "p":
          if(juego_playvspc == false){
           raqD.v = raqD.v_ini * -1;
          }
           break;
        case "l":
          if(juego_playvspc == false){
           raqD.v = raqD.v_ini;
          }
           break;
        default:
      }
   }
}

window.onkeyup = (e) => {
  if (e.key == "a" || e.key == "q"){
    //-- Quitar velocidad de la raqueta
    raqI.v = 0;
  }

  if (e.key == "p" || e.key == "l") {
    raqD.v = 0;
  }
}
