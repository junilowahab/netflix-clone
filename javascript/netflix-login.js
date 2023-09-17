const email = document.querySelector('#login-email');
const emailPassword = document.querySelector('#password');
const form = document.querySelector('#form');
const emailError = document.querySelector('.email-error');
const passwordError = document.querySelector('.password-error')

form.noValidate = true;
form.addEventListener('input', () => {
        if(email.validity.valid){
            emailError.innerText = '';
            email.classList.remove('active');
        }else{
            showError();
        }
        if(emailPassword.validity.valid){
            passwordError.innerText = '';
            emailPassword.classList.remove('active');
        }else{
            showError();
        }
});

form.addEventListener('submit', (e) => {
    if(!email.validity.valid || !emailPassword.validity.valid){
        showError();
        e.preventDefault();
    }else{
        window.open('http://127.0.0.1:5500/main.html')
    }
});

function showError(){
    //Error for email
    if(email.validity.valueMissing){
        emailError.innerText = 'Please enter a valid email address or phone number.'
        email.classList.add('active');
    }else if(email.validity.typeMismatch){
        emailError.innerText = 'Please enter a valid email address.'
        email.classList.add('active');
    }

    //Error for password
    if(emailPassword.validity.tooShort){
        passwordError.innerText = 'Your password must contain characters between 5 to 15 characters';
        emailPassword.classList.add('active');
        console.log(emailPassword.value.length)
    }else if(emailPassword.validity.tooLong){
        passwordError.innerText = 'Your password has too many characters';
        emailPassword.classList.add('active');
    }
}