// redirect to index.html if user is logged in 
window.onload = () => {
    if(sessionStorage.user) {
        user = JSON.parse(sessionStorage.user)
        if(compareToken(user.authToken, user.email)) {
            location.replace('/')
        }
    }
}

const fullName = document.querySelector('#name') //|| null;
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const number = document.querySelector('#number') //|| null;
const createAcctBtn = document.querySelector('.createAcctBtn');
const loginLink = document.querySelector('.loginLink');
const signupLink = document.querySelector('.signupLink');
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
    } else if(data.fullName) {
        console.log(data)
        data.authToken = createToken(data.email)
        sessionStorage.user = JSON.stringify(data)
        location.replace('/')
    }
}

const showAlert = (alert) => {
    // hide input forms

    if(fullName != null) {
        fullName.classList.add('hide');
    }
    email.classList.add('hide');
    password.classList.add('hide');
    if(number != null) {
        number.classList.add('hide');
    }
    createAcctBtn.classList.add('hide');
    if(loginLink != null) {
        loginLink.classList.add('hide');
    }
    if(signupLink != null) {
        signupLink.classList.add('hide')
    }

    errorMsg.innerHTML = alert;
    // show alert
    alertImg.classList.remove('hide');
    errorMsg.classList.remove('hide');
    setTimeout(() => {
        if(fullName != null) {
            fullName.classList.remove('hide');
        }
        email.classList.remove('hide');
        password.classList.remove('hide');
        if(number != null) {
            number.classList.remove('hide');
        }
        createAcctBtn.classList.remove('hide');
        if(loginLink != null) {
            loginLink.classList.remove('hide');
        }
        if(signupLink != null) {
            signupLink.classList.remove('hide')
        }
    
        
        alertImg.classList.add('hide');
        errorMsg.classList.add('hide');
    }, 3000);
}

let userID = 1;

createAcctBtn.addEventListener('click', () => {
    if (fullName != null) {    
        // form validations
        if(!email.value.length) { // sign up page
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
                cart: [],
                id: userID 
            })

            userID++
        }
    } else {
        // login page
        if (!email.value.length || !password.value.length) {
            showAlert('Please fill in all inputs')
        } else {
            sendData('/login', {
                email: email.value,
                password: password.value
            })
        }
    }
})