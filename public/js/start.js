import { displayRandomArabicVariation, firstButton, secondButton, thirdButton } from './mainGame.js';
import { startButton, toggleButton} from './timer.js';


startButton.addEventListener("click", () =>{
    displayRandomArabicVariation();
    firstButton.disabled = false
    secondButton.disabled = false
    thirdButton.disabled = false
    toggleButton()
})
