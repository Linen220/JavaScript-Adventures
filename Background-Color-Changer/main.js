const body = document.body;

body.addEventListener( 'click', changeBackgroundColor );

function changeBackgroundColor() {
    const randomColor = getRandomColor(); // #fffcd4
    body.style.backgroundColor = randomColor;
    body.style.color = getRandomColor();
}

function getRandomColor () {

    const letters = '0123456789ABCDEF';
    let color = '#';

    //* 'i < 6', porque queremos un color de 6 digitos, pero podriamos cambiarlo
    //* a 3 por ejemplo.
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * letters.length)];
    }
    
    return color;
}