const video_emision = document.getElementById("video_emision")
const video_fuente1 = document.getElementById("video_fuente1")
const video_fuente2 = document.getElementById("video_fuente2")
const video_fuente3 = document.getElementById("video_fuente3")
const video_fuentes = [video_fuente1,video_fuente2,video_fuente3];

let modo_automatico = false;
let modo_bucle = false;
let tiempo_inicio_bucle = 0;
let fuente = 0;
let bucle_tiempo = setInterval;

video_emision.poster="https://github.com/myTeachingURJC/2019-2020-CSAAI/raw/master/L10/test.png";
video_emision.src="https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente1.mp4"
video_fuente1.src="https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente1.mp4"
video_fuente2.src="https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente2.mp4"
video_fuente3.src="https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente3.mp4"
video_fuente4.poster="emision_pruebas.png"

video_fuente1.play();
video_fuente2.play();
video_fuente3.play();


function tiempo_acabado_modo_bucle(){
    video_emision.currentTime=tiempo_inicio_bucle;
    video_emision.play();
  }

function tiempo_busqueda_acabada(){
    if (modo_automatico){
      if (fuente == 2){
        fuente = 0;
        video_emision.src=video_fuentes[fuente].src
        video_emision.currentTime=video_fuentes[fuente].currentTime
        video_emision.play();
      }else{
        fuente = fuente + 1;
        video_emision.src=video_fuentes[fuente].src
        video_emision.currentTime=video_fuentes[fuente].currentTime
        video_emision.play();
      }
      setTimeout(tiempo_busqueda_acabada,3000,"JavaScript");
    }
}

function seleccion_fuente1(){
    clearInterval(bucle_tiempo)
    if (!(modo_automatico)){
      video_emision.src="https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente1.mp4"
      tiempo_inicio_bucle = video_fuente1.currentTime;
      video_emision.currentTime=tiempo_inicio_bucle;
      video_emision.play();
      video_emision.poster="";
      if(modo_bucle){
        bucle_tiempo = setInterval(tiempo_acabado_modo_bucle,2000,"JavaScript");
      }
    }
}

function seleccion_fuente2(){
    clearInterval(bucle_tiempo);
    if (!(modo_automatico)){
      video_emision.src="https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente2.mp4"
      tiempo_inicio_bucle = video_fuente2.currentTime;
      video_emision.currentTime=tiempo_inicio_bucle
      video_emision.play();
      video_emision.poster="";
      if(modo_bucle){
        bucle_tiempo = setInterval(tiempo_acabado_modo_bucle,2000,"JavaScript");
      }
    }
}

function seleccion_fuente3(){
    clearInterval(bucle_tiempo);
    if (!(modo_automatico)){
      video_emision.src="https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente3.mp4"
      tiempo_inicio_bucle = video_fuente3.currentTime;
      video_emision.currentTime=tiempo_inicio_bucle
      video_emision.play();
      video_emision.poster="";
      if(modo_bucle){
        bucle_tiempo = setInterval(tiempo_acabado_modo_bucle,2000,"JavaScript");
      }
    }
}

function seleccion_fuente4(){
    modo_bucle = false;
    modo_automatico = false;
    video_emision.src=null;
    video_emision.poster="emision_pruebas.png"
    document.getElementById('button_modo_manual').style.borderColor  = '#4CAF50';
    document.getElementById('button_modo_manual').style.color = "green";
    document.getElementById('button_modo_automatico').style.borderColor  = 'Gray';
    document.getElementById('button_modo_automatico').style.color = "rgba(155,155,155,0.3)";
    document.getElementById('button_modo_bucle').style.borderColor  = 'Gray';
    document.getElementById('button_modo_bucle').style.color = "rgba(155,155,155,0.3)";
}

function seleccion_automatico(){
    clearInterval(bucle_tiempo);
    if (modo_automatico == false){
      modo_automatico = true;
      fuente = 0;
      video_emision.src="https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente1.mp4"
      video_emision.currentTime=video_fuente1.currentTime
      video_emision.play();
      video_emision.poster="";
      document.getElementById('button_modo_manual').style.borderColor  = 'Gray';
      document.getElementById('button_modo_manual').style.color = "rgba(155,155,155,0.3)";
      document.getElementById('button_modo_automatico').style.borderColor  = '#f44336';
      document.getElementById('button_modo_automatico').style.color = "red";
      document.getElementById('button_modo_bucle').style.borderColor  = 'Gray';
      document.getElementById('button_modo_bucle').style.color = "rgba(155,155,155,0.3)";
      setTimeout(tiempo_busqueda_acabada,3000,"JavaScript");
    }
}

function seleccion_manual(){
    modo_automatico = false;
    modo_bucle = false;
    clearInterval(bucle_tiempo);
    video_emision.src="https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente1.mp4"
    video_emision.currentTime=video_fuente1.currentTime
    video_emision.play();
    video_emision.poster=""
    document.getElementById('button_modo_manual').style.borderColor  = '#4CAF50';
    document.getElementById('button_modo_manual').style.color = "green";
    document.getElementById('button_modo_automatico').style.borderColor  = 'Gray';
    document.getElementById('button_modo_automatico').style.color = "rgba(155,155,155,0.3)";
    document.getElementById('button_modo_bucle').style.borderColor  = 'Gray';
    document.getElementById('button_modo_bucle').style.color = "rgba(155,155,155,0.3)";
}

function seleccion_bucle(){
    modo_bucle = true;
    modo_automatico = false;
    video_emision.poster="";
    document.getElementById('button_modo_manual').style.borderColor  = 'Gray';
    document.getElementById('button_modo_manual').style.color = "rgba(155,155,155,0.3)";
    document.getElementById('button_modo_automatico').style.borderColor  = 'Gray';
    document.getElementById('button_modo_automatico').style.color = "rgba(155,155,155,0.3)";
    document.getElementById('button_modo_bucle').style.borderColor  = '#ff9800';
    document.getElementById('button_modo_bucle').style.color = "orange";
}
