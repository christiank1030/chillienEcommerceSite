

// size function

const sizeButton = document.querySelectorAll('.sizeButton')
let checkedButton = 0

    sizeButton.forEach((item, i) => {
        item.addEventListener('click', () => {
            sizeButton[checkedButton].classList.remove('Checked');
            item.classList.add('Checked');
            checkedButton = i;
        })
    })

// opening full product details -- LEFT OFF HERE

let productImg = document.querySelectorAll('.productImg')

let displayImg = document.querySelector('.fullImg')


let fullDetails = (item) => {
    item.addEventListener("click", () => {
        if(item.src = './images/smileyFace1.jpeg') {
            displayImg.innerHTML = `<img class="fullImg" src="./images/smileyFace1.jpeg" alt="">`
        } else if (item.src = './images/smileyFace2.jpeg') {
            displayImg.innerHTML = `<img class="fullImg" src="./images/smileyFace2.jpeg" alt="">`
        }
    })
}

productImgs.forEach(fullDetails())


// image gallery 


const wholeProductPage = document.querySelector('.wholeProductPage')


const productSlide1 = document.getElementById('productSlide1')
const productSlide2 = document.getElementById('productSlide2')
const productSlide3 = document.getElementById('productSlide3')
const productSlide4 = document.getElementById('productSlide4')


displayImg.addEventListener('click', () => {
    wholeProductPage.innerHTML = `<div class="fullScreenContainer">
    <button class="xButton">X</button> 
    <img class="fullScreenImage" src="./images/smileyFace1.jpeg" alt="">
    </div>`
let xButton = document.querySelector('.xButton')
xButton.addEventListener('click', () => {
location.reload()
})
})

productSlide1.addEventListener('click', () => {
    displayImg.src = "./images/smileyFace1.jpeg"
    displayImg.addEventListener('click', () => {
        wholeProductPage.innerHTML = `<div class="fullScreenContainer">
        <button class="xButton">X</button> 
        <img class="fullScreenImage" src="./images/smileyFace1.jpeg" alt="">
        </div>`
    let xButton = document.querySelector('.xButton')
    xButton.addEventListener('click', () => {
    location.reload()
    })
    })
})

productSlide2.addEventListener('click', () => {
    displayImg.src = "./images/smileyFace2.jpeg"
    displayImg.addEventListener('click', () => {
        wholeProductPage.innerHTML = `<div class="fullScreenContainer">
        <button class="xButton">X</button> 
        <img class="fullScreenImage" src="./images/smileyFace2.jpeg" alt="">
        </div>`
    let xButton = document.querySelector('.xButton')
    xButton.addEventListener('click', () => {
    location.reload()
    })
    })
})

productSlide3.addEventListener('click', () => {
    displayImg.src = "./images/smileyFace3.jpeg"
    displayImg.addEventListener('click', () => {
        wholeProductPage.innerHTML = `<div class="fullScreenContainer">
        <button class="xButton">X</button> 
        <img class="fullScreenImage" src="./images/smileyFace3.jpeg" alt="">
        </div>`
    let xButton = document.querySelector('.xButton')
    xButton.addEventListener('click', () => {
    location.reload()
    })
    })
})

productSlide4.addEventListener('click', () => {
    displayImg.src = "./images/smileyFace4.jpeg"
    displayImg.addEventListener('click', () => {
        wholeProductPage.innerHTML = `<div class="fullScreenContainer">
        <button class="xButton">X</button> 
        <img class="fullScreenImage" src="./images/smileyFace4.jpeg" alt="">
        </div>`
    let xButton = document.querySelector('.xButton')
    xButton.addEventListener('click', () => {
    location.reload()
    })
    })
})