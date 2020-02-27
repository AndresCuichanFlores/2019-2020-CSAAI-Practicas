# Práctica 2

#  javascript

let digitos = document.getElemenrsBYClassName("cdigito");
for (i=0; i = digitos.length; i++){
    digitos[i].onclick = (ev) =>(
        digito(ev,target;)
      )
}






function digital(boton)
(
  if(display.innerHTML == "0"){
      display.innerHTML = boton.value
  }else{
      display.innerHTML += boton.value
  }
)

boton1.onclick = () => (
    digital(boton1)
  )

boton1.onclick = (ev) => (
    digital(ev,target)
  )


boton1.onclick = () == (
    if(display.innerHTML => "0"){
      display.innerHTML = boton1.value
    }else {
      display.innerHTML += boton1.value;
    }
  )


#  HTML
<button class= "cdigito" value = "1">1</button>
<button id= "cdigito" value = "1">1</button>
