/*----- constants -----*/
//An array of strings contaning the possible winning combos. 
const WIN_WORDS = ["mud","eigenvalue","holder","fording","refereeing",
"fauna","innocence","shipwrecked","giftware","scrapers",
"redoubling","defying","pamphleteer","whiskies","elves",
"poets","sauerkraut","nurses","dispersing","started","spatter",
"settlement","shell","woodworker","editors","herbs","liquorice",
"penknife","bribers","bobby","recuring","criticised","pitiable","yuppie",
"allocates","cellar","reactivation","blistering","unshockable","caterer",
"irritatedly","cleaver","largeness","bedouins","declaim","sparsely","evangelicals",
"contemplates","confessor","humiliate","buttering",
"subsuming","chalet","depraving","scalable","thus","download",
"envisage","longing","announcing","ram","streaks","fallible","positional",
"gibbered","steadygoing","unbending","striated","thrown","teashop",
"upended","spent","hall","worldclass","contains","lunging","wags",
"impoverish","evangelical","drastic","sheepskins","swindles","reprove",
"devotee","stirred","protozoa","facile","raffles","transducers","steeper",
"cruxes","savaged","unfair","slimier","singleness","office","misreading",
"teachings","harebell","paginating","skimp","tactile","crushers","wellread",
"digress","tourniquet","squeaker","midge","anthropoid","abolitionist",
"parachutes","olympia","sunny","acetic","stage","plush","pearls",
"paintwork","disinfected","rings","selfportrait","dapple","cathartic",
"pancreatic","plastered","stoning","clammed","specialist","devises",
"final","overlook","demounting","novices","sables","misbegotten",
"compression","endeared","skinniest","oestrogens","rye","beaks","created",
"guffaws","backtracking","reconnoitre","nightcap","crust","deployment",
"wellread","cinch","wilted","chides","stressful","clippings","copses",
"scrapyards","outwitting","breeder","tinderbox","brunt","diminuendo",
"bisected","captains","catalytic","followings","exclusively","retreating",
"recombinant","obligated","dioptre","invasions","gorgeous","featureless",
"advertises","bicycled","afflicted","progesterone","sandals","loaves",
"uppermost","transfusing","sinkable","southernmost","exhilarated",
"droves","navel","helots","rams","unlikely","engulfing","minuscule",
"shimmers","milker","guerillas","summary","ray","specious","ranter",
"celebratory","fraternities","downs","assuaging","transcending","amplified",
"duffel","herding","narrator","madhouse","aplenty","tapestries","tweeds",
"purgings","inspected","horseflesh","vexes","suffixed","refractors","assembly",
"cherubs","basrelief","beagles","fighter","preaches","contemplated","beans",
"sluicing","goblets","championing","grimaced","fervid","demolitions","emulsion",
"exothermic","elevating","unnamed","mouthorgan","slope","outbreaks","deary",
"commandments","brunches","scorpions","saucily","bystanders","destroyed",
"leavened","facts","recursive","physiognomy","category","canteen","slot",
"observation","defers","jackass","blubber","cite","lunchtimes","lend","invidious",
"megavolt","armament","performs","construing","garotte","hocuspocus","grilles",
"parities","arrogant","purer","indigestion","countess","cyphers","detracts",
"minutest","ploughing","lockjaw","bandanna","vacated","series","airlift",
"morally","chronometer","proved","wordplay","interns","exultantly",
"invalidating","scrutinised","serf","dazzler","curs","prickles","hereby",
"carted","readier","secretary","gasometer","accent","figure","boutique",
"assents","axehead","biometry","oars","fertilising","unexciting","gentry",
"minimum","pavements","speeding","essayists","trauma","anaphora",
"symbolically","disturbs","tress","unhuman","delivery","scape","mushy",
"subregional","autistic","humbles","reminders","saute","hangmen","kerned",
"building","toppled","paradoxes","outspoken","acidrain","males","available",
"guarantor","stopping","moisturising","hunts","quadrille","selfish","detracting",
"creek","invigorating","facets","mobiles","beadles","stylishness","scots",
"dictators","deklerk","unsuspecting","desirably","lengthwise","ruby","restartable",
"lineouts","shareholder","prescribed","tolerant","toll","simile","plea","barked",
"martians","exporting","resuming","deactivating","deterrence","dosages",
"fuzziness","gratuitously","chloroformed","nincompoop","pistols","coralline",
"dipstick","lazing","trilateral","decimate","delinquency","mitigate","circumcise",
"positional","distempers","accommodated","zigzags","mantids","pessimism",
"favouring","disappoints","stiffens","wrenched","monotony","soccer","megaparsec",
"homunculus","acrimony","unwholesome","wrench","prescription","tiger","meets",
"profuseness","coffers","wits","broadsides","designedly","vents","trivialises",
"solicitors","gentleman","collapse","slander","souring","fornication","bigoted",
"bosom","aunts","setters","vagabonds","infamous","ignominious","surmountable",
"tarriest","guardsmen","bereave","hoardings","trepanned","accelerators",
"interested","vaults","sedition","liferaft","inelegance","riddles","enchants","boosted",
"reacting","scab","yonder","overused","portentously","undefiled","specifier","signaller",
"guilty","philosophies","innately","unscientific","interaction","rhine","tundra",
"serenade","licences","narcissism","chartered","tags","wellmade","canter",
"armpit","sunspot","greasing","unattached","colonies","diminish","witticisms",
"invidious","suitable","berths","erupted","conflates","teardrop","proposition",
"lyra","examples","satisfiable","payphones","bowdlerising","famines","decamped",
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
let mistakesHad = 8
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
    let btn = document.createElement('button')
    btn.innerText = 'Click here to play again'
    document.body.appendChild(btn)
    btn.addEventListener('click', e => {
        location.reload()
    })
}

//updates the image for the hangman stick figure Just added
function imageUpdate() {
    document.getElementById('pics').src = './Hangmanimages/image' + mistakesHad + '.jpg'
    console.log(mistakesHad)
}



//Game Start, calling functions 
makeKeys()
getRandomWord()
wordOnBoard()