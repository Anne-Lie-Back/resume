

window.addEventListener('load', loadSite);

/**
 * What happens when the site loads and sets eventlisteners.
 */
function loadSite(){
startSlider();
writtenIntroText(text);

introduction.addEventListener('click', changeToIntroduction);
education.addEventListener('click', changeToEducation);
work.addEventListener('click', changeToWork);
strengths.addEventListener('click', changeToStrengths);
hobbies.addEventListener('click', changeToHobbies);

introductionMobile.addEventListener('click',showIntroductionMobile);
educationMobile.addEventListener('click', showEducationMobile);
workMobile.addEventListener('click', showWorkMobile);
strenghtsMobile.addEventListener('click', showStrengthsMobile);
hobbiesMobile.addEventListener('click', showHobbiesMobile);
}

/**
 * GLOBAL VARIABLES
 */

/**
 * @type {Number} currentIndex - calculates current index in slider.
 */
let currentIndex = 0;

/**
 * @type {HTMLElement} textBox - gets the textBox for changeing color
 */
const textBox = document.getElementById('textBox');

/**
 * @type {HTMLElement} text - gets the text in the textboxes.
 */
const text = document.getElementById('text');


/***
 * 
 *  LARGE INTRODUCTION TAB VARIABLES **
 */
/**
 * @type {HTMLElement} introduction - gets the introduction-tab
 */
const introduction = document.getElementById('introduction');

/**
 * @type {HTMLElement} education - gets the education-tab
 */
const education = document.getElementById('education');

/**
 * @type {HTMLElement} work - gets the work-tab
 */
const work = document.getElementById('work');

/**
 * @type {HTMLElement} strengths - gets the strengths-tab
 */
const strengths = document.getElementById('strengths');

/**
 * @type {HTMLElement} hobbies - gets the hobbie-tab
 */
const hobbies = document.getElementById('hobbies');

/**
 * 
 * SMALL INTRODUCTION TAB VARIABLES
 */

/**
 * @type {HTMLElement} introductionMobile - gets the introduction-tab
 */
const introductionMobile = document.getElementById('introductionMobile');

/**
 * @type {HTMLElement} educationMobile - gets the education-tab
 */
const educationMobile = document.getElementById('educationMobile');

/**
 * @type {HTMLElement} workMobile - gets the work-tab
 */
const workMobile = document.getElementById('workMobile');

/**
 * @type {HTMLElement} strengthsMobile - gets the strengths-tab
 */
const strenghtsMobile = document.getElementById('strengthsMobile');

/**
 * @type {HTMLElement} hobbiesMobile - gets the hobbies-tab
 */
const hobbiesMobile = document.getElementById('hobbiesMobile');

/**
 * @type {HTMLElement} mainInfoContainer - gets the mainInfotext-div for styling
 */
const mainInfoContainer = document.querySelector(".mainInfoText");

