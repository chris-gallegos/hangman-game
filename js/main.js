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
let mistakesHad = 8


/*----- cached element references -----*/

const attemptDisplayEl = document.getElementById('mistakes')
let lettersEl = document.getElementById('letters')
const wordsEl = document.getElementById('guessword')


/*----- event listeners -----*/

// lettersEl.addEventListener('click', handleLetterClick)


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
  
// Function that generates the word from the aray of words available 
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
    }
}







//To display amount of wrong guesses made

attemptDisplayEl.innerHTML = mistakesHad



// function mistakesDislplay() {

// }
  




makeKeys()
getRandomWord()
wordOnBoard()




//Game Start
init()