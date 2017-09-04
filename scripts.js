var claytonVoice = new Audio("./sounds/sample-track.m4a");
var isClaytonPlaying = false;

var rainSound = new Audio("./sounds/rain_1.mp3");
var isRainPlaying = false;

var freightTrain = new Audio("./sounds/freight-train.m4a")
var isFreightTrainPlaying = false;

function claytonControl() {
console.log(isClaytonPlaying + " At The Start");
  if (isClaytonPlaying == true) {
      claytonVoice.pause();
      console.log(isClaytonPlaying + " Inside Pause Statement");
      return isClaytonPlaying = false;
  } else if (isClaytonPlaying == false) {
          claytonVoice.play();
          console.log(isClaytonPlaying + " Inside Play Statement")
          return isClaytonPlaying = true;
  }
console.log(isClaytonPlaying + " At The End");
}



function rainControl() {
console.log(isRainPlaying + " At The Start");
  if (isRainPlaying == true) {
      rainSound.pause();
      console.log(isRainPlaying + " Inside Pause Statement");
      return isRainPlaying = false;
  } else if (isRainPlaying == false) {
          rainSound.play();
          console.log(isRainPlaying + " Inside Play Statement")
          return isRainPlaying = true;
  }
console.log(isRainPlaying + " At The End");
}

function freightTrainControl() {
console.log(isFreightTrainPlaying + " At The Start");
  if (isFreightTrainPlaying == true) {
      freightTrain.pause();
      console.log(isFreightTrainPlaying + " Inside Pause Statement");
      return isFreightTrainPlaying = false;
  } else if (isFreightTrainPlaying == false) {
          freightTrain.play();
          console.log(isFreightTrainPlaying + " Inside Play Statement")
          return isFreightTrainPlaying = true;
  }
console.log(isFreightTrainPlaying + " At The End");
}
