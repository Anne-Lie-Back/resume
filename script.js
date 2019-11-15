
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
 * trying to fix eventlisteners
 */
function changeToIntroduction(){
    console.log('Hello! This is mi!')
}

function changeToEducation(){

    console.log('education is important');
}

function changeToWork(){
    console.log('Kiddos and burgers')
}

function changeToStrengths(){
    console.log('education is important');
}

function changeToHobbies(){
    console.log('I like turtles')
}
