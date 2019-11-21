
/**
 * Function for slider
 */
/**
 * TOMORROW: Try to put both desktop and mobile hero images in the same div and give the div a class that you tigh to the hidden-class
 * Then the mediaquiery should do the rest?
 * 
 * IT WORKED! Now I can tidy the rest
 */
function startSlider(){
    setInterval(sliderImage, 6000);
    sliderImage();
    /*
    let w = window.innerWidth || document.documentElement.clientWidth;
    //window.addEventListener('resize',startSliderDesktop);
    if( w <= 800){
        setInterval(sliderImageMobile, 6000);
        sliderImageMobile();
    }
    else{
        setInterval(sliderImageDesktop, 6000);
        sliderImageDesktop();
    }
    */
}

function sliderImage(){
    changeSliderObject(document.querySelectorAll('.heroImageSlider div'), currentIndex);
    changeSliderObject(document.querySelectorAll('.headlineSlider h4'), currentIndex);
    currentIndex = (currentIndex + 1) % 3;
}

function changeSliderObject(sliderObjects, currentIndex) {
    sliderObjects[currentIndex].classList.add('hidden');
    currentIndex = (currentIndex + 1) % sliderObjects.length;
    sliderObjects[currentIndex].classList.remove('hidden');
}

/*
function sliderImageMobile(){
    changeSliderObject(document.querySelectorAll('.mobileSlider img'), currentIndex);
    changeSliderObject(document.querySelectorAll('.headlineSlider h4'), currentIndex);
    currentIndex = (currentIndex + 1) % 3;
}


function changeSliderObject(sliderObjects, currentIndex) {
    sliderObjects[currentIndex].classList.add('hidden');
    currentIndex = (currentIndex + 1) % sliderObjects.length;
    sliderObjects[currentIndex].classList.remove('hidden');
}
*/
