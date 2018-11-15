var min = 1
var max = 100
var answer = generateRandomNumber();

function setRange(minner, maxxer) {
  var setMin = document.querySelector(".set-min");
  var setMax = document.querySelector(".set-max");
  var setRange = document.querySelector(".set-range");
  setMin.value = parseInt(setMin.value) - parseInt(minner);
  setMax.value = parseInt(setMax.value) + parseInt(maxxer);
  min = setMin.value
  max = setMax.value
  setMin.className = 'hider';
  setMax.className = 'hider';
  setRange.innerHTML = ('Range: ' + min + ' - ' + max);
  setRange.className = 'set-range disabled-button';
  answer = Math.floor((Math.random() * (max - min)) + parseInt(min));
}

function guess() {
  var userGuess = document.querySelector(".enter-guess").value;
  var lastGuess = document.querySelector(".last-guess");
  var updatedMessage = document.getElementById("message");
  updatedMessage.className = 'high-low'
  if (isNaN(userGuess)) {
    updatedMessage.innerHTML = 'Please enter a number';
    updatedMessage.className = 'high-low-error'
  } else if ( parseInt(userGuess) < min || parseInt(userGuess) > max ){
    updatedMessage.innerHTML = ('Please enter a number from ' + min + ' - ' + max);
    updatedMessage.className = 'high-low-error'
  } else if (userGuess < answer) {
    lastGuess.innerHTML = userGuess;
    updatedMessage.innerHTML = 'That is too low';
  } else if (userGuess > answer) {
    lastGuess.innerHTML = userGuess;
    updatedMessage.innerHTML = 'That is too high';
  } else {
    lastGuess.innerHTML = userGuess;
    min = parseInt(min) - 10
    max = parseInt(max) + 10
    document.querySelector(".set-range").innerHTML = ('Range: ' + min + ' - ' + max);
    answer = Math.floor((Math.random() * (max - min)) + parseInt(min));
    updatedMessage.innerHTML = 'BOOM! Range updated for extra challenge. PUSH FORWARD TO GREATNESS';
  }
}

function activateGuess() {
  document.querySelector(".guess").className = "guess enabled-button";
}

function activateClear() {
  document.querySelector(".clear").className = "clear enabled-button";
}

function deactivateGuess() {
  document.querySelector(".guess").className = "guess disabled-button";
}

function deactivateClear() {
  document.querySelector(".clear").className = "clear disabled-button";
}

function enableReset() {
  document.querySelector(".reset").className = "reset enabled-button";
}

function redoTheGame() {
  window.location.reload(false);
}

function clearText() {
  document.querySelector(".enter-guess").value = "";
  document.querySelector(".set-min").value = "";
  document.querySelector(".set-max").value = "";
}

function buttonUp() {
  if (document.querySelector(".enter-guess").value.length === 0) {
    deactivateClear();
    deactivateGuess();
  } else {
    activateClear();
    activateGuess();
  }
}
