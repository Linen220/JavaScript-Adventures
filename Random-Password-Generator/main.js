const inputSlider = document.getElementById('inputSlider');
const sliderValue = document.getElementById('sliderValue');
const passBox = document.getElementById('passBox');
const lowecaseElement = document.getElementById('lowecase');
const numberElement = document.getElementById('numbers');
const symbolsElement = document.getElementById('symbols');
const generateBtn = document.getElementById('getBtn');

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
    const length = inputSlider.value
}

