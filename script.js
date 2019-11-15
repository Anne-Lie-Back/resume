window.onload = startSliderDesktop
let currentIndex = 0


function startSliderDesktop(){
    setInterval(sliderImageDesktop, 4000)
}

function sliderImageDesktop(){
    changeSliderObject(document.querySelectorAll('.desktopSlider img'), currentIndex)
    changeSliderObject(document.querySelectorAll('.headlineSlider h4'), currentIndex)
    currentIndex = (currentIndex + 1) % 3
}

function changeSliderObject(sliderObjects, currentIndex) {
    sliderObjects[currentIndex].classList.add('hidden')
    currentIndex = (currentIndex + 1) % sliderObjects.length
    sliderObjects[currentIndex].classList.remove('hidden')
}

/**
 * trying to fix eventlisteners
 */
const introduction = document.getElementsByClassName('introduction')
let educationTab = document.querySelector(".education")

educationTab.addEventListener('click', changeToEducation())

function changeToEducation(){

    console.log('education is important')
}
