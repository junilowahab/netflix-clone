const email = document.querySelector('#login-email');
const emailPassword = document.querySelector('#password');
const form = document.querySelector('#form');
const emailError = document.querySelector('.email-error')

form.addEventListener('input', (e) => {
        if(email.validity.valid){
            emailError.innerText = '';
            emailError.classList.remove('active');
        }else{
            showError();
        }
});

function showError(e){
    if(email.validity.valueMissing){
        emailError.innerText = 'You need to enter an email address!'
        emailError.classList.add('active');
    }else if(email.validity.typeMismatch){
        emailError.innerText = 'This is not an email address.'
        emailError.classList.add('active');
    }
}