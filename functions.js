function mouseClicked() {
  print("Click detectado en:", mouseX, mouseY);
   sfx.amp(0.5);
   sfx.play();
  if (diapositiva === "inicio" && tap(100, 400, 110, 50)) diapositiva = "1";
  else if (diapositiva === "1" && tap(100, 400, 110, 50)) diapositiva = "2";
  else if (diapositiva === "2") {
    if (tap(100, 400, 110, 50)) diapositiva = "a1";
    else if (tap(360, 400, 110, 50)) diapositiva = "b1";
  }
    else if (diapositiva === "a1" && tap(100, 400, 110, 50)) diapositiva = "a2";
  else if (diapositiva === "a2" && tap(100, 400, 110, 50)) diapositiva = "a3";
  else if (diapositiva === "a3") {
    if (tap(100, 400, 110, 50)) diapositiva = "c1";
    else if (tap(360, 400, 110, 50)) diapositiva = "d1";
  }
  else if (diapositiva === "c1" && tap(100, 400, 110, 50)) diapositiva = "c2";
  else if (diapositiva === "c2" && tap(100, 400, 110, 50)) diapositiva = "d1";
  else if (diapositiva === "d2") {
    if (tap(100, 400, 110, 50)) diapositiva = "d3";
    else if (tap(360, 400, 110, 50)) diapositiva = "g1";
  }
  else if (diapositiva === "b1" && tap(100, 400, 110, 50)) diapositiva = "b2";
  else if (diapositiva === "b2") {
    if (tap(100, 400, 110, 50)) diapositiva = "e1";
    else if (tap(360, 400, 110, 50)) diapositiva = "f1";
  }
  else if (diapositiva === "e1" && tap(100, 400, 110, 50)) diapositiva = "e2";
  else if (diapositiva === "e2") {
    if (tap(100, 400, 110, 50)) diapositiva = "Reiniciar";
    else if (tap(360, 400, 110, 50)) diapositiva = "Reiniciar";
  }
  else if (diapositiva === "g1" && tap(100, 400, 110, 50)) diapositiva = "g2";
  else if (diapositiva === "g2" && tap(100, 400, 110, 50)) diapositiva = "g3";
  else if (diapositiva === "g3") {
    if (tap(100, 400, 110, 50)) diapositiva = "Reiniciar";
    else if (tap(360, 400, 110, 50)) diapositiva = "Reiniciar";
  }
  else if (diapositiva === "h1" && tap(100, 400, 110, 50)) diapositiva = "h2";
  else if (diapositiva === "h2" && tap(100, 400, 110, 50)) diapositiva = "h3";
  else if (diapositiva === "h3") {
    if (tap(100, 400, 110, 50)) diapositiva = "Reiniciar";
    else if (tap(360, 400, 110, 50)) diapositiva = "Reiniciar";
  }
  else if (diapositiva === "d1" && tap(100, 400, 110, 50)) diapositiva = "d2";
  else if (diapositiva === "d3" && tap(100, 400, 110, 50)) diapositiva = "d4";
  else if (diapositiva === "d4") {
    if (tap(100, 400, 110, 50)) diapositiva = "g1";
    else if (tap(360, 400, 110, 50)) diapositiva = "h1";
  }
  else if (diapositiva === "f1" && tap(100, 400, 110, 50)) diapositiva = "f2";
  else if (diapositiva === "f2") {
    if (tap(100, 400, 110, 50)) diapositiva = "Reiniciar";
    else if (tap(360, 400, 110, 50)) diapositiva = "Reiniciar";
  }
  else if ((diapositiva === "Reiniciar" || diapositiva === "creditos") && tap(100, 400, 110, 50)) {
    diapositiva = "inicio";
  }
}

function botton(X, Y, W, H, textoBoton) {
  if (tap(X, Y, W, H)) fill(255, 240, 0);
  else fill(0, 255, 0);
  rect(X, Y, W, H);
  fill(0);
  textAlign(CENTER, CENTER);
  text(textoBoton, X + W / 2, Y + H / 2);
}

function tap(x, y, w, h) {
  return mouseX >= x && mouseX <= x + w && mouseY >= y && mouseY <= y + h;
}
