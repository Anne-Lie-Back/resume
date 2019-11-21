/****
 * You can find the text strings for the writtenInfo-parameters in the top of the introductionMenu.js
 * 
 * 
 */

/**
 * @type {Boolean} showIntro - false if showIntro is not showing
 */
let showIntro = false;

/**
 * @type {Boolean} showEdu - false if showEdu is not showing
 */
let showEdu = false;

/**
 * @type {Boolean} showWork - false if showWork is not showing
 */
let showWork = false;

/**
 * @type {Boolean} showStrength - false if showStrength is not showing
 */
let showStrength = false;

/**
 * @type {Boolean} showHobbies - false if showHobbies is not showing
 */
let showHobbies = false;

/**
 * Checks all the up/down arrows in the small introductionMenu
 */
function changeArrowIcon(){
    changeArrowIconIntro();
    changeArrowIconEducation();
    changeArrowIconWork();
    changeArrowIconStrengths();
    changeArrowIconHobbies();
}

/**
 * Changes the first introduction-menu-arrow if needed
 */
function changeArrowIconIntro(){
    if(!showIntro){
      document.getElementById("introductionArrow").className = "fas fa-angle-down";
    }else{
      document.getElementById("introductionArrow").className = "fas fa-angle-up";
    }
}

/**
 * Changes the education-menu-arrow if needed
 */
function changeArrowIconEducation(){
    if(!showEdu){
      document.getElementById("educationArrow").className = "fas fa-angle-down";
    }else{
      document.getElementById("educationArrow").className = "fas fa-angle-up";
    }
}

/**
 * Changes the work-menu-arrow if needed
 */
function changeArrowIconWork(){
    if(!showWork){
      document.getElementById("workArrow").className = "fas fa-angle-down";
    }else{
      document.getElementById("workArrow").className = "fas fa-angle-up";
    }
}

/**
 * Changes the strengths-menu-arrow if needed
 */
function changeArrowIconStrengths(){
    if(!showStrength){
      document.getElementById("strengthsArrow").className = "fas fa-angle-down";
    }else{
      document.getElementById("strengthsArrow").className = "fas fa-angle-up";
    }
}

/**
 * Changes the hobbies-menu-arrow if needed
 */
function changeArrowIconHobbies(){
    if(!showHobbies){
      document.getElementById("hobbiesArrow").className = "fas fa-angle-down";
    }else{
      document.getElementById("hobbiesArrow").className = "fas fa-angle-up";
    }
}

/**
 * Handles what happens when introduction-tab in small-screen mode is clicked depending on if the text-div is visible(true) or not
 */
function showIntroductionMobile(){ 

    if(showIntro){
        removeInfoText(divIntro);
        mainInfoContainer.style.margin = "1rem";
        showIntro = false;
        changeArrowIcon();  
    }

    else{
        const xSmall = "52rem"
        const small =  "33rem"
        const medium = "25rem"
        mainInfoContainer.style.margin = "1rem 1rem 30rem 1rem";
        setMarginBottom(xSmall, small, medium);

        createInfoText('introductionMobile' , 'divIntro');
        writtenIntroText(divText);
        
        showIntro = true;
        showEdu = false;
        showWork = false;
        showStrength = false;
        showHobbies = false;
        changeArrowIcon();
    }   
}

/**
 * Handles what happens when education-tab in small-screen mode is clicked depending on if the text-div is visible(true) or not
 */
function showEducationMobile(){

    if(showEdu){
        removeInfoText(divEdu)
        mainInfoContainer.style.margin = "1rem";
        showEdu = false;
        changeArrowIcon();
    }

    else{
        const xSmall = "45rem"
        const small =  "29rem"
        const medium = "27rem"
        mainInfoContainer.style.margin = "1rem 1rem 0rem 1rem";
        setMarginBottom(xSmall, small, medium);
        
        createInfoText('educationMobile', 'divEdu');
        writtenEducationText(divText)

        showIntro = false;
        showEdu = true;
        showWork = false;
        showStrength = false;
        showHobbies = false;
        changeArrowIcon();
    }
}

/**
 * Handles what happens when work-tab in small-screen mode is clicked depending on if the text-div is visible(true) or not
 */
