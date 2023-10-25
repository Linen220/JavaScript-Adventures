const listTask = document.querySelector('#list-task');
const inputBox = document.querySelector('#input-box');


function addTask() {
    if ( inputBox.value === '' ) {
        alert('Enter Some Data')
    } else {
        let task = document.createElement('li');
        task.innerText = inputBox.value;
        listTask.append(task);

        let removeIcon = document.createElement('span');
        removeIcon.innerHTML = '\u00d7'; //? \u00d7 -> es el simbolo de la cruz.

        task.append(removeIcon);
    }
    inputBox.value = '';
    saveTask();
}

listTask.addEventListener('click', ( e ) => {
    if ( e.target.tagName === 'LI' ) {
        e.target.classList.toggle('checked');
        saveTask();
    } 
    else if ( e.target.tagName === 'SPAN' ) {
        e.target.classList.remove();
        saveTask();
    }
});



//* Local Storage - útil para mantener la información despues de actualizar el navegador
//* Guarda la información actual en el localstorage
function saveTask() {
    localStorage.setItem('data', listTask.innerHTML);
}

function showTask() {
    listTask.innerHTML = localStorage.getItem('data');
}

showTask();