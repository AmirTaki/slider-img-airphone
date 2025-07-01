let nextButton = document.getElementById("next")
let prevButton = document.getElementById('prev')
let carousel = document.querySelector(".carousel")
let listHTML = document.querySelector('.carousel .list')
let seeMoreButtons = document.querySelectorAll('seeMore')
let backButton = document.getElementById("back")

nextButton.addEventListener('click' , (e)=> {
    showSlider('next')
})
prevButton.addEventListener('click' , (e)=> {
    showSlider('back')
})

const showSlider = (type) => {
    let items = document.querySelectorAll(".item")
    if(type == "next"){
        listHTML.appendChild(items[0])
        carousel.classList.add('next')
    }
    else {
        listHTML.prepend(items[items.length - 1])
        carousel.classList.add('prev')
    }
}