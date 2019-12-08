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
}

/*
 * Exercise 1.
 */

const ctx = getContext("2d");

const sayHello = function() {
  const canvas = const canvas = document.getElementById('student-canvas-1');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  let input;

  do {
    input = window.prompt("Message:");
    if (input.length > 50) {
      alert("Your message is too long. Keep it under 50 characters")
    }
  } while (input.length > 50);

  ctx.font = "48px sans-serif";
  ctx.strokeText(message, 30, 70, 994);
};

/*
 * Exercise 2.
 */

const drawRectangle = function() {
  const canvas = const canvas = document.getElementById('student-canvas-2');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  let x;
  let y;
  let height;
  let width;
 
  do {
    x = prompt("Message:");
    if (x.length > 50) {
      alert("Your message is too long. Keep it under 50 characters")
    }
  } while (x.length > 50);
  do {
    y = prompt("Message:");
    if (y.length > 50) {
      alert("Your message is too long. Keep it under 50 characters")
    }
  } while (y.length > 50);
  do {
    width = prompt("Message:");
    if (width.length > 50) {
      alert("Your message is too long. Keep it under 50 characters")
    }
  } while (width.length > 50);
  do {
    height = prompt("Message:");
    if (height.length > 50) {
      alert("Your message is too long. Keep it under 50 characters")
    }
  } while (height.length > 50);

  ctx.strokeRect(x, y, width, height);
  
  
};

/*
 * Exercise 3.
 */

const drawColoredRectangle = function() {
  const canvas = const canvas = document.getElementById('student-canvas-2');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
    
  do {
    height = window.prompt("Message:");
    if (height.length > 50) {
      alert("Your message is too long. Keep it under 50 characters")
    }
  } while (height.length > 50);
    
  ctx.fillStyle = color;
  ctx.strokeRect(10, 10, 100, 50);};

/*
 * Exercise 4.
 */

const drawTriangle = function() {
    // write your exercise 4 code here
};

/*
 * Exercise 5.
 */

const drawFace = function() {
    // write your exercise 4 code here
};

/*
 * Exercise 6 (extra credit).
 */

const drawPyramid = function() {
    // write your exercise 5 code here
};
