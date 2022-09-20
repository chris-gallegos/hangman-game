/*----- constants -----*/
//An array of strings contaning the possible winning combos. 
const WIN_WORDS = [
    'javascript',
    'swift',
    'java',
    'python',
    'html',
    'css',
    'ruby',
    'binary'
]

//An array of strings contaning the alphabet for the keyboard. 
const LETTERS = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
't', 'u', 'v', 'w', 'x', 'y', 'z'] 


/*----- app's (variables) -----*/
let word = ''
let wordPicked = null
let choice = []
let mistakesHad = 7
let getWrong = 0

/*----- cached element references -----*/
const attemptDisplayEl = document.getElementById('mistakes')
let lettersEl = document.getElementById('letters')
const wordsEl = document.getElementById('guessword')


/*----- functions -----*/
//Genterates buttons for letters to be selected "keyboard"
function makeKeys() {
    let buttonKeys = LETTERS.map(key =>
      `
        <button
          class="buttonA1"
          id='` + key + `'
          onClick="getChoice('` + key + `')"
        >
          ` + key + `
        </button>
      `).join('');
  
    lettersEl.innerHTML = buttonKeys;
}
  
//Generates the word from the array of words available 
function getRandomWord() {
    word = WIN_WORDS[Math.floor(Math.random() * WIN_WORDS.length)]
}

//Puts word generated on board
function wordOnBoard() {
    wordPicked = word.split('').map(character => (choice.indexOf(character) >= 0 ? character : " _ ")).join('')
    wordsEl.innerHTML = wordPicked
}

//Function that guesses word picked for user to guess
function getChoice(letterPicked) {
    choice.indexOf(letterPicked) === -1 ? choice.push(letterPicked) : null
    document.getElementById(letterPicked).setAttribute('disabled', true)

    if (word.indexOf(letterPicked) >= 0) {
        wordOnBoard()
        userWon()
    } else if (word.indexOf(letterPicked) === -1) {
        mistakesHad--
        updateGetWrong()
        userLost()
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
    let btn = document.createElement('button')
    btn.innerText = 'Click here to play again'
    document.body.appendChild(btn)
    btn.addEventListener('click', e => {
        location.reload()
    })
}

//Game Start, calling functions 
makeKeys()
getRandomWord()
wordOnBoard()