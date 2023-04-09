const body = document.body
const slides1 = document.querySelectorAll('.slide1')
const leftBtn11 = document.getElementById('button11')
const rightBtn12 = document.getElementById('button12')
const slides2 = document.querySelectorAll('.slide2')
const leftBtn21 = document.getElementById('button21')
const rightBtn22 = document.getElementById('button22')
const slides3 = document.querySelectorAll('.slide3')
const leftBtn31 = document.getElementById('button31')
const rightBtn32 = document.getElementById('button32')
const slides4 = document.querySelectorAll('.slide4')
const leftBtn41 = document.getElementById('button41')
const rightBtn42 = document.getElementById('button42')

// Photo1
let activeSlide1 = 0

leftBtn11.addEventListener('click', () => {
    activeSlide1--
  
    if (activeSlide1 < 0) {
      activeSlide1 = slides1.length - 1
    }
  
    setBgToBody1()
    setActiveSlide1()
})

rightBtn12.addEventListener('click', () => {
    activeSlide1++

    if (activeSlide1 > slides1.length - 1) {
        activeSlide1 = 0
    }

    setBgToBody1()
    setActiveSlide1()
})

function setBgToBody1() {
    body.style.backgroundImage = slides1[activeSlide1].style.backgroundImage
  }
  
  function setActiveSlide1() {
    slides1.forEach((slide1) => slide1.classList.remove('active'))
  
    slides1[activeSlide1].classList.add('active')
  }

// Photo2
let activeSlide2 = 0

leftBtn21.addEventListener('click', () => {
    activeSlide2--
  
    if (activeSlide2 < 0) {
      activeSlide2 = slides2.length - 1
    }
  
    setBgToBody2()
    setActiveSlide2()
})

rightBtn22.addEventListener('click', () => {
    activeSlide2++

    if (activeSlide2 > slides2.length - 1) {
        activeSlide2 = 0
    }

    setBgToBody2()
    setActiveSlide2()
})

function setBgToBody2() {
    body.style.backgroundImage = slides2[activeSlide2].style.backgroundImage
}
  
function setActiveSlide2() {
slides2.forEach((slide2) => slide2.classList.remove('active'))

slides2[activeSlide2].classList.add('active')
}

// Photo3
let activeSlide3 = 0

leftBtn31.addEventListener('click', () => {
    activeSlide3--
  
    if (activeSlide3 < 0) {
      activeSlide3 = slides3.length - 1
    }
  
    setBgToBody3()
    setActiveSlide3()
})

rightBtn32.addEventListener('click', () => {
    activeSlide3++

    if (activeSlide3 > slides3.length - 1) {
        activeSlide3 = 0
    }

    setBgToBody3()
    setActiveSlide3()
})

function setBgToBody3() {
    body.style.backgroundImage = slides3[activeSlide3].style.backgroundImage
}
  
function setActiveSlide3() {
slides3.forEach((slide3) => slide3.classList.remove('active'))

slides3[activeSlide3].classList.add('active')
}

// Photo4
let activeSlide4 = 0

leftBtn41.addEventListener('click', () => {
    activeSlide4--
  
    if (activeSlide4 < 0) {
      activeSlide4 = slides4.length - 1
    }
  
    setBgToBody4()
    setActiveSlide4()
})

rightBtn42.addEventListener('click', () => {
    activeSlide4++

    if (activeSlide4 > slides4.length - 1) {
        activeSlide4 = 0
    }

    setBgToBody4()
    setActiveSlide4()
})

function setBgToBody4() {
    body.style.backgroundImage = slides4[activeSlide4].style.backgroundImage
}
  
function setActiveSlide4() {
slides4.forEach((slide4) => slide4.classList.remove('active'))

slides4[activeSlide4].classList.add('active')
}


// setBgToBody()
