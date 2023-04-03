const nameLabel = document.getElementById("nameLabel")
const emailLabel = document.getElementById("emailLabel")
const messageInput = document.querySelector(".messageInput")
const messageLabel = document.querySelector('#messageLabel')
const nameInput = document.querySelector('#nameInput')
const emailInput = document.querySelector('#emailInput')
const alertImg = document.querySelector('.alertImg')
const errorMessage = document.querySelector('.errorMessage')
const sendButton = document.querySelector('.sendButton')

const showError = (alert) => {
    nameLabel.classList.add('hide')
    emailLabel.classList.add('hide')
    messageLabel.classList.add('hide')
    messageInput.classList.add('hide')
    nameInput.classList.add('hide')
    emailInput.classList.add('hide')
    sendButton.classList.add('hide')

    alertImg.classList.remove('hide')
    errorMessage.classList.remove('hide')
    errorMessage.textContent = alert

    setTimeout(() => {
        nameLabel.classList.remove('hide')
        emailLabel.classList.remove('hide')
        messageLabel.classList.remove('hide')
        messageInput.classList.remove('hide')
        nameInput.classList.remove('hide')
        emailInput.classList.remove('hide')
        sendButton.classList.remove('hide')

        alertImg.classList.add('hide')
        errorMessage.classList.add('hide')
    }, 3000);
}

const contactContainer = document.querySelector('.contactCard')
const form = document.querySelector('#contact-form')
let colors = ['red', 'purple', 'blue', 'green', 'yellow', 'rgb(45, 45, 43)']


const borderAnimation = () => {
    if(contactContainer.style.border != '1px solid rgb(45, 45, 45)') {
        for(let i = 0; i < colors.length; i++) {
            setTimeout(() => {
                contactContainer.style.border = `1px solid ${colors[i]}`
            }, i * 200);
        }
    }
}

let count = 0

const runAnimation = () => {
    if(count < 4) {
        borderAnimation()
        count++
        setTimeout(runAnimation, 1000)
    }
}

const clearInputs = () => {
    nameInput.value = ''
    emailInput.value = ''
    messageInput.value = ''
    sendButton.value = 'MESSAGE SENT!'

    setTimeout(() => {
        sendButton.value = 'SEND'
    }, 4000);
}



form.addEventListener('submit', () => {
    if(nameInput.value != '' && emailInput.value != '' && messageInput.value != '') {
        event.preventDefault()
        runAnimation()
        clearInputs()
    } else {
        event.preventDefault();
        showError("Please fill in all inputs")
    }
})

form.addEventListener('keyup', (event) => {
    if(event.key === 'Enter') {
        event.preventDefault()
        runAnimation()
        clearInputs()
    }
})