//alesio fiaccola y dalia pastene
//comision 1

let screens = [];
let diapositiva = "inicio";
let textos = [];
let musica;
let sfx;

function preload() {
  screens[0] = loadImage('data/img1.jpg');
  screens[1] = loadImage('data/img2.jpg');
  screens[2] = loadImage('data/img3.jpg');
  screens[3] = loadImage('data/imga1.jpg');
  screens[4] = loadImage('data/imga2.jpg');
  screens[5] = loadImage('data/imga3.jpg');
  screens[6] = loadImage('data/imgb1.jpg');
  screens[7] = loadImage('data/imgb2.jpg');
  screens[8] = loadImage('data/imgc1.jpg');
  screens[9] = loadImage('data/imgc2.jpg');
  screens[10] = loadImage('data/imgd1.jpg');
  screens[11] = loadImage('data/imgd2.jpg');
  screens[12] = loadImage('data/imgd3.jpg');
  screens[13] = loadImage('data/imgd4.jpg');
  screens[14] = loadImage('data/imge1.jpg');
  screens[15] = loadImage('data/imge2.jpg');
  screens[16] = loadImage('data/imgf1.jpg');
  screens[17] = loadImage('data/imgf2.jpg');
  screens[18] = loadImage('data/imgg1.jpg');
  screens[19] = loadImage('data/imgg2.jpg');
  screens[20] = loadImage('data/imgg3.jpg');
  screens[21] = loadImage('data/imgh1.jpg');
  screens[22] = loadImage('data/imgh2.jpg');
  screens[23] = loadImage('data/imgh3.jpg');
  screens[24] = loadImage('data/imgcreditos.jpg');
    musica = loadSound('data/musica.mp3');
    sfx = loadSound('data/whoosh.mp3');
}

function setup() {
  createCanvas(640, 480);
  musica.amp(0.5);
  musica.play();
  textSize(22);
  textos[1]='El Sr Howard ve perplejo como arrojan a Michael su alumno, por la ventana y se jura nunca volver a dar clases.';
  textos[2]='Un colega le dice que necesitan cubrir nuevamente la vacante en el colegio y le pide volver';
  textos[3]='El Sr Howard mira desconfiado hacia el colegio';
  textos[4]='Observa a los niños con una mirada aterrorizante';
  textos[5]='Volviendo a su casa ve a unas niñas jugando un extraño juego';
  textos[6]='Les pregunta enojado a que están jugando ¿Qué están haciendo?';
  textos[7]='"Al juego de los venenos"_responden, hay que saltar por encima del nombre de una persona muerta en el suelo';
  textos[8]='Continúa el camino hacia su casa refunfuñando, odiando a los niños en silencio';
  textos[9]='Ya es Sábado, frente a su ventana ve a unos niños jugando con una la calavera en la zanja';
  textos[10]='Furioso sale de su casa tras la niña';
  textos[11]='Atrapa a una niña y se abalanza sobre ella con intención de golpearla, pero se detiene y la niña se va llorando';
  textos[12]='La niña le contó a su padre y a su hermano, quienes van directo al Sr Howard para golpearlo fuertemente';
  textos[13]='Malherido, el Sr Howard camina por la calle Oak Bay y se acuesta en el suelo';
  textos[14]='Muere debido a los golpes recibidos por la familia de la niña';
  textos[15]='Al día siguiente aterroriza a los otros niños persiguiéndolos hasta la calle Oak Bay';
  textos[16]='En la persecusión tropieza y cae en un pozo, golpeándose la cabeza con una tubería';
  textos[17]='Muere enterrado, luego los niños saltan sobre la baldoza con su nombre escrito jugando a los venenos';
  textos[18]='El Sr Howard se retrae en su casa escribiendo poesías e historias para presentarlas en el pueblo';
  textos[19]='Debido a que no está teniendo éxito presentando lo que escribe, ahora debe decidir como continuar';
  textos[20]='Enferma y no puede pagar sus medicinas ya que no tiene dinero, por lo que su salud empeora cada vez mas';
  textos[21]='Muere en su cama debido a su enfermedad';
  textos[22]='Logró conseguir una oportunidad única para presentar sus historias y poesías';
  textos[23]='Próspero y, el señor howard tiene una nueva vida exitosa como escritor';
  textos[24]='Furioso sale corriendo a buscarlos';
}


