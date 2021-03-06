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
    } else if (input.length < 50) {
      valid = true;
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
  let valid = true;

  do {
    width = prompt("Width:");
    if (width == null) {
      valid = true;
    } else {
      width = Number(width);
    }

    height = prompt("Height:");
    if (height == null) {
      valid = true;
    } else {
      height = Number(height);
    }

    x = prompt("X:");
    if (x == null) {
      valid = true;
    } else {
      x = Number(x);
    }

    y = prompt("Y:");
    if (y == null) {
      valid = true;
    } else {
      y = Number(y);
    }

    if (width > 1024 || width < 1 && width != null && height != null && x != null && y != null) {
      alert("Your width must be between 1 and 1024.")
      valid = false;
    } else if (height > 512 || height < 1 && width != null && height != null && x != null && y != null) {
      alert("Your height must be between 1 and 512.")
      valid = false;
    } else if (x > 1024 || x < 1 && width != null && height != null && x != null && y != null) {
      alert("Your x-coordinate must be between 1 and 1024.")
      valid = false;
    } else if (y > 512 || y < 1 && width != null && height != null && x != null && y != null) {
      alert("Your y-coordinate must be between 1 and 512.")
      valid = false;
    } else if (isNaN(width) || isNaN(height) || isNaN(x) || isNaN(y)) {
      alert("One of your values is not a number.")
    } else if (x + width > 1024 || y + height > 512 && width != null && height != null && x != null && y != null) {
      alert("Your rectangle won't fit on the canvas.")
      valid = false;
    } else {
      valid = true;
    };
  } while (valid == false);

  if (width != null && height != null && x != null && y != null) {
    ctx.strokeRect(x, y, width, height);
  }
};

/*
 * Exercise 3.
 */

const drawColoredRectangle = function() {
  const canvas = document.getElementById('student-canvas-3');
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, 1024, 128);
  let color;
  let valid = true;

  do {
    color = prompt("Color:");
    if (color == null) {
      return;
    }
    color = color.toLowerCase();
    if (color != "green" && color != "black" && color != "blue" && color != "orange" && color != "purple" && color != "red" && color != "yellow") {
      alert(color + " is not a supported color.")
      valid = false;
    } else {
      valid = true;
    };
  } while (valid === false);

  ctx.fillStyle = color;
  ctx.fillRect(10, 10, 100, 50);
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
    if (firstSide == 0) {
      return;
    };
    secondSide = Number(prompt("Side 2: "))
    if (secondSide == 0) {
      return;
    };
    thirdSide = Number(prompt("Side 3: "))
    if (thirdSide == 0) {
      return;
    };

//     console.log(firstSide, secondSide, thirdSide);
//     height = Math.min (firstSide, secondSide, thirdSide);

//     let firstSideTwo = firstSide;
//     let secondSideTwo = secondSide;
//     let thirdSideTwo = thirdSide;
//     console.log(firstSideTwo, secondSideTwo, thirdSideTwo);
//     if (Math.min (firstSide, secondSide, thirdSide) == firstSide) {
//       firstSideTwo = null;
//     } else if (Math.min (firstSide, secondSide, thirdSide) == secondSide) {
//       secondSideTwo = null;
//     } else if (Math.min (firstSide, secondSide, thirdSide) == thirdSide) {
//       thirdSideTwo = null;
//     };
//     console.log(firstSideTwo, secondSideTwo, thirdSideTwo);
//     base = Math.min (firstSideTwo, secondSideTwo, thirdSideTwo);
//     hypotenuse = Math.max(firstSideTwo, secondSideTwo, thirdSideTwo);
//     console.log(height, base, hypotenuse);
//     if (Math.hypot(base, height) != hypotenuse) {
//       alert("That's not a valid right triangle.");
//       valid = false;
//     } else {
//       valid = true;
//     };
//   } while (valid == false);

//   console.log(firstSide, secondSide, thirdSide);
//   console.log(height, base, hypotenuse);
    height = Math.min (firstSide, secondSide, thirdSide);
    hypotenuse = Math.max (firstSide, secondSide, thirdSide);
    base = Math.sqrt(hypotenuse**2 - height**2)

    if (isNaN(firstSide) || isNaN(secondSide) || isNaN(thirdSide)) {
      alert("One of your sides is not a number.")
      valid = false;
    } else if (height > 999 || base > 487) {
      alert("Your triangle won't fit on the canvas.")
      valid = false;
    } else if (Math.hypot(base, height) != hypotenuse) {
      alert("That's not a valid right triangle.");
      valid = false;
    } else {
      valid = true;
    };

  } while (valid == false);
console.log(firstSide + "  " + secondSide + "  " + thirdSide)
  if (firstSide != null || secondSide != null || thirdSide != null) {
    height += 25;
    base += 25;

    ctx.beginPath();
    ctx.moveTo(25, 25);
    ctx.lineTo(25, height);
    ctx.lineTo(base, height)
    ctx.lineTo(25, 25);
    ctx.stroke();
  }
};

/*
 * Exercise 5.
 */

const drawFace = function() {
  const canvas = document.getElementById('student-canvas-5');
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, 1024, 512);
  let eyeRadius;
  let mouthRadius;
  let valid = true;
  let headRadius;

  do {
    headRadius = prompt("Radius: ");

    if (headRadius === null) {
      valid = true;
    } else {
      headRadius = Number(headRadius)
    };

    if (headRadius > 256 && headRadius != null) {
      alert("Your smiley face won't fit on the canvas.")
      valid = false;
    } else if (headRadius < 32 && headRadius != null) {
      alert("Your radius must be at least 32.")
      valid = false;
    } else if (isNaN(headRadius) && headRadius != null) {
      alert("Your radius is not a number.")
      valid = false;
    } else {
      valid = true;
    };
  } while (valid == false);

  if (headRadius != null) {
    eyeRadius = headRadius * 0.15;
    mouthRadius = headRadius * 0.7;
    let centerPointX = 1024 / 2;
    let centerPointY = 512 / 2;

    ctx.beginPath();
    ctx.arc(centerPointX, centerPointY, headRadius, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(centerPointX, centerPointY, mouthRadius, 0, Math.PI);
    ctx.stroke();
    ctx.closePath();

    let eyeCenterPointX = centerPointX + headRadius * 0.4;
    let eyeCenterPointY = centerPointY - headRadius * 0.4;

    ctx.beginPath();
    ctx.arc(eyeCenterPointX, eyeCenterPointY, eyeRadius, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.closePath();

    eyeCenterPointX = centerPointX - headRadius * 0.4;

    ctx.beginPath();
    ctx.arc(eyeCenterPointX, eyeCenterPointY, eyeRadius, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.closePath();
  };
};

/*
 * Exercise 6 (extra credit).
 */

const drawPyramid = function() {
    // write your exercise 5 code here
};
