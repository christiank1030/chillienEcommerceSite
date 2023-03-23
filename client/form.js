const fullName = document.querySelector('#name');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const number = document.querySelector('#number');
const createAcctBtn = document.querySelector('.createAcctBtn');
const loginLink = document.querySelector('.loginLink');
const alertImg = document.querySelector('.alertImg');
const errorMsg = document.querySelector('.errorMessage');


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
    if(data.alert) {
        showAlert(data.alert)
    }
}

const showAlert = (alert) => {
    // hide input forms
    fullName.classList.add('hide');
    email.classList.add('hide');
    password.classList.add('hide');
    number.classList.add('hide');
    createAcctBtn.classList.add('hide');
    loginLink.classList.add('hide');

    errorMsg.innerHTML = alert;
    // show alert
    alertImg.classList.remove('hide');
    errorMsg.classList.remove('hide');
    setTimeout(() => {
        fullName.classList.remove('hide');
        email.classList.remove('hide');
        password.classList.remove('hide');
        number.classList.remove('hide');
        createAcctBtn.classList.remove('hide');
        loginLink.classList.remove('hide');
        
        alertImg.classList.add('hide');
        errorMsg.classList.add('hide');
    }, 3000);
}





createAcctBtn.addEventListener('click', () => {
    // form validations
    if(!email.value.length) {
        showAlert('Please enter a valid email');
    } else if(password.value.length < 8) {
        showAlert('Password must be 8 or more characters')
    } else if(number.value.length < 10) {
        showAlert('Please enter a valid phone number')
    } else if(!number.value.length) {
        showAlert('Please enter a phone number')
    } else {
        // Passes user input as parameter of sendData function
        sendData('/signup', {
            fullName: fullName.value,
            email: email.value,
            password: password.value,
            number: number.value,
            seller: false
        })
    }
})