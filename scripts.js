var claytonVoice = new Audio("clayton-greeting.m4a");
var isClaytonPlaying = false;

var rainSound = new Audio("rain_1.mp3");
var isRainPlaying = false;

var freightTrain = new Audio("freight-train.m4a")
var isFreightTrainPlaying = false;

var kathySong = new Audio("be-a-gentleman.m4a")
var isKathySongPlaying = false;

function claytonControl() {
console.log(isClaytonPlaying + " At The Start");
  if (isClaytonPlaying == true) {
      claytonVoice.pause();
      claytonVoice.currentTime = 0;
      console.log(isClaytonPlaying + " Inside Pause Statement");
      return isClaytonPlaying = false;
  } else if (isClaytonPlaying == false) {
          claytonVoice.play();
          console.log(isClaytonPlaying + " Inside Play Statement")
          return isClaytonPlaying = true;
  }
console.log(isClaytonPlaying + " At The End");
}

function kathyControl() {
console.log(isKathySongPlaying + " At The Start");
  if (isKathySongPlaying == true) {
      kathySong.pause();
      kathySong.currentTime = 0;
      console.log(isKathySongPlaying + " Inside Pause Statement");
      return isKathySongPlaying = false;
  } else if (isKathySongPlaying == false) {
          kathySong.play();
          console.log(isKathySongPlaying + " Inside Play Statement")
          return isKathySongPlaying = true;
  }
console.log(isKathySongPlaying + " At The End");
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
      freightTrain.currentTime = 0;
      console.log(isFreightTrainPlaying + " Inside Pause Statement");
      return isFreightTrainPlaying = false;
  } else if (isFreightTrainPlaying == false) {
          freightTrain.play();
          console.log(isFreightTrainPlaying + " Inside Play Statement")
          return isFreightTrainPlaying = true;
  }
console.log(isFreightTrainPlaying + " At The End");
}
