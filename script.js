
window.addEventListener('load', loadSite)

let currentIndex = 0

function loadSite(){
startSliderDesktop();

introduction.addEventListener('click', changeToIntroduction);
education.addEventListener('click', changeToEducation);
work.addEventListener('click', changeToWork);
strengths.addEventListener('click', changeToStrengths);
hobbies.addEventListener('click', changeToHobbies);

introductionMobile.addEventListener('click',showIntroductionMobile);
educationMobile.addEventListener('click', showEducationMobile);
workMobile.addEventListener('click', showWorkMobile);
strenghtsMobile.addEventListener('click', showStrengthsMobile)
hobbiesMobile.addEventListener('click', showHobbiesMobile)
}

let introduction = document.getElementById('introduction');
let education = document.getElementById('education');
let work = document.getElementById('work');
let strengths = document.getElementById('strengths');
let hobbies = document.getElementById('hobbies');
let textBox = document.getElementById('textBox')
let text = document.getElementById('text');

let introductionMobile = document.getElementById('introductionMobile');
let educationMobile = document.getElementById('educationMobile');
let workMobile = document.getElementById('workMobile')
let strenghtsMobile = document.getElementById('strengthsMobile')
let hobbiesMobile = document.getElementById('hobbiesMobile')


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

/**
 * MOBILE TEXTBOX FUNCTIONS
 */

function showIntroductionMobile(){

    const div = document.createElement('div');
    div.style.backgroundColor = 'white';
    div.style.width = '90%';
    div.style.height = '5rem';
    div.style.margin = '0 2rem 2rem 2rem';
    div.style.boxShadow = '0 0 10px grey';
    div.style.borderRadius = '0.2rem';

    document.getElementById('introductionMobile').appendChild(div);
    

}

function showEducationMobile(){
    console.log('Education is important in mobil också')
}
