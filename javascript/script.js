
window.addEventListener('load', loadSite)

let currentIndex = 0

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
let mainInfoContainer = document.querySelector(".mainInfoText")

