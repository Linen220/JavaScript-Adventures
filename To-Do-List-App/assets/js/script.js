const listTask = document.querySelector('#list-task');
const inputBox = document.querySelector('#input-box');
const btnAdd = document.querySelector('#btn-add');


btnAdd.addEventListener('click', () => {
    if ( inputBox.value === '' ) {
        alert('Ingrese una tarea')
    } else {
        let task = document.createElement('li');
        task.innerText = inputBox.value;
        listTask.append(task);

        //* Insertamos la cruz para eliminar la tarea.
        let removeIcon = document.createElement('span');
        removeIcon.innerHTML = '\u00d7'; //? \u00d7 -> es el simbolo de la cruz.
        task.append(removeIcon);
    }
    inputBox.value = '';
    saveTask();
});

listTask.addEventListener('click', ( e ) => {
    //* e -> es el evento que se pasa a la función de controlador de eventos.     
    //* e.target -> se refiere al elemento que desencadenó el evento.
    //* e.target.parentElement -> accede al elemento padre del elemento que desencadenó el evento.
    // console.log(e.target)
    // console.log(e.target.parentElement)
    
    if ( e.target.tagName === 'LI' ) {
        e.target.classList.toggle('checked');
        saveTask();
    } else if ( e.target.tagName === 'SPAN' ) {
        e.target.parentElement.remove();
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