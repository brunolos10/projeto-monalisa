function setup() {
  createCanvas(400, 400);
}
let olhoX;
let olhoY;

function draw() {
  background("#FF5722");
  fill("green");
  circle(200, 200, 205); // rosto
  fill("i");
  circle(150, 150, 50); // olho esquerdo
  circle(250, 150, 50); // olho direito
  line(150, 270, 250, 230); // boca
  fill("#3F51B5");
  triangle(200, 180, 170, 220, 220, 220); // nariz
  line(123, 115, 178, 110); // sobrancelha esquerda
  line(225, 116, 279, 90); // sobrancelha direita
  // circle(150,150,10); // pupila esquerda
  //circle(250,150,10); // pupila direita

  olhoX = map(mouseX, 0, 400, 130, 170);
  olhoY = map(mouseY, 0, 400, 130, 170);

  circle(olhoX, olhoY, 10); // nova pupila esquerda
  circle(olhoX + 100, olhoY, 10); //nova pupila direita
  if (mouseIsPressed) {
    console.log(mouseX, mouseY);
  }
}

  