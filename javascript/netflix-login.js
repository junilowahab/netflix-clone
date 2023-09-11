const email = document.querySelector('#login-email');
const emailPassword = document.querySelector('#password');
const form = document.querySelector('#form');
const emailError = document.querySelector('.email-error');
const passwordError = document.querySelector('.password-error')

form.addEventListener('input', () => {
        if(email.validity.valid){
            emailError.innerText = '';
            emailError.classList.remove('active');
        }else{
            showError();
        }
        if(emailPassword.validity.valid){
            passwordError.innerText = '';
            passwordError.classList.remove('active');
        }else{
            showError();
        }
});

form.addEventListener('submit', (e) => {
    if(!email.validity.valid){
        showError();
        e.preventDefault();
    }
    if(!emailPassword.validity.valid){
        showError();
        e.preventDefault();
    }
});

function showError(){
    //Error for email
    if(email.validity.valueMissing){
        emailError.innerText = 'You need to enter an email address!'
        emailError.classList.add('active');
    }else if(email.validity.typeMismatch){
        emailError.innerText = 'This is not an email address.'
        emailError.classList.add('active');
    }

    //Error for password
    if(emailPassword.validity.tooShort){
        passwordError.innerText = 'Your password does not have enough characters';
        passwordError.classList.add('active');
        console.log(emailPassword.value.length)
    }else if(emailPassword.validity.tooLong){
        passwordError.innerText = 'Your password has too many characters';
        passwordError.classList.add('active');
    }
}