const welcomeHeader = document.querySelectorAll('.welcomeHeader')

const headerAnimation = () => {
    for(let i = 0; i < welcomeHeader.length; i++) {
        console.log(welcomeHeader[i])
        setTimeout(() => {    
            setTimeout(() => {
                welcomeHeader[i].style.color = "white"
            }, i * 100);
        }, 1000)
    }
}

window.onload(headerAnimation())