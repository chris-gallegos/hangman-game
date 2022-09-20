/*----- constants -----*/
//An array of strings contaning the possible winning combos. 
const WIN_WORDS = ["mud","eigenvalue","holder","fording","refereeing",
"Fauna","innocence","shipwrecked","giftware","scrapers",
"Redoubling","defying","pamphleteer","whiskies","elves",
"Poets","sauerkraut","nurses","dispersing","started","spatter",
"Settlement","shell","woodworker","editors","herbs","liquorice",
"Penknife","bribers","bobby","recuring","criticised","pitiable","yuppie",
"Allocates","cellar","reactivation","blistering","unshockable","caterer",
"Irritatedly","cleaver","largeness","bedouins","declaim","sparsely","Evangelicals",
"contemplates","confessor","humiliate","buttering",
"Subsuming","chalet","depraving","scalable","thus","download",
"Envisage","longing","announcing","ram","streaks","fallible","positional",
"Gibbered","steadygoing","unbending","striated","thrown","teashop",
"Upended","spent","hall","worldclass","contains","lunging","wags",
"Impoverish","evangelical","drastic","sheepskins","swindles","reprove",
"Devotee","stirred","protozoa","facile","raffles","transducers","steeper",
"Cruxes","savaged","unfair","slimier","singleness","office","misreading",
"Teachings","harebell","paginating","skimp","tactile","crushers","wellread",
"Digress","tourniquet","squeaker","midge","anthropoid","abolitionist",
"Parachutes","olympia","sunny","acetic","stage","plush","pearls",
"Paintwork","disinfected","rings","selfportrait","dapple","cathartic",
"Pancreatic","plastered","stoning","clammed","specialist","devises",
"Final","overlook","demounting","novices","sables","misbegotten",
"Compression","endeared","skinniest","oestrogens","rye","beaks","created",
"Guffaws","backtracking","reconnoitre","nightcap","crust","deployment",
"Wellread","cinch","wilted","chides","stressful","clippings","copses",
"Scrapyards","outwitting","breeder","tinderbox","brunt","diminuendo",
"Bisected","captains","catalytic","followings","exclusively","retreating",
"Recombinant","obligated","dioptre","invasions","gorgeous","featureless",
"Advertises","bicycled","afflicted","progesterone","sandals","loaves",
"Uppermost","transfusing","sinkable","southernmost","exhilarated",
"Droves","navel","helots","rams","unlikely","engulfing","minuscule",
"Shimmers","milker","guerillas","summary","ray","specious","ranter",
"Celebratory","fraternities","downs","assuaging","transcending","amplified",
"Duffel","herding","narrator","madhouse","aplenty","tapestries","tweeds",
"Purgings","inspected","horseflesh","vexes","suffixed","refractors","assembly",
"Cherubs","basrelief","beagles","fighter","preaches","contemplated","beans",
"Sluicing","goblets","championing","grimaced","fervid","demolitions","emulsion",
"Exothermic","elevating","unnamed","mouthorgan","slope","outbreaks","deary",
"Commandments","brunches","scorpions","saucily","bystanders","destroyed",
"Leavened","facts","recursive","physiognomy","category","canteen","slot",
"Observation","defers","jackass","blubber","cite","lunchtimes","lend","invidious",
"Megavolt","armament","performs","construing","garotte","hocuspocus","grilles",
"Parities","arrogant","purer","indigestion","countess","cyphers","detracts",
"Minutest","ploughing","lockjaw","bandanna","vacated","series","airlift",
"Morally","chronometer","proved","wordplay","interns","exultantly",
"Invalidating","scrutinised","serf","dazzler","curs","prickles","hereby",
"Carted","readier","secretary","gasometer","accent","figure","boutique",
"Assents","axehead","biometry","oars","fertilising","unexciting","gentry",
"Minimum","pavements","speeding","essayists","trauma","anaphora",
"Symbolically","disturbs","tress","unhuman","delivery","scape","mushy",
"Subregional","autistic","humbles","reminders","saute","hangmen","kerned",
"Building","toppled","paradoxes","outspoken","acidrain","males","available",
"Guarantor","stopping","moisturising","hunts","quadrille","selfish","detracting",
"Creek","invigorating","facets","mobiles","beadles","stylishness","scots",
"Dictators","deklerk","unsuspecting","desirably","lengthwise","ruby","restartable",
"Lineouts","shareholder","prescribed","tolerant","toll","simile","plea","barked",
"Martians","exporting","resuming","deactivating","deterrence","dosages",
"Fuzziness","gratuitously","chloroformed","nincompoop","pistols","coralline",
"Dipstick","lazing","trilateral","decimate","delinquency","mitigate","circumcise",
"Positional","distempers","accommodated","zigzags","mantids","pessimism",
"Favouring","disappoints","stiffens","wrenched","monotony","soccer","megaparsec",
"Homunculus","acrimony","unwholesome","wrench","prescription","tiger","meets",
"Profuseness","coffers","wits","broadsides","designedly","vents","trivialises",
"Solicitors","gentleman","collapse","slander","souring","fornication","bigoted",
"Bosom","aunts","setters","vagabonds","infamous","ignominious","surmountable",
"Tarriest","guardsmen","bereave","hoardings","trepanned","accelerators",
"Interested","vaults","sedition","liferaft","inelegance","riddles","enchants","boosted",
"Reacting","scab","yonder","overused","portentously","undefiled","specifier","signaller",
"Guilty","philosophies","innately","unscientific","interaction","rhine","tundra",
"Serenade","licences","narcissism","chartered","tags","wellmade","canter",
"Armpit","sunspot","greasing","unattached","colonies","diminish","witticisms",
"Invidious","suitable","berths","erupted","conflates","teardrop","proposition",
"Lyra","examples","satisfiable","payphones","bowdlerising","famines","decamped",
"dream","makings","rakes","installed","two","knocking","galley","stunning","printmakers",
"equalling","barred","truss","whisper","inactivating","sailors","estuary","recounted","subgroup",
"remarkable","function"]

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