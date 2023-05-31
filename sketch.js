let theta1 = 0;
let theta2 = 0;
let letts = "abcdefghijklmnopqrstuvwxyz";
let message = "greg";
let start = 180;
let end = 360;
let angle = start;
let r = 380;
let dex = 0;
let x, y;

function setup() {
  createCanvas(800, 800);
  background(0);
  stroke(0, 255, 0);
  strokeWeight(3);
  angleMode(DEGREES);
  textAlign(CENTER, CENTER)
  frameRate(10);
}

function draw() {
  background(0);
  translate(width / 2, height / 2);
  ellipse(0, 0, 20, 20);
  plotLet();
  stroke(0,255,0)

  let mychr = message.charAt(dex);
  //let mynum = mychr.charCodeAt(0);
  let mynum = letts.indexOf(mychr)
  print(mychr, mynum);
  end = 180+(mynum*7)
  //print(angle)
  //dex++; // add this when it reaches 
  if (dex > message.length - 1) {
    dex = 0;
  }
  // go forward
  //print(start, end);

  if (start < end) {
    x = r * cos(angle);
    y = r * sin(angle);
    line(0, 0, x, y);

    angle++;
    //print(angle,end)
    if (angle > end) {
      let temp = start;
      start = angle;
      end = temp;
      dex++
      //print(start, end);
    }
  }
  // go back

  if (start > end) {
    x = r * cos(angle);
    y = r * sin(angle);
    line(0, 0, x, y);

    angle--;
    //print(angle,end)
    if (angle < end) {
      let temp = start;
      start = angle;
      end = temp;
      dex++
      //print(start, end);
    }
  }
}

function plotLet() {
  // angle is in the for statement

  noFill();
  ellipse(0, 0, 360 * 2);

  let indx = 0;
  for (let a = 180; a < 360; a += 7) {
    let x1 = r * cos(a);
    let y1 = r * sin(a);
    textSize(20);
    fill(0, 255, 0);
    noStroke();
    text(letts.charAt(indx), x1, y1);
    indx++;
  }
}
