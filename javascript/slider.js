
function startSliderDesktop(){
    let w = window.innerWidth
    if( w <= 800){
        setInterval(sliderImageMobile, 6000);
    }
    else{
        setInterval(sliderImageDesktop, 6000);
    }
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
