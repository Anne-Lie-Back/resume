
window.addEventListener('load', loadSite)

let currentIndex = 0

function loadSite(){
startSliderDesktop();
introduction.addEventListener('click', changeToIntroduction);
education.addEventListener('click', changeToEducation);
work.addEventListener('click', changeToWork);
strengths.addEventListener('click', changeToStrengths);
hobbies.addEventListener('click', changeToHobbies);
}

let introduction = document.getElementById('introduction');
let education = document.getElementById('education');
let work = document.getElementById('work');
let strengths = document.getElementById('strengths');
let hobbies = document.getElementById('hobbies');
let textBox = document.getElementById('textBox')
let text = document.getElementById('text');


function startSliderDesktop(){
    setInterval(sliderImageDesktop, 4000);
}

function sliderImageDesktop(){
    changeSliderObject(document.querySelectorAll('.desktopSlider img'), currentIndex);
    changeSliderObject(document.querySelectorAll('.headlineSlider h4'), currentIndex);
    currentIndex = (currentIndex + 1) % 3;
}

function changeSliderObject(sliderObjects, currentIndex) {
    sliderObjects[currentIndex].classList.add('hidden');
    currentIndex = (currentIndex + 1) % sliderObjects.length;
    sliderObjects[currentIndex].classList.remove('hidden');
}

/**
 * TEXTBOX FUNCTIONS!
 */
function changeToIntroduction(){
    textBox.className = 'yellow'
    text.innerHTML = '<p> HELLOOOO! THIS I! <br> LEEE DESU! </p>'
}

function changeToEducation(){
    textBox.className = 'lavender';
    text.innerHTML = '<p>Education is mucho importantios</p>';
    
}

function changeToWork(){
    textBox.className = 'grey';
    text.innerHTML = '<p>Kiddos and burgers</p>';
}

function changeToStrengths(){
    textBox.className = 'green';
    text.innerHTML = '<p>Ajm strong</p>';
}

function changeToHobbies(){
    textBox.className = 'blue';
    text.innerHTML = '<p>I like turtles</p>';
}
