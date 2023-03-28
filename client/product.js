// opening full product details -- LEFT OFF HERE
const body = document.querySelector('body')

const productImg = document.querySelectorAll('.productImg')
// putting the src of each product image into an array
const productImgs = [productImg[0].src, productImg[1].src]

const productTitle = document.querySelectorAll('.productTitle')
const productTitles = [productTitle[0].textContent, productTitle[1].textContent]

const productPrice = document.querySelectorAll('.productPrice')
const productPrices = [productPrice[0].textContent, productPrice[1].textContent]

const productNames = ['smileyFace', 'original']


const Product = {
    productName: productNames,
    productImg: productImgs,
    productTitle: productTitles,
    price: productPrices
}

const sendData = (path, data) => {
    fetch(path, {
        method: 'post',
        headers: new Headers({'Content-Type': 'application/json'}),
        body: JSON.stringify(data)
    }).then((res) => res.json())
    .then(response => {
        processData(response)
    })
}

const processData = (data) => {
    if(data.fullName) {
        console.log(data)
        data.authToken = createToken(data.email)
        sessionStorage.user = JSON.stringify(data)
    }
}


const htmlContainer = document.createElement('div')
htmlContainer.id = 'htmlContainer'
document.body.appendChild(htmlContainer)

for(let i = 0; i < productImg.length; i++) {
    productImg[i].addEventListener('click', () => {
        body.innerHTML = `        <!-- nav bar -->
        <div class="navBar">
            <img class="navBarLogo" src="./images/chillien-name.png" alt="">
            <a class="navLink" id="homeLink" href="./index.html">Home</a>
            <a class="navLink" id="shirtLink" href="./product.html">Shirts</a>
            <a class="navLink" id="aboutLink" href="">About</a>
            <a class="navLink" id="contactLink" href="">Contact</a>
            <input class="searchBar" type="text">
            <button class="searchButton">Search</button>
            <a class="navLink" id="loginLink" href="./login.html">Login</a>
        </div>

        <!-- product page -->
        <div class="wholeProductPage">
        <div class="pathContainer">
            <a class="productPath" href="product.html">Shirts</a>
            <h1 class="productPath">></h1>
            <h1 class="productPath" id="pathTitle">${productTitles[i]}</h1>
        </div>

        <div class="productFull">

            <div class="picAndPrice">
                <img class="fullImg" src=${productImgs[i]} alt="">
                <div>
                    <h1 class="fullProductTitle">${productTitles[i]}</h1>

                    <hr size="1" width="100%" color="white">

                    <p class="productPrice2">${productPrices[i]}</p>

                    <input type="radio" name="size" value="s" checked hidden id="smallSize">
                    <label for="smallSize" class="sizeButton Checked">S</label>
                    <input type="radio" name="size" value="m" hidden id="mediumSize">
                    <label for="mediumSize" class="sizeButton">M</label>
                    <input type="radio" name="size" value="l" hidden id="largeSize">
                    <label for="largeSize" class="sizeButton">L</label>
                    <input type="radio" name="size" value="xl" hidden id="xlSize">
                    <label for="xlSize" class="sizeButton">XL</label>
                    <input type="radio" name="size" value="2xl" hidden id="2xlSize">
                    <label for="2xlSize" class="sizeButton">2XL</label>
                    
                    <div class="addCartSection">
                        <input class="quantityInput" type="number" value="1">
                        <button class="cartButton">Add to Cart</button>
                    </div>  
                </div>
            </div>

            <img class="productSlide" id="productSlide1" src="./images/${productNames[i]}${[i]}.jpeg" alt="">
            <img class="productSlide" id="productSlide2" src="./images/${productNames[i]}${[i+1]}.jpeg" alt="">
            <img class="productSlide" id="productSlide3" src="./images/${productNames[i]}${[i+2]}.jpeg" alt="">
            <img class="productSlide" id="productSlide4" src="./images/${productNames[i]}${[i+3]}.jpeg" alt="">
        </div>
        </div>

        <script src="product.js"></script>`

        // add to cart functionality 
        const cartButton = document.querySelector('.cartButton')
        const productName = document.querySelector('.fullProductTitle')
        const productPrice = document.querySelector('.productPrice2')
        const size = document.querySelectorAll('.sizeButton')
        const quantity = document.querySelector('.quantityInput')
        let user = JSON.parse(sessionStorage.user)
        console.log(user.email)

    
        const addToCart = () => {
                const data = {
                    email: user.email,
                    productName: productName.textContent,
                    productPrice: productPrice.textContent,
                    size: document.querySelector('.sizeButton.Checked').textContent,
                    quantity: quantity.value
                }
                console.log(data)
                console.log(quantity)

                sendData('/cart', data)
            }
    
        cartButton.addEventListener('click', addToCart)

    // image gallery
    const productFunction = () => {
        setTimeout(function() {
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

        const displayImg = document.querySelector('.fullImg')
            
        const wholeProductPage = document.querySelector('.wholeProductPage')
            
            
        const productSlide1 = document.getElementById('productSlide1')
        const productSlide2 = document.getElementById('productSlide2')
        const productSlide3 = document.getElementById('productSlide3')
        const productSlide4 = document.getElementById('productSlide4')
        
        const originalHTML = `        <!-- nav bar -->
            <div class="navBar">
                <img class="navBarLogo" src="./images/chillien-name.png" alt="">
                <a class="navLink" id="homeLink" href="./index.html">Home</a>
                <a class="navLink" id="shirtLink" href="./product.html">Shirts</a>
                <a class="navLink" id="aboutLink" href="">About</a>
                <a class="navLink" id="contactLink" href="">Contact</a>
                <input class="searchBar" type="text">
                <button class="searchButton">Search</button>
                <a class="navLink" id="loginLink" href="./login.html">Login</a>
            </div>
        
            <!-- product page -->
            <div class="wholeProductPage">
            <div class="pathContainer">
                <a class="productPath" href="product.html">Shirts</a>
                <h1 class="productPath">></h1>
                <h1 class="productPath" id="pathTitle">${productTitles[i]}</h1>
            </div>
        
            <div class="productFull">
        
                <div class="picAndPrice">
                    <img class="fullImg" src=${productImgs[i]} alt="">
                    <div>
                        <h1 class="fullProductTitle">${productTitles[i]}</h1>
        
                        <hr size="1" width="100%" color="white">
        
                        <p class="productPrice2">${productPrices[i]}</p>
        
                        <input type="radio" name="size" value="s" checked hidden id="smallSize">
                        <label for="smallSize" class="sizeButton Checked">S</label>
                        <input type="radio" name="size" value="m" hidden id="mediumSize">
                        <label for="mediumSize" class="sizeButton">M</label>
                        <input type="radio" name="size" value="l" hidden id="largeSize">
                        <label for="largeSize" class="sizeButton">L</label>
                        <input type="radio" name="size" value="xl" hidden id="xlSize">
                        <label for="xlSize" class="sizeButton">XL</label>
                        <input type="radio" name="size" value="2xl" hidden id="2xlSize">
                        <label for="2xlSize" class="sizeButton">2XL</label>
                        
                        <div class="addCartSection">
                            <input class="quantityInput" type="number" placeholder="1">
                            <button class="cartButton">Add to Cart</button>
                        </div>  
                    </div>
                </div>
        
                <img class="productSlide" id="productSlide1" src="./images/${productNames[i]}${[i]}.jpeg" alt="">
                <img class="productSlide" id="productSlide2" src="./images/${productNames[i]}${[i+1]}.jpeg" alt="">
                <img class="productSlide" id="productSlide3" src="./images/${productNames[i]}${[i+2]}.jpeg" alt="">
                <img class="productSlide" id="productSlide4" src="./images/${productNames[i]}${[i+3]}.jpeg" alt="">
            </div>
            </div>
        
        <script src="product.js"></script>`
            
            
            displayImg.addEventListener('click', () => {
                displaySrc = document.querySelector('.fullImg').src
                console.log(displaySrc)
                wholeProductPage.innerHTML = `<div class="fullScreenContainer">
                <button class="xButton">X</button> 
                <img class="fullScreenImage" src=${displayImg.src} alt="">
                </div>`
            let xButton = document.querySelector('.xButton')
            xButton.addEventListener('click', () => {
                body.innerHTML = originalHTML
                productFunction()
            })
            })
            
            productSlide1.addEventListener('click', () => {
                displayImg.src = `./images/${productNames[i]}${i}.jpeg`
                displayImg.addEventListener('click', () => {
                    wholeProductPage.innerHTML = `<div class="fullScreenContainer">
                    <button class="xButton">X</button> 
                    <img class="fullScreenImage" src="./images/${productNames[i]}${[i]}.jpeg" alt="">
                    </div>`
                let xButton = document.querySelector('.xButton')
                xButton.addEventListener('click', () => {
                    body.innerHTML = originalHTML
                    productFunction()
                })
                })
            })
            
            productSlide2.addEventListener('click', () => {
                displayImg.src = `./images/${productNames[i]}${[i+1]}.jpeg`
                displayImg.addEventListener('click', () => {
                    wholeProductPage.innerHTML = `<div class="fullScreenContainer">
                    <button class="xButton">X</button> 
                    <img class="fullScreenImage" src="./images/${productNames[i]}${[i+1]}.jpeg" alt="">
                    </div>`
                let xButton = document.querySelector('.xButton')
                xButton.addEventListener('click', () => {
                    body.innerHTML = originalHTML
                    productFunction()
                })
                })
            })
            
            productSlide3.addEventListener('click', () => {
                displayImg.src = `./images/${productNames[i]}${[i+2]}.jpeg`
                displayImg.addEventListener('click', () => {
                    wholeProductPage.innerHTML = `<div class="fullScreenContainer">
                    <button class="xButton">X</button> 
                    <img class="fullScreenImage" src="./images/${productNames[i]}${[i+2]}.jpeg" alt="">
                    </div>`
                let xButton = document.querySelector('.xButton')
                xButton.addEventListener('click', () => {
                    body.innerHTML = originalHTML
                    productFunction()
                })
                })
            })
            
            productSlide4.addEventListener('click', () => {
                displayImg.src = `./images/${productNames[i]}${[i+3]}.jpeg`
                displayImg.addEventListener('click', () => {
                    wholeProductPage.innerHTML = `<div class="fullScreenContainer">
                    <button class="xButton">X</button> 
                    <img class="fullScreenImage" src="./images/${productNames[i]}${[i+3]}.jpeg" alt="">
                    </div>`
                let xButton = document.querySelector('.xButton')
                xButton.addEventListener('click', () => {
                    body.innerHTML = originalHTML
                    productFunction
                })
                })
            })
            }, 1000)
    }

    setTimeout(function() {
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
    const displayImg = document.querySelector('.fullImg')
    
    const wholeProductPage = document.querySelector('.wholeProductPage')
    
    
    const productSlide1 = document.getElementById('productSlide1')
    const productSlide2 = document.getElementById('productSlide2')
    const productSlide3 = document.getElementById('productSlide3')
    const productSlide4 = document.getElementById('productSlide4')

    const originalHTML = `        <!-- nav bar -->
    <div class="navBar">
        <img class="navBarLogo" src="./images/chillien-name.png" alt="">
        <a class="navLink" id="homeLink" href="./index.html">Home</a>
        <a class="navLink" id="shirtLink" href="./product.html">Shirts</a>
        <a class="navLink" id="aboutLink" href="">About</a>
        <a class="navLink" id="contactLink" href="">Contact</a>
        <input class="searchBar" type="text">
        <button class="searchButton">Search</button>
        
    </div>

    <!-- product page -->
    <div class="wholeProductPage">
    <div class="pathContainer">
        <a class="productPath" href="product.html">Shirts</a>
        <h1 class="productPath">></h1>
        <h1 class="productPath" id="pathTitle">${productTitles[i]}</h1>
    </div>

    <div class="productFull">

        <div class="picAndPrice">
            <img class="fullImg" src=${productImgs[i]} alt="">
            <div>
                <h1 class="fullProductTitle">${productTitles[i]}</h1>

                <hr size="1" width="100%" color="white">

                <p class="productPrice2">${productPrices[i]}</p>

                <input type="radio" name="size" value="s" checked hidden id="smallSize">
                <label for="smallSize" class="sizeButton Checked">S</label>
                <input type="radio" name="size" value="m" hidden id="mediumSize">
                <label for="mediumSize" class="sizeButton">M</label>
                <input type="radio" name="size" value="l" hidden id="largeSize">
                <label for="largeSize" class="sizeButton">L</label>
                <input type="radio" name="size" value="xl" hidden id="xlSize">
                <label for="xlSize" class="sizeButton">XL</label>
                <input type="radio" name="size" value="2xl" hidden id="2xlSize">
                <label for="2xlSize" class="sizeButton">2XL</label>
                
                <div class="addCartSection">
                    <input class="quantityInput" type="number" placeholder="1">
                    <button class="cartButton">Add to Cart</button>
                </div>  
            </div>
        </div>

        <img class="productSlide" id="productSlide1" src="./images/${productNames[i]}${[i]}.jpeg" alt="">
        <img class="productSlide" id="productSlide2" src="./images/${productNames[i]}${[i+1]}.jpeg" alt="">
        <img class="productSlide" id="productSlide3" src="./images/${productNames[i]}${[i+2]}.jpeg" alt="">
        <img class="productSlide" id="productSlide4" src="./images/${productNames[i]}${[i+3]}.jpeg" alt="">
    </div>
    </div>

    <script src="product.js"></script>`
    
    
    displayImg.addEventListener('click', () => {
        displaySrc = document.querySelector('.fullImg').src
        console.log(displaySrc)
        wholeProductPage.innerHTML = `<div class="fullScreenContainer">
        <button class="xButton">X</button> 
        <img class="fullScreenImage" src=${displayImg.src} alt="">
        </div>`
    let xButton = document.querySelector('.xButton')
    xButton.addEventListener('click', () => {
        body.innerHTML = originalHTML
        productFunction()
    })
    })
    
    productSlide1.addEventListener('click', () => {
        displayImg.src = `./images/${productNames[i]}${i}.jpeg`
        displayImg.addEventListener('click', () => {
            wholeProductPage.innerHTML = `<div class="fullScreenContainer">
            <button class="xButton">X</button> 
            <img class="fullScreenImage" src="./images/${productNames[i]}${[i]}.jpeg" alt="">
            </div>`
        let xButton = document.querySelector('.xButton')
        xButton.addEventListener('click', () => {
            body.innerHTML = originalHTML
            productFunction()
        })
        })
    })
    
    productSlide2.addEventListener('click', () => {
        displayImg.src = `./images/${productNames[i]}${[i+1]}.jpeg`
        displayImg.addEventListener('click', () => {
            wholeProductPage.innerHTML = `<div class="fullScreenContainer">
            <button class="xButton">X</button> 
            <img class="fullScreenImage" src="./images/${productNames[i]}${[i+1]}.jpeg" alt="">
            </div>`
        let xButton = document.querySelector('.xButton')
        xButton.addEventListener('click', () => {
            body.innerHTML = originalHTML
            productFunction()
        })
        })
    })
    
    productSlide3.addEventListener('click', () => {
        displayImg.src = `./images/${productNames[i]}${[i+2]}.jpeg`
        displayImg.addEventListener('click', () => {
            wholeProductPage.innerHTML = `<div class="fullScreenContainer">
            <button class="xButton">X</button> 
            <img class="fullScreenImage" src="./images/${productNames[i]}${[i+2]}.jpeg" alt="">
            </div>`
        let xButton = document.querySelector('.xButton')
        xButton.addEventListener('click', () => {
            body.innerHTML = originalHTML
            productFunction()
        })
        })
    })
    
    productSlide4.addEventListener('click', () => {
        displayImg.src = `./images/${productNames[i]}${[i+3]}.jpeg`
        displayImg.addEventListener('click', () => {
            wholeProductPage.innerHTML = `<div class="fullScreenContainer">
            <button class="xButton">X</button> 
            <img class="fullScreenImage" src="./images/${productNames[i]}${[i+3]}.jpeg" alt="">
            </div>`
        let xButton = document.querySelector('.xButton')
        xButton.addEventListener('click', () => {
            body.innerHTML = originalHTML
            productFunction()
        })
        })
    })
    }, 1000)
    })


    // add to cart functionality 

}