window.onload = function() {
    document.getElementById("hello-sample").onclick = sayHelloStaff;
    document.getElementById("rectangle-sample").onclick = drawRectangleStaff;
    document.getElementById("colored-rectangle-sample").onclick = drawColoredRectangleStaff;
    document.getElementById("triangle-sample").onclick = drawTriangleStaff;
    document.getElementById("smile-sample").onclick = drawFaceStaff;
    document.getElementById("pyramid-sample").onclick = drawPyramidStaff;

    // this is how we're connecting our buttons to our JavaScript functions. let's walk through it.
    //
    // document.getElementById("some-id")   <-- you need to give each button a unique ID
    //                                          and access it in this manner
    //
    // onclick is an event that is fired when you click something (in our case, a button).
    // when we give onclick a value, we're telling JavaScript what to do when we click the button.
    // you should set onclick equal to your function names (i.e., sayHello).
    //
    // there are six event listeners being added for the staff solutions. you'll have an
    // equivalent set of six event listeners for your solutions. the first one is done for you.

    document.getElementById("hello").onclick = sayHello;
    document.getElementById("rectangle").onclick = drawRectangle;
    document.getElementById("colored-rectangle").onclick = drawColoredRectangle;
    document.getElementById("triangle").onclick = drawTriangle;
    document.getElementById("smile").onclick = drawFace;
    document.getElementById("pyramid").onclick = drawPyramid;
}

/*
 * Exercise 1.
 */



const sayHello = function() {
  const canvas = document.getElementById('student-canvas-1');
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, 1024, 128);
  let input;
  let valid = true;

  do {
    input = (prompt("Message:"));
    if (input == null) {
      valid = true;
    } else if (input.length > 50) {
      alert("Your message is too long. Keep it under 50 characters")
      valid = false;
    }
  } while (valid == false);

  if (input != null) {
    ctx.font = "48px sans-serif";
    ctx.strokeText(input, 30, 70, 994);
  }
};

/*
 * Exercise 2.
 */

const drawRectangle = function() {
  const canvas = document.getElementById('student-canvas-2');
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, 1024, 512);
  let x;
  let y;
  let height;
  let width;
  let valid = true

  do {
    width = prompt("Width:");
    if (width.length > 50) {
      alert("Your width must be between 1 and 1024.")
    }
  } while (width > 1024 || width < 1);

  do {
    height = prompt("Height:");
    if (height.length > 50) {
      alert("Your height must be between 1 and 1024.")
    }
  } while (height > 1024 || height < 1);

  do {
    x = prompt("X:");
    if (x.length > 50) {
      alert("Your x-coordinate must be between 1 and 1024.")
    }
  } while (x > 1024 || x < 1);

  do {
    y = prompt("Y:");
    if (y.length > 50) {
      alert("Your y-coordinate must be between 1 and 1024.")
    }
  } while (y > 1024 || y < 1);

  ctx.strokeRect(x, y, width, height);


};

/*
 * Exercise 3.
 */

const drawColoredRectangle = function() {
  const canvas = document.getElementById('student-canvas-3');
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, 1024, 128);
  let color;

  do {
    color = window.prompt("Color:");
    color = color.toLowerCase;
    if (color != "green" && color != "black" && color != "blue" && color != "orange" && color != "purple" && color != "red" && color != "yellow")
    {
      alert(color + " is not a supported color.")
    }
  } while (height.length > 50);

  ctx.fillStyle = color;
  ctx.strokeRect(10, 10, 100, 50);
};

/*
 * Exercise 4.
 */

const drawTriangle = function() {
  const canvas = document.getElementById('student-canvas-4');
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, 1024, 512);
  let height;
  let hypotenuse;
  let base;
  let firstSide;
  let secondSide;
  let thirdSide;
  let valid = true;

  do {
    firstSide = Number(prompt("Side 1: "))
    secondSide = Number(prompt("Side 2: "))
    thirdSide = Number(prompt("Side 3: "))

    if (isNaN(firstSide) || isNaN(secondSide) || isNaN(thirdSide)) {
      alert("One of your sides is not a number.")
      valid = false;
    }
    if (firstSide > 1024 || secondSide > 1024 || thirdSide > 1024) {
      alert("Your triangle won't fit on the canvas.")
      valid = false;
    }
    if (firstSide < 1 || secondSide < 1 || thirdSide < 1) {
      alert("SEE WHAT THIS SHOULD SAY")
      valid = false;
    }

    height = Math.min (firstSide, secondSide, thirdSide)

    if (Math.min (firstSide, secondSide, thirdSide) = firstSide) {
      firstSide = 0
    } else if (Math.min (firstSide, secondSide, thirdSide) = secondSide) {
      secondSide = 0
    } else if (Math.min (firstSide, secondSide, thirdSide) = thirdSide) {
      thirdSide = 0
    }

    base = Math.min (firstSide, secondSide, thirdSide);
    hypotenuse = Math.max(firstSide, secondSide, thirdSide);

    if (height**2 + base**2 != hypotenuse**2) {
      alert("That's not a valid right triangle.")
      valid = false;
    }
  } while (valid == false);

  height += 25;
  base += 25;

  ctx.beginPath();
  ctx.moveTo(25, 25);
  ctx.lineTo(25, height);
  ctx.lineTo(base, height)
  ctx.lineTo(25, 25)
  ctx.stroke();
};

/*
 * Exercise 5.
 */

const drawFace = function() {
  const canvas = document.getElementById('student-canvas-5');
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, 1024, 512);
  let headRadius;
  let eyeRadius;
  let mouthRadius;
  let valid = true;

  do {
    headRadius = prompt("Radius: ")
    if (headRadius > 512 / 4) {
      alert("Your smiley face won't fit on the canvas.")
    valid = false;
    } else if (headRadius < 32) {
      alert("Your radius must be at least 32.")
      valid = false;
    } else if (isNaN(headRadius)) {
      alert("Your radius is not a number.")
      valid = false;
    }
  } while (valid == false)

  eyeRadius = headRadius * 0.15;
  mouthRadius = headRadius * 0.7;
  let centerPointX = 1024 / 2
  let centerPointY = 512 / 2

  ctx.beginPath
  ctx.arc(centerPointX, centerPointY, headRadius, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.closePath();
  ctx.beginPath
  ctx.arc(centerPointX, centerPointY, mouthRadius, 0, Math.PI);
  ctx.stroke();
  ctx.closePath();
  centerPointX += headRadius * 0.4;
  centerPointY += headRadius * 0.4;
  ctx.beginPath
  ctx.arc(eyeCenterPointX, eyeCenterPointY, eyeRadius, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.closePath();
  centerPointX += headRadius * 0.4;
  centerPointY += headRadius * 0.4;
  ctx.beginPath
  ctx.arc(eyeCenterPointX, eyeCenterPointY, eyeRadius, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.closePath();

};

/*
 * Exercise 6 (extra credit).
 */

const drawPyramid = function() {
    // write your exercise 5 code here
};