function showWorkMobile(){

    if(showWork){
        removeInfoText(divWork);
        mainInfoContainer.style.margin = "1rem";
        showWork = false;
        changeArrowIcon();
    }

    else{
        const xSmall = "55rem"
        const small =  "39rem"
        const medium = "27rem"
        mainInfoContainer.style.margin = "1rem 1rem 30rem 1rem";
        setMarginBottom(xSmall, small, medium);

        createInfoText('workMobile' , 'divWork');
        divText.setAttribute("id", "divWork");
        writtenWorkText(divText);
        
        showIntro = false;
        showEdu = false;
        showWork = true;
        showStrength = false;
        showHobbies = false;
        changeArrowIcon();
    }
}

/**
 * Handles what happens when strengths-tab in small-screen mode is clicked depending on if the text-div is visible(true) or not
 */
function showStrengthsMobile(){
    changeArrowIcon("strengthsArrow");

    if(showStrength){
        removeInfoText(divStrength);
        mainInfoContainer.style.margin = "1rem";
        showStrength = false;
        changeArrowIcon();
    }

    else{
        const xSmall = "36rem"
        const small =  "33rem"
        const medium = "29rem"
        mainInfoContainer.style.margin = "1rem 1rem 30rem 1rem";
        setMarginBottom(xSmall, small, medium);

        createInfoText('strengthsMobile' , 'divStrength');
        divText.setAttribute("id", "divStrength");
        writtenStrengthsText(divText)
        
        showIntro = false;
        showEdu = false;
        showWork = false;
        showStrength = true;
        showHobbies = false;
        changeArrowIcon();
    }
}

/**
 * Handles what happens when hobbies-tab in small-screen mode is clicked depending on if the text-div is visible(true) or not
 */
function showHobbiesMobile(){
    changeArrowIcon("hobbiesArrow");

    if(showHobbies){
        removeInfoText(divHobbies);
        mainInfoContainer.style.margin = "1rem";
        showHobbies = false;
        changeArrowIcon();
    }

    else{
        const xSmall = "42rem"
        const small =  "30rem"
        const medium = "27rem"
        mainInfoContainer.style.margin = "1rem 1rem 30rem 1rem";
        setMarginBottom(xSmall, small, medium);
        
        writtenHobbiesText(divText);
        createInfoText('hobbiesMobile' , 'divHobbies');
        divText.setAttribute("id", "divHobbies");
   
        showIntro = false;
        showEdu = false;
        showWork = false;
        showStrength = false;
        showHobbies = true;
        changeArrowIcon();
    }
}

/**
 * @type {HTMLElement} divText - creates div and sets style
 */
const divText = document.createElement('div');
divText.style.backgroundColor = 'white';
divText.style.width = '90%';
divText.style.padding = '2rem 2rem';
divText.style.margin = '0 2rem 2rem 2rem';
divText.style.boxShadow = '0 0 10px grey';
divText.style.borderRadius = '0.2rem';
divText.style.lineHeight = '2rem';

/**
 * Creates information-text in selected tab/div (introduction, education, work, strengths, hobbies)
 * @param {HTMLElement} tab - which info -tab was clicked
 * @param {HTMLElement} selectedDiv - which text-element should be displayed
 */
function createInfoText(tab, selectedDiv){
    divText.setAttribute("id", selectedDiv);
    document.getElementById(tab).append(divText);   
}

/**
 * Removes text-element.
 * @param {*} removeText - The text-element that needs to be removed
 */
function removeInfoText(removeText){
    removeText.parentNode.removeChild(removeText);
}

/**
 * Sets witch style to apply to mainInfoContainer-element depending on window-size.
 * @param {String} xSmall - the desired extra small-screen mesurements for styling
 * @param {String} small - the desired small-screen mesuerements for styling
 * @param {String} medium - the desired medium-screen mesurements for styling
 */

function setMarginBottom(xSmall, small, medium){

    /**
     * @type {HTMLElement} screenSize - the windows current inner width
     */
    let screenSize = window.innerWidth;
    
        if(screenSize <= 450){
            mainInfoContainer.style.marginBottom = xSmall;
        }
        else if(screenSize <= 600){
            mainInfoContainer.style.marginBottom = small;
        }
        else{
            mainInfoContainer.style.marginBottom = medium;
        }
}
