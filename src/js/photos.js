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
const slides5 = document.querySelectorAll('.slide5')
const leftBtn51 = document.getElementById('button51')
const rightBtn52 = document.getElementById('button52')
const slides6 = document.querySelectorAll('.slide6')
const leftBtn61 = document.getElementById('button61')
const rightBtn62 = document.getElementById('button62')
const slides7 = document.querySelectorAll('.slide7')
const leftBtn71 = document.getElementById('button71')
const rightBtn72 = document.getElementById('button72')
const slides8 = document.querySelectorAll('.slide8')
const leftBtn81 = document.getElementById('button81')
const rightBtn82 = document.getElementById('button82')

function makeItFullscreen(){
    document.getElementById("img").classList.add('fullscreen');
}

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

// Photo5
let activeSlide5 = 0

leftBtn51.addEventListener('click', () => {
    activeSlide5--
  
    if (activeSlide5 < 0) {
      activeSlide5 = slides5.length - 1
    }
  
    setBgToBody5()
    setActiveSlide5()
})

rightBtn52.addEventListener('click', () => {
    activeSlide5++

    if (activeSlide5 > slides5.length - 1) {
        activeSlide5 = 0
    }

    setBgToBody5()
    setActiveSlide5()
})

function setBgToBody5() {
    body.style.backgroundImage = slides5[activeSlide5].style.backgroundImage
}
  
function setActiveSlide5() {
slides5.forEach((slide5) => slide5.classList.remove('active'))

slides5[activeSlide5].classList.add('active')
}

// Photo6
let activeSlide6 = 0

leftBtn61.addEventListener('click', () => {
    activeSlide6--
  
    if (activeSlide6 < 0) {
      activeSlide6 = slides6.length - 1
    }
  
    setBgToBody6()
    setActiveSlide6()
})

rightBtn62.addEventListener('click', () => {
    activeSlide6++

    if (activeSlide6 > slides6.length - 1) {
        activeSlide6 = 0
    }

    setBgToBody6()
    setActiveSlide6()
})

function setBgToBody6() {
    body.style.backgroundImage = slides6[activeSlide6].style.backgroundImage
}
  
function setActiveSlide6() {
slides6.forEach((slide6) => slide6.classList.remove('active'))

slides6[activeSlide6].classList.add('active')
}

// Photo7
let activeSlide7 = 0

leftBtn71.addEventListener('click', () => {
    activeSlide7--
  
    if (activeSlide7 < 0) {
      activeSlide7 = slides7.length - 1
    }
  
    setBgToBody7()
    setActiveSlide7()
})

rightBtn72.addEventListener('click', () => {
    activeSlide7++

    if (activeSlide7 > slides7.length - 1) {
        activeSlide7 = 0
    }

    setBgToBody7()
    setActiveSlide7()
})

function setBgToBody7() {
    body.style.backgroundImage = slides7[activeSlide7].style.backgroundImage
}
  
function setActiveSlide7() {
slides7.forEach((slide7) => slide7.classList.remove('active'))

slides7[activeSlide7].classList.add('active')
}

// Photo8
let activeSlide8 = 0

leftBtn81.addEventListener('click', () => {
    activeSlide8--
  
    if (activeSlide8 < 0) {
      activeSlide8 = slides8.length - 1
    }
  
    setBgToBody8()
    setActiveSlide8()
})

rightBtn82.addEventListener('click', () => {
    activeSlide8++

    if (activeSlide8 > slides8.length - 1) {
        activeSlide8 = 0
    }

    setBgToBody8()
    setActiveSlide8()
})

function setBgToBody8() {
    body.style.backgroundImage = slides8[activeSlide8].style.backgroundImage
}
  
function setActiveSlide8() {
slides8.forEach((slide8) => slide8.classList.remove('active'))

slides8[activeSlide8].classList.add('active')
}

// setBgToBody()
