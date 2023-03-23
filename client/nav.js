const createNavBar = () => {
    let navbar = document.querySelector('.navBar')

    navbar.innerHTML = `
        <img class="navBarLogo" src="./images/chillien-name.png" alt="">
        <a class="navLink" id="homeLink" href="./index.html">Home</a>
        <a class="navLink" id="shirtLink" href="./product.html">Shirts</a>
        <a class="navLink" id="aboutLink" href="">About</a>
        <a class="navLink" id="contactLink" href="">Contact</a>
        <input class="searchBar" type="text">
        <button class="searchButton">Search</button>
        <a class="navLink" id="loginLink" href="./login.html">Login</a>`
}

createNavBar()