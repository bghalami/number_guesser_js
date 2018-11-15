// this declares a global variable called min to be assigned to the the minimum of the range
var min = 1
// this declares a global variable called max to be assigned to the maximum of the range
var max = 100
// this is the answer that the game checks against, it's created using this method
var answer = generateRandomNumber();

// this is the function to set the range, it takes two arguments, one to add to max
// and one to add to min
function setRange(minner, maxxer) {
  // this is a local variable call setmin to access the setmin section of the html
    // document.querySelector(".css-class") is for selecting an element by class
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
  // this sets the fields to hide and to keep the set min and set max names
  setMin.className = 'hider set-min';
  setMax.className = 'hider set-max';
  // this uses concatenation to make a sweet sentence
  // innerHTML lets us change the html between an opening and closing tag
  setRange.innerHTML = ('Range: ' + min + ' - ' + max);
  // this disables the range button, to be unclickable
  setRange.className = 'set-range disabled-button';
  // I update the answer to reflect the new range
  // Math.floor is for rounding, Math.random pulls a random number between 0 and 1
  // I then multiple it by the difference between the max and min, then add the min back in
  answer = Math.floor((Math.random() * (max - min)) + parseInt(min));
}

function guess() {
  // create a local variable called userGuess that holds the users guess
  var userGuess = document.querySelector(".enter-guess").value;
  // create a local variable that holds the last guess
  var lastGuess = document.querySelector(".last-guess");
  // creat a local variable that holds the message "too high" or "too low"
    // get element by id selects a css element by, you guessed it, the id
  var updatedMessage = document.getElementById("message");
  // reset styling on message
  updatedMessage.className = 'high-low'
  // if statement to handle all the game logic
  // if the guess isn't a number tell the player and display it in red
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
    // set the range down by 10 and up by 10
    setRange(10, 10);
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
