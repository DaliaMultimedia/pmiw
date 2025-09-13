// Dalia Pastene - Comisión 1 - Legajo 90593/6
https://youtu.be/G8LKeJkL5ts
let estadoColorRayas;
let estadoMostrarInstruccion = true;
let referencia;

function preload() {
 referencia = loadImage('data/28.jpg');
}

function setup() {
  createCanvas(800, 400);
  estadoColorRayas = color(0);
}

function draw() {
  background(255);
  let rayas = 13;
  let colorRayas = estadoColorRayas;
  let marcoCenterX = width * 3 / 4.0;
  let marcoCenterY = height / 2.0;
 
 // FONDO CON RAYAS DIAGONALES
  push();
  translate(500, 250);
  rotate(radians(-45));
  fill(colorRayas);
  noStroke();
  for (let i = -width; i < width; i += rayas * 2) {
    rect(i, -height, rayas, height * 4);
  }
  pop();

 //CENTRO Y TAMAÑO DEL MARCO
  let marcoW = map(mouseX, 400, 800, 200, 300);
  let marcoH = map(mouseY, 0, 400, 200, 300);
  let marcoX = marcoCenterX - marcoW / 2;
  let marcoY = marcoCenterY - marcoH / 2;

  image(referencia, 0, 0, 400, 400);
  rectMode(CENTER);
  fill(255);
  noStroke();
  rect(marcoCenterX, marcoCenterY, marcoW, marcoH);

  //RAYAS VERTICALES CON HUECO EN EL MEDIO
  let centerX = marcoX + marcoW / 2;
  let centerY = marcoY + marcoH / 2;
  for (let i = marcoX; i < marcoX + marcoW; i += rayas * 2) {
    let barX = i + rayas / 2;
    let inGap = (barX > centerX - 100 / 2) && (barX < centerX + 100 / 2);
    fill(0);
    noStroke();
    if (inGap) {
      let arriba = marcoY;
      let Gapabajo = centerY - 100 / 2;
      rect(barX, arriba + (Gapabajo - arriba) / 2, rayas, Gapabajo - arriba);
      let Gaparriba = centerY + 100 / 2;
      let abajo = marcoY + marcoH;
      rect(barX, Gaparriba + (abajo - Gaparriba) / 2, rayas, abajo - Gaparriba);
    } else {
      rect(barX, marcoY + marcoH / 2, rayas, marcoH);
    }
  }
// TEXTO DE DISTANCIA
  let d = dist(mouseX, mouseY, marcoCenterX, marcoCenterY);
  fill(0);
  text("Distancia del centro del cuadradito: " + nfc(d, 2), 410, 20);

 // TEXTO DE INSTRUCCIONES E IMAGEN DE REFERENCIA
  if (estadoMostrarInstruccion) {
    fill(0);
    textSize(16);
    textAlign(LEFT);
    text("F ocultar la imagen. Click cambiar color. R reiniciar.", 410, 50);
  }
}

  // CUADRADO INTERIOR
  let cuadradito = 140;
  let clipX = marcoCenterX - cuadradito / 2;
  let clipY = marcoCenterY - cuadradito / 2;
  fill(255);
  noStroke();
  rect(marcoCenterX, marcoCenterY, cuadradito, cuadradito);

  // RAYAS DIAGONALES DENTRO DEL CUADRADO
  beginClip();
  push();
  rect (clipX, clipY, cuadradito, cuadradito);
  translate(marcoCenterX, marcoCenterY);
  rotate(radians(45));
  fill(colorRayas);
  noStroke();
  let fullSize = cuadradito * 10;
  for (let i = -fullSize; i < fullSize; i += rayas * 2) {
    rect(i, -fullSize / 4, rayas, fullSize);
  }
  pop();
  endClip();
 
function mousePressed() {
  estadoColorRayas = color(random(255), random(255), random(255));
}

function keyPressed() {
  if (key === 'r' || key === 'R') {
    estadoColorRayas = color(0);
    estadoMostrarInstruccion = true;
  } else if (key === 'f' || key === 'F') {
    estadoMostrarInstruccion = false;
  }
}
