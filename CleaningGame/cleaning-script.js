let doorImage1 = document.getElementById('door1');
let doorImage2 = document.getElementById('door2');
let doorImage3 = document.getElementById('door3');
let openDoor1;
let openDoor2;
let openDoor3;
let botDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg";
let currentPlaying = true;
let beachDoorPath = "./beach1.png";
let spaceDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg";
let closedDoorPath = './door1.png';
let numClosedDoors = 3;
let startButton = document.getElementById('start');

const isBot = (door) => {
    if (door.src === botDoorPath){
      return true;
    }
    else{
      return false
    }
  }

const isClicked = (door) =>{
    if (door.src===closedDoorPath){
      return false;
    }
    else {
      return true;
    }
  }

const playDoor = (door) => {
    numClosedDoors--;
    if (numClosedDoors === 0){
      gameOver('win');
    } else if (isBot(door)) {
        gameOver('lose');
    }
  }
const randomChoreDoorGenerator = () => {
  const choreDoor = Math.floor(Math.random() * numClosedDoors);
  if(choreDoor === 0){
    openDoor1 = botDoorPath;
    openDoor2 = beachDoorPath;
    openDoor3 = spaceDoorPath;
  } else if(choreDoor===1){
    openDoor2 = botDoorPath;
    openDoor3 = beachDoorPath;
    openDoor1 = spaceDoorPath;
  }else {
    openDoor3 =botDoorPath;
    openDoor1 = beachDoorPath;
    openDoor2 = spaceDoorPath;
  }
}







doorImage1.onclick = () => {
    if(currentPlaying && !isClicked(doorImage1)){
        doorImage1.src = openDoor1;
        playDoor(door1);
  }
}

doorImage2.onclick = () => {
    if(currentPlaying && !isClicked(doorImage2)){
        doorImage2.src = openDoor2;
        playDoor(door2);
  }
}

doorImage3.onclick = () => {
    if(currentPlaying && !isClicked(doorImage3)){
        doorImage3.src = openDoor3;
        playDoor(door3);
  }
}

startButton.onclick = () => {
    if (!currentPlaying){
        startRound();
    }
}

const startRound = () => {
    door1.src = closedDoorPath;
    door2.src = closedDoorPath;
    door3.src = closedDoorPath;
    numClosedDoors = 3;
    currentPlaying = true;
    startButton.innerHTML = 'Good Luck!';
    randomChoreDoorGenerator();
}
const gameOver = (status) => {
    if (status==='win'){
      startButton.innerHTML = 'You win! Play again?';
    }
    else {
      startButton.innerHTML = 'Game over! Play again?';
    }
    currentPlaying = false;
  }
  
startRound();
