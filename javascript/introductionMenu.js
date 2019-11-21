

/**
 * Writes out the string for the introduction-text.
 * @param {HTMLElement} source - recieves if the text is for displaying in large info-container or small.
 */

function writtenIntroText(source){
    source.innerHTML = '<p> Webbplatser tar mer och större plats i människans vardag för var år som tickar på. '
    + 'Webben är en kommunikationstung plats där det sker en anna typ av socialisering än i den vanliga världen, men likväl en '
    + 'typ av socialisering. <br><br> Med min kunskap inom socialpsykologi och människans beteende kombinerat med de kunskaper jag börjat'
    + ' förvärva inom frontend development tror jag att jag kan vara ett ovärderligt tillskott för den organisation som väljer'
    + ' att ta mig till sig. <br><br> Jag har ett stort intresse för varför människan gör de valen de gör på webben och vill fortsätta utvecklas '
    + 'inom det området för att kunna utveckla så trevliga användarupplevelser som möjligt, och samtidigt göra utvecklingsprocessen så '
    + 'trevlig som möjlig för alla inblandade i processen. </p>';
}

/**
 * Writes out the string for the education-text.
 * @param {HTMLElement} source - recieves if the text is for displaying in large education-container or small.
 */
function writtenEducationText(source){
    source.innerHTML = '<p> <b> HT 2001 - VT 2004 </b> läste jag <b> Media - inriktning rörlig bild och ljud</b> på <b>Västerhöjdsgymnasiet </b> '
    + 'i Skövde. Redan då lades grunden för mina kunskaper kring färglära, bildkomposition och mediekommunikation. </p>'
    + ' <br> <p> Efter några års jobb började jag <b> 2010 </b> studera <b> Personal, organisation och ledarskapsprogrammet</b> på '
    + '<b>Högskolan i Skövde</b>. <br>'
    + 'Detta resulterade <b>2013</b> i en filosofie kandidatexamen i Socialpsykologi och en gedigen kunskap kring beteendevetenskap, '
    + 'grupp-psykologi och kommunikationsmetodik.</p>'
    + '<br> <p>Sedan <b>hösten 2019</b> är jag studerande på <b>yrkeshögskolan Medieinstitutet</b> i <b> Göteborg </b>. Här lär jag mig framför '
    + 'allt <b> HTML, CSS & Javascript</b>.</p>'
}

/**
 * Writes out the string for the work-text.
 * @param {HTMLElement} source - recieves if the text is for displaying in large work-container or small.
 */
function writtenWorkText(source){
    source.innerHTML = '<p> Direkt efter gymnasiet, <b>hösten 2004</b>, fick jag jobb på <b> McDonalds</b> i Skövde. Snabbt avancerade jag till handledare och fick då i uppdrag att utbilda de anställda inom kvalitét och service. Jag fick även hjälpa till med att utbilda och stötta de nya arbetsledarna i sin nya roll. 2010-2013 var jag tjänsteledig för studier och <b> sommaren 2015 </b> stämplade jag ut från McDonalds för gott. </p>'
    + '<br><p><b>Hösten 2015</b> klev jag in på <b>Norrmalmskolan</b> i Skövde för att påbörja min roll som <b>fritidspedagog</b>. Jag jobbade med barn i både låg och mellanstadiet. Min pedagogikfilosofi var att "Det är okej att inte vara som alla andra, så länge man är snäll". Mitt mål var att försöka hitta barnens speciallintressen och hjälpa dem att utvecklas inom dessa intressen. Barnen kom ofta till mig när de kände att de ville prata med en vuxen och jag hoppas våra samtal var lika givande för dem som de var för mig.' 
    + ' <b> Sommaren 2019</b> sa jag "hej då" till barnen och styrde min kos mot Göteborg. </p>';
}

/**
 * Writes out the string for the strength-text.
 * @param {HTMLElement} source - recieves if the text is for displaying in large strength-container or small.
 */
function writtenStrengthsText(source){
    source.innerHTML = '<p><ul><li>Jag har ett <b>bra öga för både helhet och detaljer</b>.</li>' 
    + '<li>Jag är duktig på att <b>utveckla idéer</b> och se både möjligheter och eventuell problematik.</li>'
    + '<li>Jag har <b>stor förståelse för det mänskliga beteendet</b> och är en <b> engagerad, noggrann kommunikatör </b>, vilket är en stor fördel för att undvika onödiga missförstånd.</li>'
    + '<li>I vad jag ger mig in i försöker jag att alltid slipa på min teknik och sträva efter en <b>hög lägstanivå</b>. </li>'
    + '<li>Jag är <b>ödmjuk</b> inför det faktum att jag har mycket mer att lära.</li></ul></p>';

}

/**
 * Writes out the string for the hobbies-text.
 * @param {HTMLElement} source - recieves if the text is for displaying in large hobbies-container or small.
 */
function writtenHobbiesText(source){
    source.innerHTML = '<p> När jag inte studerar eller gör andra måsten gillar jag att ägna min tid med att <b> spela </b>, både brädspel och data/tv-spel.'
    + ' Mycket Nintendo blir det, och spelar jag något på daton blir det oftast Dota 2, något historiedrivet spel eller peka klicka-äventyr. '
    + 'Jag älskar även <b>film, serier och anime</b>. <br> <br> Intressen som inte involverar en skärm innefattar <b>matlagning</b>, gärna med asiatiska influenser, '
    +'och att <b>pyssla</b>. Mestadels blir det pärlplattetavlor som får bli offer för min inspiration. <br> Jag uppskattar även långa promenader i '
    + '<b>fina omgivningar</b> med hunden, <b>yoga</b> och <b>dans</b>. <br><br> Gillar ni <b>quiz</b> är jag tjejen för er. Jag kan lite om mycket och är extra kunnig'
    + ' innom musik och populärkultursfrågor.</p>';
}


/**
 * MAIN TEXTBOX FUNCTIONS!
 */

 /**
  * Sets the color for the textbox and updates text for introduction.
  */
function changeToIntroduction(){
    textBox.className = 'yellow';
    writtenIntroText(text);
}

 /**
  * Sets the color for the textbox and updates text for education.
  */
function changeToEducation(){
    textBox.className = 'lavender';
    writtenEducationText(text)
    
}

 /**
  * Sets the color for the textbox and updates text for work.
  */
function changeToWork(){
    textBox.className = 'grey';
    writtenWorkText(text);
}

 /**
  * Sets the color for the textbox and updates text for strength.
  */
function changeToStrengths(){
    textBox.className = 'green';
    writtenStrengthsText(text)
}

 /**
  * Sets the color for the textbox and updates text for hobbies.
  */
function changeToHobbies(){
    textBox.className = 'blue';
    writtenHobbiesText(text)
}


