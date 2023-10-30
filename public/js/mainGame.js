import { englishToArabicMap } from "./englishToArabicMap.js";


//HTML elements references 
const firstButton = document.getElementById("answerbtn1");
firstButton.disabled = true

const secondButton = document.getElementById("answerbtn2");
secondButton.disabled = true

const thirdButton = document.getElementById("answerbtn3");
thirdButton.disabled = true


const letterDisplay = document.getElementById("letter-display");

const scoreDisplay = document.getElementById("score");
let score = 0;

let firstButtonClicked = false
let secondButtonClicked = false
let thirdButtonClicked = false


function displayRandomArabicVariation() {

    // Get a random key from the map
    const allKeys = Object.keys(englishToArabicMap);
    const randomKey = allKeys[Math.floor(Math.random() * allKeys.length)];

    // Get a random Arabic letter variation for the selected key
    const variations = englishToArabicMap[randomKey];
    const randomVariation = variations[Math.floor(Math.random() * variations.length)];

    // Add the random variation to the HTML element
    letterDisplay.textContent = randomVariation;

    assignKeysToButtons(randomKey);

}


function assignKeysToButtons(randomKey) {

    //Creating an array of incorrect keys by removing the only correct key
    const incorrectKeys = Object.keys(englishToArabicMap).filter(key => key !== randomKey);

    //Creating two random incorrect keys distinct from each other
    const randomIncorrectKey1 = incorrectKeys[Math.floor(Math.random() * incorrectKeys.length)];
    let randomIncorrectKey2 = incorrectKeys[Math.floor(Math.random() * incorrectKeys.length)];
    while (randomIncorrectKey2 === randomIncorrectKey1) {
        randomIncorrectKey2 = incorrectKeys[Math.floor(Math.random() * incorrectKeys.length)];
    }

    //Randomising the position of the keys when displayed
    // Randomly determine the position for the correct key
    const position = Math.floor(Math.random() * 3);

    // Assign keys to the buttons based on the position
    if (position === 0) {
        firstButton.textContent = randomKey;
        firstButtonClicked = true;
        secondButton.textContent = randomIncorrectKey1;
        thirdButton.textContent = randomIncorrectKey2;
    } else if (position === 1) {
        firstButton.textContent = randomIncorrectKey1;
        secondButton.textContent = randomKey;
        secondButtonClicked = true;
        thirdButton.textContent = randomIncorrectKey2;
    } else {
        firstButton.textContent = randomIncorrectKey1;
        secondButton.textContent = randomIncorrectKey2;
        thirdButton.textContent = randomKey;
        thirdButtonClicked = true;
    }
}


firstButton.addEventListener("click", () =>{
    if(firstButtonClicked){
        score++
        scoreDisplay.textContent = score;
        firstButtonClicked = false;
    }else{
        score--
        scoreDisplay.textContent = score;
    }
    secondButtonClicked = false
    thirdButtonClicked = false
    displayRandomArabicVariation()
})


secondButton.addEventListener("click", () =>{
    if(secondButtonClicked){
        score++
        scoreDisplay.textContent = score;
        secondButtonClicked = false;
    }else{
        score--
        scoreDisplay.textContent = score;
    }
    firstButtonClicked = false
    thirdButtonClicked = false
    displayRandomArabicVariation()
})


thirdButton.addEventListener("click", () =>{
    if(thirdButtonClicked){
        score++
        scoreDisplay.textContent = score;
        thirdButtonClicked = false;
    }else{
        score--
        scoreDisplay.textContent = score;
    }
    firstButtonClicked = false
    secondButtonClicked = false
    displayRandomArabicVariation()
})

function resetScore() {
    score = 0;
    scoreDisplay.textContent = score;
  }

export { displayRandomArabicVariation, firstButton, secondButton, thirdButton, score, scoreDisplay, resetScore };