/*----- constants -----*/
//An array of strings contaning the possible winning combos. 
const WIN_WORDS = ['cat', 'mouse', 'dog', 'tiger', 'lion', 'cheese']

//An array of strings contaning the alphabet for the keyboard. 
const LETTERS = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
't', 'u', 'v', 'w', 'x', 'y', 'z'] 


/*----- app's (variables) -----*/
let word = ''                // Holds word picked from WIN_WORDS array 
let wordPicked = null       //For word on the board
let choice = []            //Array that holds letters picked buy user
let mistakesHad = 8       //Number of guesses user gets to start the game 
let getWrong = 0         //holds number of guesses that user gets wrong 

/*----- cached element references -----*/
const attemptDisplayEl = document.getElementById('mistakes')     //Wrong guess counter
let lettersEl = document.getElementById('letters')              //Holds alphabet keyboard 
const wordsEl = document.getElementById('guessword')           //Block were words are guessed 


/*----- functions -----*/
//Genterates buttons for letters to be selected "keyboard"
function makeKeys() {
    let buttonKeys = LETTERS.map(key =>
      `<button id='` + key + `' onClick="getChoice('` + key + `')"> ` + key + ` </button> `).join(''); 
      //'key' is perameter, the argument is the array of strings representing the alphabet. This function maps over each letter to create a 'key' for keyboard 
    lettersEl.innerHTML = buttonKeys;
}
  
//Randomly selects the word from the array of words available 
function getRandomWord() {
    word = WIN_WORDS[Math.floor(Math.random() * WIN_WORDS.length)]
}

//Puts word selected by getRandomWord() on board, gets called again on line 50 to update is user picked correctly 
function wordOnBoard() {
    wordPicked = word.split('').map(character => (choice.indexOf(character) >= 0 ? character : " _ ")).join('') //choice is empty array declared 
    wordsEl.innerHTML = wordPicked
}

//Evaluates the user's choice and whether it's a win or not 
function getChoice(letterPicked) {
    choice.indexOf(letterPicked) === -1 ? choice.push(letterPicked) : null
    document.getElementById(letterPicked).setAttribute('disabled', '')
    
    if (word.indexOf(letterPicked) >= 0) {
        wordOnBoard()
        userWon()
    } else if (word.indexOf(letterPicked) === -1) {
        mistakesHad--
        updateGetWrong()
        userLost()
        imageUpdate() 
    }
}

//Executes if user guesses the correct word
function userWon() {
    if (wordPicked === word) {
        lettersEl.innerHTML = 'Congratulations, you win! 🤗'  
        reload()
    }
}

//Executes if user gets the answer wrong
function userLost() {
    if (mistakesHad === getWrong) {
        lettersEl.innerHTML = 'You Lost 😥 <br> The correct word was: ' + word
        reload()
    }
}

//Part of the counter sequence
function updateGetWrong() {
    attemptDisplayEl.innerHTML = mistakesHad
}

//Displays the number of wrong guesses the user gets to start with
attemptDisplayEl.innerHTML = mistakesHad

//Restarts game and triggers when user clicks 'play again' button after winning or losing 
function reload() {
    let clickerDiv = document.getElementById('clicker') 
    let btn = document.createElement('button')
    btn.innerText = 'Click here to play again'
    clickerDiv.appendChild(btn) 
    btn.addEventListener('click', e => {
        location.reload()
    })
}

//updates the image for the hangman stick figure Just added
function imageUpdate() {
    document.getElementById('pics').src = './Hangmanimages/image' + mistakesHad + '.jpg'
}

//Calling functions
makeKeys()
getRandomWord()
wordOnBoard()
