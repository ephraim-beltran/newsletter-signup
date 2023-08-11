const signUpCard = document.getElementById('newsletter-signup');
const signupForm = document.getElementById('newsletter-form');
const emailInput = document.getElementById('sign-up-email');
const errorMessage = document.getElementById('email-error-message');
const successMessage = document.getElementById('success-message');
const dismissButton = document.getElementById('dismiss-message');

let submitSuccess = false;

const signupResult = (result) => {
    if (result) {
        successMessage.classList.remove('display-none');
        successMessage.classList.add('slide-in-fwd-center');
        console.log('Signup successful');
    }
}

// Check valid input
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const hasDomain = emailInput.value.split('@').length;
    
    // Splits the input into two array items using the '@' character
    // Since email addresses does not allow the @ symbol for the user section
    // the array should only have a length of 2
    // e.g. 'user@email.com' will be split into ['user','email.com']
    if (emailInput.value === '' || emailInput.value == null || hasDomain !== 2) {
        errorMessage.classList.remove('display-none');
        emailInput.classList.add('email-error');
        return;
    }
    if (!errorMessage.classList.contains('display-none')){
        errorMessage.classList.add('display-none');
        emailInput.classList.remove('email-error');
    }
    signUpCard.classList.add('scale-out-center');

    // Handle submit function here
    // if submit is successful submitSuccess = true
    // Static result will be assigned for demonstration
    setTimeout(signupResult(true), 3000)
    
})

dismissButton.addEventListener('click', (e) => {
    e.preventDefault();
    successMessage.className = 'scale-out-center';
})

