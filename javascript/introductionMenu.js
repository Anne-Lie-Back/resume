function writtenIntroText(source){
    source.innerHTML = '<p> Webbplatser tar mer och större plats i människans vardag för var år som tickar på. Det är en kommunikationstung plats där det sker en anna typ av socialisering än i den vanliga världen, men likväl en typ av socialisering. Med min kunskap inom socialpsykologi och människans beteende kombinerat med de kunskaper jag börjat förvärva inom frontend development så tror jag att jag kan vara ett ovärderligt tillskott för den organisation som väljer att ta mig till sig. Jag har ett stort intresse för varför människan gör de valen de gör på webben och vill fortsätta utvecklas inom det området för att kunna utveckla så trevliga användarupplevelser som möjligt, och samtidigt göra utvecklingsprocessen så trevlig som möjlig för alla inblandade.</p>';
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
    + ' <b> Sommaren 2019</b> sa jag "hej då" till barnen och styrde min kos mot Göteborg. </p>';
}

function writtenStrengthsText(source){
    source.innerHTML = '<p><ul><li>Jag har ett bra öga för både helhet och detaljer.</li><li>Jag är duktig på att utveckla idéer och se både möjligheter och eventuell problematik.</li><li>Jag har stor förståelse för mänskliga beteendet och är en noggrann kommunikatör.</li><li>Jag är ödmjuk inför faktumet att jag har mycket mer att lära.</li></ul></p>';
}

function writtenHobbiesText(source){
    source.innerHTML = '<p> När jag inte studerar eller gör andra måsten gillar jag att ägna min tid med att spela, både brädspel och data/tv-spel. Mycket Nintendo blir det, och spelar jag något på daton blir det oftast Dota 2, något historiedrivet spel eller peka klicka-äventyr. Jag älskar film, serier och anime. Intressen som inte involverar en skärm innefattar matlagning, gärna med asiatiska influenser, och att pyssla. Mestadels blir det pärlplattetavlor som får bli offer för min inspiration. <br> Jag uppskattar även långa promenader i fina omgivningar med hunden, ett pass yoga och dans. <br> Gillar ni quiz är jag tjejen för er. Jag kan lite om mycket och är extra kunnig innom musik och populärkultursfrågor.</p>';
}


/**
 * MAIN TEXTBOX FUNCTIONS!
 */
function changeToIntroduction(){
    textBox.className = 'yellow';
    writtenIntroText(text);
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
    writtenStrengthsText(text)
}

function changeToHobbies(){
    textBox.className = 'blue';
    writtenHobbiesText(text)
}


/**
 * MOBILE TEXTBOX FUNCTIONS
 */

let showIntro = false;
let showEdu = false;
let showWork = false;
let showStrength = false;
let showHobbies = false;


function changeArrowIcon(chosenInfo){
    if(document.getElementById(chosenInfo).className=="fas fa-angle-down"){
      document.getElementById(chosenInfo).className = "fas fa-angle-up";
    }else{
      document.getElementById(chosenInfo).className = "fas fa-angle-down";
    }
}

function showIntroductionMobile(){ 
    
    changeArrowIcon("informationArrow");

    if(showIntro){

        removeInfoText(divIntro);
        mainInfoContainer.style.margin = "1rem";
        showIntro = false;
        
    }

    else{
        const xSmall = "53rem"
        const small =  "32rem"
        const medium = "25rem"

        createInfoText('introductionMobile' , 'divIntro');
        mainInfoContainer.style.margin = "1rem 1rem 30rem 1rem";
        setMarginBottom(xSmall, small, medium)
        writtenIntroText(divText);
        
        showIntro = true;
        showEdu = false;
        showWork = false;
        showStrength = false;
        showHobbies = false;
    }
    
}

function showEducationMobile(){

    changeArrowIcon("educationArrow");

    if(showEdu){
        removeInfoText(divEdu)
        mainInfoContainer.style.margin = "1rem";
        showEdu = false;
    }

    else{
        const xSmall = "50rem"
        const small =  "35rem"
        const medium = "28rem"

        createInfoText('educationMobile', 'divEdu');
        
        mainInfoContainer.style.margin = "1rem 1rem 0rem 1rem";
        setMarginBottom(xSmall, small, medium);
        writtenEducationText(divText)
        showIntro = false;
        showEdu = true;
        showWork = false;
        showStrength = false;
        showHobbies = false;
    }
}

function showWorkMobile(){
    changeArrowIcon("workArrow");

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


function setMarginBottom(xSmall, small, medium){
    let screenSize = window.innerWidth;
    
        if(screenSize <= 450){
            mainInfoContainer.style.marginBottom = xSmall;
            console.log("xsmall")
        }
        else if(screenSize <= 600){
            mainInfoContainer.style.marginBottom = small;
            console.log("small")
        }
        else{
            mainInfoContainer.style.marginBottom = medium;
            console.log("medium")
        }
    }

function showStrengthsMobile(){
    changeArrowIcon("strengthsArrow");

    if(showStrength){

        removeInfoText(divStrength);
        mainInfoContainer.style.margin = "1rem";
        showStrength = false;
    }

    else{
        createInfoText('strengthsMobile' , 'divStrength');
        divText.setAttribute("id", "divStrength");
        mainInfoContainer.style.margin = "1rem 1rem 30rem 1rem";
        writtenStrengthsText(divText)
        
        showIntro = false;
        showEdu = false;
        showWork = false;
        showStrength = true;
        showHobbies = false;
    }
}

function showHobbiesMobile(){
    changeArrowIcon("hobbiesArrow");

    if(showHobbies){

        removeInfoText(divHobbies);
        mainInfoContainer.style.margin = "1rem";
        showHobbies = false;
    }

    else{
        createInfoText('hobbiesMobile' , 'divHobbies');
        divText.setAttribute("id", "divHobbies");
       
        writtenHobbiesText(divText);
        
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

