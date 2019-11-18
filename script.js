
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

const educationText = 'Jag har pluggat i sisådär hundra år så 2 år tll gör väl inte så mycket'

let mainInfoContainer = document.querySelector(".mainInfoText")

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

let showIntro = false
let showEdu = false



function showIntroductionMobile(){ 

    

    if(showIntro){

        removeInfoText(divIntro);
        mainInfoContainer.style.margin = "1rem";
        showIntro = false;
        console.log(showIntro, showEdu);
    }

    else{
        createInfoText('introductionMobile' , 'divIntro');
        divText.setAttribute("id", "divIntro");
        mainInfoContainer.style.margin = "1rem 1rem 30rem 1rem";
        divText.innerHTML="<p>Hellu! Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem iste facere eveniet asperiores ad cumque, tenetur perspiciatis reiciendis repellendus, nam, distinctio enim? Aut at ratione atque necessitatibus, similique aliquam ut.Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem iste facere eveniet asperiores ad cumque, tenetur perspiciatis reiciendis repellendus, nam, distinctio enim? Aut at ratione atque necessitatibus, similique aliquam ut.</p>";
        
        showIntro = true;
        showEdu = false;
        console.log(showIntro, showEdu);
    }
}



function showEducationMobile(){

    

    if(showEdu){
        removeInfoText(divEdu)
        showEdu = false;
        console.log(showIntro, showEdu)

    }

    else{
        createInfoText('educationMobile', 'divEdu');
        divText.innerHTML= '<p class= "">' + educationText + '</p>'
        showEdu = true;
        showIntro = false;
        console.log(showIntro, showEdu)
    }
}

function showWorkMobile(){
    toggleMobileMenu('workMobile')
}

function showStrengthsMobile(){
    toggleMobileMenu('strengthsMobile')
}

function showHobbiesMobile(){
    toggleMobileMenu('hobbiesMobile')
}

const divText = document.createElement('div');
divText.style.backgroundColor = 'white';
divText.style.width = '90%';
divText.style.padding = '2rem 3rem';
divText.style.margin = '0 2rem 2rem 2rem';
divText.style.boxShadow = '0 0 10px grey';
divText.style.borderRadius = '0.2rem';
divText.style.lineHeight = '2rem';




function createInfoText(tab, selectedDiv){
    divText.setAttribute("id", selectedDiv);
    document.getElementById(tab).append(divText);
    
}

function removeInfoText(diven){
    diven.parentNode.removeChild(diven);
}