const inputSlider = document.getElementById('inputSlider');
const sliderValue = document.getElementById('sliderValue');
const passBox = document.getElementById('passBox');
const lowercaseElement = document.getElementById('lowercase');
const uppercaseElement = document.getElementById('uppercase');
const numberElement = document.getElementById('numbers');
const symbolsElement = document.getElementById('symbols');
const generateBtn = document.getElementById('getBtn');

const copyIcon = document.getElementById('copyIcon');

const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+-=[]{}\\|;':\",./<>?";


sliderValue.textContent = inputSlider.value;
inputSlider.addEventListener('input', () => {
    sliderValue.textContent = inputSlider.value
});

generateBtn.addEventListener('click', () => {
    passBox.value = generatePaswword(); // Llama la función
});

function generatePaswword() {
    const length = inputSlider.value;
    let characters = '';
    let password = '';

    characters += lowercaseElement.checked ? lowercaseLetters : '';
    characters += uppercaseElement.checked ? uppercaseLetters : '';
    characters += numberElement.checked ? numbers : '';
    characters += symbolsElement.checked ? symbols : '';
    
    for (let i = 0; i < length; i++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length))
    }
    
    return password;
}

//* Copiar el password al portapapeles.
copyIcon.addEventListener('click', () => {
    if ( passBox.value !== '' || passBox.value.length >= 10 ) {

        //* Esta línea copia el password al portapapeles.
        navigator.clipboard.writeText(passBox.value);

        //* Aqui se cambia el icono de guardado a un 'check'.
        //* El nombre anterior es 'content_copy' pero al cambiarlo a 'check'
        //* se cambia el icono.
        copyIcon.innerText = 'check';

        //* El icono volvera a su icono original despues de 3 segundos.
        setTimeout(() => {
           copyIcon.innerHTML = 'content_copy'; 
        },3000 );
    }
});

