// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Constants for main button query selectors
const noun1Btn = document.getElementById('noun1');
const verbBtn = document.getElementById('verb');
const adjectiveBtn = document.getElementById('adjective');
const noun2Btn = document.getElementById('noun2');
const settingBtn = document.getElementById('setting');

// Constants for p tag to display query selectors
const choosenNoun1 = document.getElementById('choosenNoun1');
const choosenVerb = document.getElementById('choosenVerb');
const choosenAdjective = document.getElementById('choosenAdjective');
const choosenNoun2 = document.getElementById('choosenNoun2');
const choosenSetting = document.getElementById('choosenSetting');

// Constants for final buttons and p tags
const playbackBtn = document.getElementById('playback');
const randomBtn = document.getElementById('random');
const storyOutput = document.getElementById('story');

// Variables for pre-defined arrays
const nouns1 = ['turkey','mom','dad','dog','teacher','elephant','cat'];
const verbs = ['sat on', 'ate', 'danced with', 'saw', 'does not like','kissed'];
const adjectives = ['a fat', 'a barking', 'a slimey', 'a goofy', 'a scary', 'a funny'];
const nouns2 = ['goat', 'monkey', 'fish', 'cow', 'frog', 'bug','worm'];
const settings = ['in my shoes', 'on the grass', 'in my soup', 'in my spaghetti', 'on the chair','on the moon'];

// Variables for count to grab array elements
let noun1Count = 0;
let verbCount = 0;
let adjectiveCount = 0;
let noun2Count = 0;
let settingCount = 0;

/* Functions
-------------------------------------------------- */
function noun1_on_click() {
    console.log('Noun 1 Button Clicked');
    choosenNoun1.innerText = nouns1[noun1Count];
    noun1Count = (noun1Count + 1) % nouns1.length;
}

function verb_on_click() {
    choosenVerb.innerText = verbs[verbCount];
    verbCount = (verbCount + 1) % verbs.length;
}

function adjective_on_click() {
    choosenAdjective.innerText = adjectives[adjectiveCount];
    adjectiveCount = (adjectiveCount + 1) % adjectives.length;
}

function noun2_on_click() {
    choosenNoun2.innerText = nouns2[noun2Count];
    noun2Count = (noun2Count + 1) % nouns2.length;
}

function setting_on_click() {
    choosenSetting.innerText = settings[settingCount];
    settingCount = (settingCount + 1) % settings.length;
}

// concatenate the user story and display
function playback_on_click() {
    const story = `${choosenNoun1.innerText} ${choosenVerb.innerText} ${choosenAdjective.innerText} ${choosenNoun2.innerText} ${choosenSetting.innerText}`;
    storyOutput.innerText = story;
}

// grabbing random element from arrays, concatenate and display
function random_on_click() {
    choosenNoun1.innerText = getRandomWord(nouns1);
    choosenVerb.innerText = getRandomWord(verbs);
    choosenAdjective.innerText = getRandomWord(adjectives);
    choosenNoun2.innerText = getRandomWord(nouns2);
    choosenSetting.innerText = getRandomWord(settings);
    playback_on_click(); // automatically display the story
}

function getRandomWord(array) {
    return array[Math.floor(Math.random() * array.length)];
}

/* Event Listeners
-------------------------------------------------- */
noun1Btn.addEventListener('click', noun1_on_click);

verbBtn.addEventListener('click', verb_on_click);
adjectiveBtn.addEventListener('click', adjective_on_click);
noun2Btn.addEventListener('click', noun2_on_click);
settingBtn.addEventListener('click', setting_on_click);

playbackBtn.addEventListener('click', playback_on_click);
randomBtn.addEventListener('click', random_on_click);
