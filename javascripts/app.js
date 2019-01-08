 var rover = {
  direction: "N",
  x: 0,
  y: 0,
  travelLog: [],
 }

// ===============================================
// Turn Rover left based on its current direction
// ===============================================

function turnLeft(rover){
  console.log("turnLeft was called!");
  switch (rover.direction) {
    case "N":
      rover.direction = "W"
      console.log("Current direction is: " + "W");
      break;
    case "W":
    rover.direction = "S"
    console.log("Current direction is: " + "S");
      break;
    case "S":
    rover.direction = "E"
    console.log("Current direction is: " + "E");
      break;
    case "E":
    rover.direction = "N"
    console.log("Current direction is: " + "N");
      break;
    default:
    rover.direction = "N"
      break;
  }
  console.log("Current rover position: " + rover.y + ", " + rover.x);
  console.log("Oh the places I've been! : " + rover.travelLog);
}


// ================================================
// Turn Rover right based on its current direction
// ================================================

function turnRight(rover){
  console.log("turnRight was called!");
  switch (rover.direction) {
    case "N":
      rover.direction = "E";
      console.log("Current direction is: " + "E");
      break;
    case "E":
    rover.direction = "S"
    console.log("Current direction is: " + "S");
      break;
    case "S":
    rover.direction = "W"
    console.log("Current direction is: " + "W");
      break;
    case "W":
    rover.direction = "N"
    console.log("Current direction is: " + "N");
      break;
    default:
    rover.direction = "N"
      break;
  }
  console.log("Current rover position: " + rover.y + ", " + rover.x);
  console.log("Oh the places I've been! : " + rover.travelLog);
}


// ===============================================
// Turn Rover left based on its current direction
// ===============================================

function moveForward(rover){
  console.log("moveForward was called");
  if (rover.direction === "N"){
    rover.y -= 1;
  } else if (rover.direction === "S"){
    rover.y += 1;
  } else if (rover.direction === "W"){
    rover.x -= 1;
  } else if (rover.direction === "E"){
    rover.x += 1;
  }
  rover.travelLog.push(rover.y, rover.x);
  console.log("Current direction is: " + rover.direction);
  console.log("Current rover position: " + rover.y + ", " + rover.x);
  console.log("Oh the places I've been! : " + rover.travelLog);
}

// ======================================================================
// Command rover to turn right, left, or move forward using r, l, or f 
// ======================================================================
function commands(letters){
  for (i=0; i < letters.length; i++){
    switch (letters[i]){
      case "r":
      turnRight(rover)
      console.log();
      break;
      case "l":
      turnLeft(rover)
      console.log();
      break;
      case "f":
      moveForward(rover)
      console.log();
      break;
    }
  }
}


