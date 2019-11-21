
/**
 * Starts slider and sets time-interval
 */

function startSlider(){
    setInterval(sliderImage, 6000);
    sliderImage();
}

/**
 * Calls changeSliderObject for both hero Image and headline
 */
function sliderImage(){
    changeSliderObject(document.querySelectorAll('.heroImageSlider div'), currentIndex);
    changeSliderObject(document.querySelectorAll('.headlineSlider h4'), currentIndex);
    currentIndex = (currentIndex + 1) % 3;
}

/**
 * 
 * @param {HTMLElement} sliderObjects - elements to change between
 * @param {HTMLELement} currentIndex - current index of slider-items
 */
function changeSliderObject(sliderObjects, currentIndex) {
    sliderObjects[currentIndex].classList.add('hidden');
    currentIndex = (currentIndex + 1) % sliderObjects.length;
    sliderObjects[currentIndex].classList.remove('hidden');
}