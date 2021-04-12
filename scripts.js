// Write your JavaScript code here.
// Remember to pay attention to page loading!

 
function init() {
  const paragraph = document.getElementById("flightStatus");
  const button = document.getElementById("takeoff");
  const button2 = document.getElementById("landing")
  const button3 = document.getElementById("missionAbort");
  const upButton = document.getElementById("up");
  const downButton = document.getElementById("down");
  const rightButton = document.getElementById("right");
  const leftButton = document.getElementById("left");
 }

//on click, flight status changes, color and height changes  TAKE OFF BUTTON
function takeOff() {
  document.getElementById("flightStatus").innerHTML =
    " Shuttle in flight.";
  console.log();
}

function colorChange() {
  document.getElementById("shuttleBackground").style.backgroundColor = "blue";
}

function heightIncrease() {
  document.getElementById("spaceShuttleHeight").innerHTML = 10000;
}

let button = document.getElementById("takeoff");
button.addEventListener("click", takeOff);


//on click, alert text, flight status changes, background color changes, height changes  LAND BUTTON
function land() {
  document.getElementById("flightStatus").innerHTML =
    " The shuttle has landed.";
  console.log();
}

function alert() {
    alert("The shuttle is landing. Landing gear engaged");
}

function colorChange2() {
  document.getElementById("shuttleBackground").style.backgroundColor = "green";
}

function heightIncrease2() {
  document.getElementById("spaceShuttleHeight").innerHTML = 0;
}

let button2 = document.getElementById("landing");
button2.addEventListener("click", land);


//on click, alert text, flight status changes, background color changes, height changes  ABORT MISSION BUTTON
function abort() {
  document.getElementById("flightStatus").innerHTML =
    "Mission aborted.";
  console.log();
}

function colorChange3() {
  document.getElementById("shuttleBackground").style.backgroundColor = "blue";
}

function heightIncrease3() {
  document.getElementById("spaceShuttleHeight").innerHTML = 0;
}

let button3 = document.getElementById("missionAbort");
button3.addEventListener("click", abort);


//on click, UP
function moveImage() {
  document.getElementById("rocket").height = "85";
}

function heightIncrease4() {
  document.getElementById("spaceShuttleHeight").innerHTML = 10000;
}

let upButton = document.getElementById("up");
upButton.addEventListener("click", moveImage);

//on click, DOWN
function moveImage2() {
  document.getElementById("rocket").height = "75";
}

function heightIncrease5() {
  document.getElementById("spaceShuttleHeight").innerHTML = 0;
}

let downButton = document.getElementById("down");
downButton.addEventListener("click", moveImage2);

//on click, RIGHT
function moveImage3() {
  document.getElementById("rocket").width = "85";
}


let rightButton = document.getElementById("right");
rightButton.addEventListener("click", moveImage3);

//on click, LEFT
function moveImage4() {
  document.getElementById("rocket").width = "75";
}

let leftButton = document.getElementById("left");
leftButton.addEventListener("click", moveImage4);