const generateBtn = document.querySelector('#generateBtn');

generateBtn.addEventListener('click', updateColor );


function getRandomColor () {
    const letters = '0123456789ABCDEF';
    let color = '#';

    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * letters.length)];
    }
    
    return color;
}

function updateColor() {
    const colorBox = document.querySelector('#colorBox');
    const colorText = document.querySelector('#colorText');

    const randomColor = getRandomColor();
    
    colorBox.style.backgroundColor = randomColor;
    colorText.textContent = randomColor;
}
