
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



let mainInfoContainer = document.querySelector(".mainInfoText")

function startSliderDesktop(){
    setInterval(sliderImageDesktop, 6000);
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
    writtenEducationText(text)
    
}

function changeToWork(){
    textBox.className = 'grey';
    writtenWorkText(text);
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

let showIntro = false;
let showEdu = false;
let showWork = false;
let showStrength = false;
let showHobbies = false;



function showIntroductionMobile(){    

    if(showIntro){

        removeInfoText(divIntro);
        mainInfoContainer.style.margin = "1rem";
        showIntro = false;
    }

    else{
        createInfoText('introductionMobile' , 'divIntro');
        
        mainInfoContainer.style.margin = "1rem 1rem 30rem 1rem";
        divText.innerHTML="<p>Hellu! Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem iste facere eveniet asperiores ad cumque, tenetur perspiciatis reiciendis repellendus, nam, distinctio enim? Aut at ratione atque necessitatibus, similique aliquam ut.Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem iste facere eveniet asperiores ad cumque, tenetur perspiciatis reiciendis repellendus, nam, distinctio enim? Aut at ratione atque necessitatibus, similique aliquam ut.</p>";
        
        showIntro = true;
        showEdu = false;
        showWork = false;
        showStrength = false;
        showHobbies = false;
    }
}



function showEducationMobile(){

    if(showEdu){
        removeInfoText(divEdu)
        mainInfoContainer.style.margin = "1rem";
        showEdu = false;
    }

    else{
        createInfoText('educationMobile', 'divEdu');
        mainInfoContainer.style.margin = "1rem 1rem 30rem 1rem";
        writtenEducationText(divText)
        showIntro = false;
        showEdu = true;
        showWork = false;
        showStrength = false;
        showHobbies = false;
    }
}

function showWorkMobile(){
    if(showWork){

        removeInfoText(divWork);
        mainInfoContainer.style.margin = "1rem";
        showWork = false;
    }

    else{
        createInfoText('workMobile' , 'divWork');
        divText.setAttribute("id", "divWork");
        mainInfoContainer.style.margin = "1rem 1rem 30rem 1rem";
        writtenWorkText(divText);
        
        showIntro = false;
        showEdu = false;
        showWork = true;
        showStrength = false;
        showHobbies = false;
    }
}

function showStrengthsMobile(){
    if(showStrength){

        removeInfoText(divStrength);
        mainInfoContainer.style.margin = "1rem";
        showStrength = false;
    }

    else{
        createInfoText('strengthsMobile' , 'divStrength');
        divText.setAttribute("id", "divStrength");
        mainInfoContainer.style.margin = "1rem 1rem 30rem 1rem";
        divText.innerHTML="<p>Hellu! Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem iste facere eveniet asperiores ad cumque, tenetur perspiciatis reiciendis repellendus, nam, distinctio enim? Aut at ratione atque necessitatibus, similique aliquam ut.Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem iste facere eveniet asperiores ad cumque, tenetur perspiciatis reiciendis repellendus, nam, distinctio enim? Aut at ratione atque necessitatibus, similique aliquam ut.</p>";
        
        showIntro = false;
        showEdu = false;
        showWork = false;
        showStrength = true;
        showHobbies = false;
    }
}

function showHobbiesMobile(){
    if(showHobbies){

        removeInfoText(divHobbies);
        mainInfoContainer.style.margin = "1rem";
        showHobbies = false;
    }

    else{
        createInfoText('hobbiesMobile' , 'divHobbies');
        divText.setAttribute("id", "divHobbies");
        mainInfoContainer.style.margin = "1rem 1rem 30rem 1rem";
        divText.innerHTML="<p>Hellu! Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem iste facere eveniet asperiores ad cumque, tenetur perspiciatis reiciendis repellendus, nam, distinctio enim? Aut at ratione atque necessitatibus, similique aliquam ut.Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem iste facere eveniet asperiores ad cumque, tenetur perspiciatis reiciendis repellendus, nam, distinctio enim? Aut at ratione atque necessitatibus, similique aliquam ut.</p>";
        
        showIntro = false;
        showEdu = false;
        showWork = false;
        showStrength = false;
        showHobbies = true;
    }
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

function writtenEducationText(source){
    source.innerHTML = '<p> <b> HT 2001 - VT 2004 </b> läste jag <b> Media - inriktning rörlig bild och ljud</b> på <b>Västerhöjdsgymnasiet </b> i Skövde. Redan då lades grunden för mina kunskaper kring färglära, bildkomposition och mediekommunikation. </p>'
    + ' <br> <p> Efter några års jobb började jag <b> 2010 </b> studera <b> Personal, organisation och ledarskapsprogrammet</b> på <b>Högskolan i Skövde</b>. <br>'
    + 'Detta resulterade <b>2013</b> i en filosofie kandidatexamen i Socialpsykologi och en gedigen kunskap kring beteendevetenskap, grupp-psykologi och kommunikationsmetodik.</p>'
    + '<br> <p>Sedan <b>hösten 2019</b> är jag studerande på <b>yrkeshögskolan Medieinstitutet</b> i <b> Göteborg </b>. Här lär jag mig framför allt <b> HTML, CSS & Javascript</b>.</p>'
}

function writtenWorkText(source){
    source.innerHTML = '<p> Direkt efter gymnasiet, <b>hösten 2004</b>, fick jag jobb på <b> McDonalds</b> i Skövde. Snabbt avancerade jag till handledare och fick då i uppdrag att utbilda de anställda inom kvalitét och service. Jag fick även hjälpa till med att utbilda och stötta de nya arbetsledarna i sin nya roll. 2010-2013 var jag tjänsteledig för studier och <b> sommaren 2015 </b> stämplade jag ut från McDonalds för gott. </p>'
    + '<br><p><b>Hösten 2015</b> klev jag in på <b>Norrmalmskolan</b> i Skövde för att påbörja min roll som <b>fritidspedagog</b>. Jag jobbade med barn i både låg och mellanstadiet. Min pedagogikfilosofi var att "Det är okej att inte vara som alla andra, så länge man är snäll". Mitt mål var att försöka hitta barnens speciallintressen och hjälpa dem att utvecklas inom dessa intressen. Barnen kom ofta till mig när de kände att de ville prata med en vuxen och jag hoppas våra samtal var lika givande för dem som de var för mig.' 
    + ' <b> Sommaren 2019</b> sa jag "hej då" till barnen och styrde min kos mot Göteborg. </p>'
}