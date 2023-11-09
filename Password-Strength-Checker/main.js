const password = document.querySelector('#password');
const message = document.querySelector('#message');
const strength = document.querySelector('#strength');
const submitBtn = document.querySelector('button');

password.addEventListener('input', function() {
    const passwordValue = password.value;
    let strengthValue = '';

    if ( passwordValue.length === 0) {
        strengthValue = '';
    } else if ( passwordValue.length < 6 ) {
        strengthValue = 'Weak';
    } else if ( passwordValue.length < 10) {
        strengthValue = 'Medium';
    } else {
        strengthValue = 'Strong';
    }

    //? textContent: devuelve todo el contenido de texto dentro del elemento, 
    //? incluyendo el texto oculto y no representado ( display:none ).
    strength.textContent = strengthValue;
    message.style.display = 'block';        // Display the message
});

submitBtn.addEventListener( 'click', function () {
    const passwordType = password.getAttribute('type');
    
    if ( passwordType === 'password' ) {
        password.setAttribute('type', 'text')
    } else {
        password.setAttribute('type', 'password');
    }
});

