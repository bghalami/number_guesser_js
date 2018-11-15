// this declares a global variable called min to be assigned to the the minimum of the range
var min = 1
// this declares a global variable called max to be assigned to the maximum of the range
var max = 100
// this is the answer that the game checks against, it's created using this method
var answer = generateRandomNumber();

// this is the function to set the range, it takes two arguments which I haven't really
// used yet because i haven't figured out how to call functions from other functions
function setRange(minner, maxxer) {
  // this is a local variable call setmin to access the setmin section of the html
  var setMin = document.querySelector(".set-min");
  // this is a local variable call setmax to access the setmax section of the html
  var setMax = document.querySelector(".set-max");
  // this is a local variable call setrange to access the setrange button of the html
  var setRange = document.querySelector(".set-range");
  // Here i set the values to increase via the parameters passed in, i was going
  // to use this every time you beat the game but haven't set it up yet
  setMin.value = parseInt(setMin.value) - parseInt(minner);
  // same as above
  setMax.value = parseInt(setMax.value) + parseInt(maxxer);
  // here i reset the global min variable to reflect the newgame value
  min = setMin.value
  // same as above but for max
  max = setMax.value
  // after the values have been set I hide the area to enter them
  setMin.className = 'hider';
  setMax.className = 'hider';
  // I change the set range buttong to be disabled and to display the player range
  setRange.innerHTML = ('Range: ' + min + ' - ' + max);
  setRange.className = 'set-range disabled-button';
  // I update the answer to reflect the new range
  answer = Math.floor((Math.random() * (max - min)) + parseInt(min));
}

function guess() {
  // create a local variable called userGuess that holds the users guess
  var userGuess = document.querySelector(".enter-guess").value;
  // create a local variable that holds the last guess
  var lastGuess = document.querySelector(".last-guess");
  // creat a local variable that holds the message "too high" or "too low"
  var updatedMessage = document.getElementById("message");
  // reset styling on message
  updatedMessage.className = 'high-low'
  // if statement to handle all the game logic
  // if the guess isn't a number hell the player and display it in red
  if (isNaN(userGuess)) {
    updatedMessage.innerHTML = 'Please enter a number';
    updatedMessage.className = 'high-low-error'
  // if the guess is outside the range tell the player the range and display in red
  } else if ( parseInt(userGuess) < min || parseInt(userGuess) > max ){
    updatedMessage.innerHTML = ('Please enter a number from ' + min + ' - ' + max);
    updatedMessage.className = 'high-low-error'
  // is guess is lower than answer say it's too low
  } else if (userGuess < answer) {
    lastGuess.innerHTML = userGuess;
    updatedMessage.innerHTML = 'That is too low';
  // is guess is higher than answer say it's too high
  } else if (userGuess > answer) {
    lastGuess.innerHTML = userGuess;
    updatedMessage.innerHTML = 'That is too high';
  // win condition
  } else {
    lastGuess.innerHTML = userGuess;
    // add 10 to max and subtract 10 from min
    min = parseInt(min) - 10
    max = parseInt(max) + 10
    // update range
    document.querySelector(".set-range").innerHTML = ('Range: ' + min + ' - ' + max);
    // update answer
    answer = Math.floor((Math.random() * (max - min)) + parseInt(min));
    // winners message
    updatedMessage.innerHTML = 'BOOM! Range updated for extra challenge. PUSH FORWARD TO GREATNESS';
  }
}
// this activates the guess button
function activateGuess() {
  document.querySelector(".guess").className = "guess enabled-button";
}
// this activates the clear button
function activateClear() {
  document.querySelector(".clear").className = "clear enabled-button";
}
// this deactivates the guess button
function deactivateGuess() {
  document.querySelector(".guess").className = "guess disabled-button";
}
// this deactivates the clear button
function deactivateClear() {
  document.querySelector(".clear").className = "clear disabled-button";
}
// this activate the reset button
function enableReset() {
  document.querySelector(".reset").className = "reset enabled-button";
}
// this reloads the window from the cache not the web
function redoTheGame() {
  window.location.reload(false);
}
// this clears all text from form areas
function clearText() {
  document.querySelector(".enter-guess").value = "";
  document.querySelector(".set-min").value = "";
  document.querySelector(".set-max").value = "";
}
// this deactivates the buttons if there is nothing to clear or to guess
function buttonUp() {
  // if the guess field length is equal to 0, deactivate buttons
  if (document.querySelector(".enter-guess").value.length === 0) {
    deactivateClear();
    deactivateGuess();
  } else {
    activateClear();
    activateGuess();
  }
}
