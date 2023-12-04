
function playSound ( note ) {
    let audio = new Audio('./sounds/' + note + '.mp3');
    audio.play();
}