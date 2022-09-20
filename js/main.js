console.log('Js is running')

/*----- constants -----*/
// An Array containing a list of Arrays contaning the possible winning combos. 
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


//Function that genterates buttons for letters to be selected "keyboard"
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
  
// Function that generates the word from the array of words available 
function getRandomWord() {
    word = WIN_WORDS[Math.floor(Math.random() * WIN_WORDS.length)]
}


//Function that puts word generated on board
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


function userWon() {
    if (wordPicked === word) {
        lettersEl.innerHTML = 'Congratulations, you win! 🤗'  
        reload()
    }
}


function userLost() {
    if (mistakesHad === getWrong) {
        lettersEl.innerHTML = 'You Lost 😥'
        reload()
    }
}


function updateGetWrong() {
    attemptDisplayEl.innerHTML = mistakesHad
}

//To display amount of wrong guesses made
attemptDisplayEl.innerHTML = mistakesHad

//Restart Game
function reload() {
    let btn = document.createElement('button')
    btn.innerText = 'Click here to play again'
    document.body.appendChild(btn)
    btn.addEventListener('click', e => {
        location.reload()
    })
}

//Game Start
makeKeys()
getRandomWord()
wordOnBoard()