function draw() {
  print("Diapositiva actual en draw:", diapositiva);
  background(0);
  if (diapositiva === "inicio") {
    image(screens[0], 0, 0);
    botton(100, 400, 110, 50, "comenzar");
  } else if (diapositiva === "1") {
    image(screens[1], 0, 0);
    fill(0, 150);
    rect(80, 300, 460, 100, 10);
    fill(255);
    text(textos[1], 90, 310, 440, 80);
    botton(100, 400, 110, 50, "siguiente");
  } else if (diapositiva === "2") {
    image(screens[2], 0, 0);
    fill(0, 150);
    rect(80, 300, 460, 100, 10);
    fill(255);
    text(textos[2], 90, 310, 440, 80);
    botton(100, 400, 110, 50, "vuelve");
    botton(360, 400, 110, 50, "No vuelve");
  } else if (diapositiva === "a1") {
    image(screens[3], 0, 0);
    fill(0, 150);
    rect(80, 300, 460, 100, 10);
    fill(255);
    text(textos[3], 90, 310, 440, 80);
    botton(100, 400, 110, 50, "siguiente");
  } else if (diapositiva === "a2") {
    image(screens[4], 0, 0);
    fill(0, 150);
    rect(80, 300, 460, 100, 10);
    fill(255);
    text(textos[4], 90, 310, 440, 80);
    botton(100, 400, 110, 50, "siguiente");
  } else if (diapositiva === "a3") {
    image(screens[5], 0, 0);
    fill(0, 150);
    rect(80, 300, 460, 100, 10);
    fill(255);
    text(textos[5], 90, 310, 440, 80);
    botton(100, 400, 110, 50, "Se detiene");
    botton(360, 400, 110, 50, "Los ignora");
  } else if (diapositiva === "b1") {
    image(screens[6], 0, 0);
    fill(0, 150);
    rect(80, 300, 460, 100, 10);
    fill(255);
    text(textos[18], 90, 310, 440, 80);
    botton(100, 400, 110, 50, "Siguiente");
  } else if (diapositiva === "b2") {
    image(screens[7], 0, 0);
    fill(0, 150);
    rect(80, 300, 460, 100, 10);
    fill(255);
    text(textos[19], 90, 310, 440, 80);
    botton(100, 400, 110, 50, "Se queda");
    botton(360, 400, 110, 50, "Se muda");
  } else if (diapositiva === "e1") {
    image(screens[14], 0, 0);
    fill(0, 150);
    rect(80, 300, 460, 100, 10);
    fill(255);
    text(textos[20], 90, 310, 440, 80);
    botton(100, 400, 110, 50, "Siguiente");
  } else if (diapositiva === "e2") {
    image(screens[15], 0, 0);
    fill(0, 150);
    rect(80, 300, 460, 100, 10);
    fill(255);
    text(textos[21], 90, 310, 440, 80);
    botton(100, 400, 110, 50, "Reiniciar");
  } else if (diapositiva === "c1") {
    image(screens[8], 0, 0);
    fill(0, 150);
    rect(80, 300, 460, 100, 10);
    fill(255);
    text(textos[6], 90, 310, 440, 80);
    botton(100, 400, 110, 50, "Siguiente");
  } else if (diapositiva === "c2") {
    image(screens[9], 0, 0);
    fill(0, 150);
    rect(80, 300, 460, 100, 10);
    fill(255);
    text(textos[7], 90, 310, 440, 80);
    botton(100, 400, 110, 50, "Siguiente");
  } else if (diapositiva === "d1") {
    image(screens[10], 0, 0);
    fill(0, 150);
    rect(80, 300, 460, 100, 10);
    fill(255);
    text(textos[8], 90, 310, 440, 80);
    botton(100, 400, 110, 50, "Siguiente");
  } else if (diapositiva === "d2") {
    image(screens[11], 0, 0);
    fill(0, 150);
    rect(80, 300, 460, 100, 10);
    fill(255);
    text(textos[9], 90, 310, 440, 80);
    botton(100, 400, 110, 50, "Siguiente");
  } else if (diapositiva === "d3") {
    image(screens[12], 0, 0);
    fill(0, 150);
    rect(80, 300, 460, 100, 10);
    fill(255);
    text(textos[24], 90, 310, 440, 80);
    botton(100, 400, 110, 50, "Siguiente");
  } else if (diapositiva === "d4") {
    image(screens[13], 0, 0);
    fill(0, 150);
    rect(80, 300, 460, 100, 10);
    fill(255);
    text(textos[11], 90, 310, 440, 80);
    botton(100, 400, 110, 50, "Entra");
    botton(360, 400, 110, 50, "Se queda");
  } else if (diapositiva === "f1") {
    image(screens[16], 0, 0);
    fill(0, 150);
    rect(80, 300, 460, 100, 10);
    fill(255);
    text(textos[22], 90, 310, 440, 80);
    botton(100, 400, 110, 50, "Siguiente");
  } else if (diapositiva === "f2") {
    image(screens[17], 0, 0);
    fill(0, 150);
    rect(80, 300, 460, 100, 10);
    fill(255);
    text(textos[23], 90, 310, 440, 80);
    botton(100, 400, 110, 50, "Reiniciar");
  } else if (diapositiva === "g1") {
    image(screens[18], 0, 0);
    fill(0, 150);
    rect(80, 300, 460, 100, 10);
    fill(255);
    text(textos[15], 90, 310, 440, 80);
    botton(100, 400, 110, 50, "Siguiente");
  } else if (diapositiva === "g2") {
    image(screens[19], 0, 0);
    fill(0, 150);
    rect(80, 300, 460, 100, 10);
    fill(255);
    text(textos[16], 90, 310, 440, 80);
    botton(100, 400, 110, 50, "Siguiente");
  } else if (diapositiva === "g3") {
    image(screens[20], 0, 0);
    fill(0, 150);
    rect(80, 300, 460, 100, 10);
    fill(255);
    text(textos[17], 90, 310, 440, 80);
    botton(100, 400, 110, 50, "Reiniciar");
  } else if (diapositiva === "h1") {
    image(screens[21], 0, 0);
    fill(0, 150);
    rect(80, 300, 460, 100, 10);
    fill(255);
    text(textos[12], 90, 310, 440, 80);
    botton(100, 400, 110, 50, "Siguiente");
  } else if (diapositiva === "h2") {
    image(screens[22], 0, 0);
    fill(0, 150);
    rect(80, 300, 460, 100, 10);
    fill(255);
    text(textos[13], 90, 310, 440, 80);
    botton(100, 400, 110, 50, "Siguiente");
  } else if (diapositiva === "h3") {
    image(screens[23], 0, 0);
    fill(0, 150);
    rect(80, 300, 460, 100, 10);
    fill(255);
    text(textos[14], 90, 310, 440, 80);
    botton(100, 400, 110, 50, "Siguiente");
  } else if (diapositiva === "Reiniciar") {
    image(screens[24], 0, 0);
    botton(100, 400, 110, 50, "Reiniciar");
  }
}
