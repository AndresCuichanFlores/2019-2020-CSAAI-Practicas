const canvas = document.getElementById('canvas');
const img = document.getElementById('imagesrc')
const ctx = canvas.getContext('2d');
const deslizador_rojo = document.getElementById('deslizador_rojo')
const display_rojo = document.getElementById('display_rojo')
const deslizador_verde = document.getElementById('deslizador_verde')
const display_verde = document.getElementById('display_verde')
const deslizador_azul = document.getElementById('deslizador_azul')
const display_azul = document.getElementById('display_azul')

var guardar_array = []


img.onload = function () {
  canvas.width = img.width;
  canvas.height = img.height;
  ctx.drawImage(img, 0,0);
  let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  let data = imgData.data
  for (let i = 0; i < data.length; i++) {
    guardar_array[i] = data[i];
  }
};


deslizador_rojo.oninput = () => {
  display_rojo.innerHTML = deslizador_rojo.value
  ctx.drawImage(img, 0,0);
  let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  let data = imgData.data
  umbral_rojo = deslizador_rojo.value
  for (let i = 0; i < data.length; i+=4) {
    if (data[i] > umbral_rojo){
      data[i] = umbral_rojo;
      guardar_array[i] = data[i];
    }
  }
  for (let i = 0; i < data.length; i+=4) {
    data[i+1] = guardar_array[i+1];
  }
  for (let i = 0; i < data.length; i+=4) {
    data[i+2] = guardar_array[i+2];
  }
  ctx.putImageData(imgData, 0, 0);
}

deslizador_verde.oninput = () => {
  display_verde.innerHTML = deslizador_verde.value
  ctx.drawImage(img, 0,0);
  let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  let data = imgData.data
  umbral_verde = deslizador_verde.value
  for (let i = 0; i < data.length; i+=4) {
    if (data[i+1] > umbral_verde){
      data[i+1] = umbral_verde;
      guardar_array[i+1] = data[i+1];
    }
  }
  for (let i = 0; i < data.length; i+=4) {
    data[i] = guardar_array[i];
  }
  for (let i = 0; i < data.length; i+=4) {
    data[i+2] = guardar_array[i+2];
  }
  ctx.putImageData(imgData, 0, 0);
}

deslizador_azul.oninput = () => {
  display_azul.innerHTML = deslizador_azul.value
  ctx.drawImage(img, 0,0);
  let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  let data = imgData.data
  umbral_azul = deslizador_azul.value
  for (let i = 0; i < data.length; i+=4) {
    if (data[i+2] > umbral_azul){
      data[i+2] = umbral_azul;
      guardar_array[i+2] = data[i+2];
    }
  }
  for (let i = 0; i < data.length; i+=4) {
    data[i] = guardar_array[i];
  }
  for (let i = 0; i < data.length; i+=4) {
    data[i+1] = guardar_array[i+1];
  }
  ctx.putImageData(imgData, 0, 0);
}

function seleccion_modo_grises(){
  let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  let data = imgData.data
  for (let i = 0; i < data.length; i+=4) {
    valor_r = data[i]
    valor_g = data[i+1]
    valor_b= data[i+2]
    brillo = (3 * valor_r + 4 * valor_g + valor_b)/8
    data[i] = brillo
    data[i+1] = brillo
    data[i+2] = brillo
  }
  ctx.putImageData(imgData, 0, 0);
  document.getElementById('deslizador_colores').style.display = 'none';
  document.getElementById('button_modo_colores').style.borderColor  = 'Gray';
  document.getElementById('button_modo_colores').style.color = "rgba(155,155,155,0.3)";
  document.getElementById('button_modo_grises').style.borderColor  = '#bb6dde';
  document.getElementById('button_modo_grises').style.color = "#bb6dde"
}

function seleccion_modo_colores(){
  let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  let data = imgData.data
  ctx.drawImage(img, 0,0);
  document.getElementById('deslizador_colores').style.display = 'block';
  document.getElementById('button_modo_colores').style.borderColor  = '#bb6dde';
  document.getElementById('button_modo_colores').style.color = "#bb6dde";
  document.getElementById('button_modo_grises').style.borderColor  = 'Gray';
  document.getElementById('button_modo_grises').style.color = "rgba(155,155,155,0.3)";
  console.log("hola")
}
