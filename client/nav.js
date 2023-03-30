
    const createNavBar = () => {
        let navbar = document.querySelector('.navBar')

        if(sessionStorage.user) {
            let user = JSON.parse(sessionStorage.getItem('user'))
            navbar.innerHTML = `
                <img class="navBarLogo" src="./images/chillien-name.png" alt="">
                <a class="navLink" id="homeLink" href="./index.html">Home</a>
                <a class="navLink" id="shirtLink" href="./product.html">Shirts</a>
                <a class="navLink" id="aboutLink" href="./about.html">About</a>
                <a class="navLink" id="contactLink" href="">Contact</a>
                <input class="searchBar" type="text">
                <button class="searchButton">Search</button>
                <div class="loginInfo">
                <a class="loggedInLink">${user.fullName}</a>
                <a class="logoutLink">Logout</a>
                </div>
                <img class="cartImg" src="./images/cart.jpg">
                `
        } else {
            navbar.innerHTML = `
                <img class="navBarLogo" src="./images/chillien-name.png" alt="">
                <a class="navLink" id="homeLink" href="./index.html">Home</a>
                <a class="navLink" id="shirtLink" href="./product.html">Shirts</a>
                <a class="navLink" id="aboutLink" href="./about.html">About</a>
                <a class="navLink" id="contactLink" href="">Contact</a>
                <input class="searchBar" type="text">
                <button class="searchButton">Search</button>
                <a class="navLink" id="loginLink" href="./login.html">Login</a>
                <img class="cartImg" src="./images/cart.jpg" alt="">
                `
        }
    }
createNavBar()

// Logout link and cart logo functionality
let user = JSON.parse(sessionStorage.getItem('user'))
if(user != null) {
    const logoutLink = document.querySelector('.logoutLink')
    const cartLogo = document.querySelector('.cartImg')

    logoutLink.addEventListener('click', () => {
        sessionStorage.clear()
        location.reload()
    })

    cartLogo.addEventListener('click', () => {
        location.replace('/cart.html')
    })    
}