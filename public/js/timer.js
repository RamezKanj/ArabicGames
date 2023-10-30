import { firstButton, secondButton, thirdButton, scoreDisplay, score, resetScore } from "./mainGame.js"

const timerElement = document.getElementById("timer")
const timerFirstButton = document.getElementById("timerFirstButton")
const timerSecondButton = document.getElementById("timerSecondButton")
const startButton = document.getElementById("startButton")

let originalStartSeconds = 30
let seconds = 30
let millieseconds = 0
let timeInterval
let timerRunning = false;

      


// Function to update the timer display
function updateTimer() {
    const formattedTime = `${String(seconds)}`;
    timerElement.textContent = formattedTime;

    
    if (seconds === 0 && millieseconds === 0) {
      stopTimer();
      toggleButton();
      
      resetScore()
    }
  }



 // Function to start the timer
function startTimer() {
    timeInterval = setInterval(() => {
      if (seconds === 0 && millieseconds === 0) {
        clearInterval(timeInterval);
      } else if (millieseconds === 0) {
        seconds--;
        millieseconds = 99;
      } else {
        millieseconds--;
      }
      updateTimer();
    }, 10); // Update every 10 milliseconds
  }

  function stopTimer(){
    clearInterval(timeInterval)
    resetTimerToOriginal();
  }

  // Add click event listeners to the buttons
  timerFirstButton.addEventListener("click", () => {
    // Set the timer for 30 seconds
    originalStartSeconds = 30
    seconds = originalStartSeconds;
    millieseconds = 0;
    updateTimer();
    clearInterval(timeInterval); // Clear any previous timer
  });
  
  timerSecondButton.addEventListener("click", () => {
    // Set the timer for 1 minute (60 seconds)
    originalStartSeconds = 60
    seconds = originalStartSeconds;
    updateTimer();
    clearInterval(timeInterval); // Clear any previous timer
  });

  function resetTimerToOriginal() {
    if (originalStartSeconds !== undefined) {
      seconds = originalStartSeconds;
      millieseconds = 0;
      updateTimer();
    }
    }
    function toggleButton() {
        if (timerRunning) {
          startButton.textContent = "Start";
          stopTimer();
          timerFirstButton.disabled = false
          timerSecondButton.disabled = false
          firstButton.disabled = true
          secondButton.disabled = true
          thirdButton.disabled = true
          resetScore()
        } else {
          startButton.textContent = "Stop";
          startTimer();
          timerFirstButton.disabled = true
          timerSecondButton.disabled = true
        }
        timerRunning = !timerRunning;
      }
      
  


export{ startTimer, stopTimer, startButton, toggleButton}
