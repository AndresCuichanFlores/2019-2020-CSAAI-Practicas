class Bola {
  constructor(ctx) {
    //-- Guardar el contexto de dibujo
    this.ctx = ctx;
   //-- Constante: Tamaño de la bola
    this.size = 5;

    //-- Contante: Posicion inicial de la bola
    this.x_ini = 297;
    this.y_ini = 200;

    //-- Posicion generica de la bola
    this.x = 0;
    this.y = 0;

    //-- Velocidad inicial de la bola
    this.vx_ini = 4.5;
    this.vy_ini = 2;

    //-- Velocidad genérica de la bola
    //-- Inicialmente a cero
    this.vx = 0;
    this.vy = 0;

    this.color_bola = "white"

    //-- Inicializar
    this.init();
  }

  draw() {
    //----- Dibujar la Bola
    this.ctx.beginPath();
    this.ctx.fillStyle=this.color_bola;
    //-- x,y, anchura, altura
    this.ctx.rect(this.x, this.y, this.size, this.size);
    this.ctx.fill();
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;
  }

  init() {
    //-- Inicializa la bola: A su posicion inicial
    this.x = this.x_ini;
    this.y = this.y_ini;
  }


  }
