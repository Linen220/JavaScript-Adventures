const listTask = document.querySelector('#list-task');
const inputBox = document.querySelector('#input-box');


function addTask() {
    if ( inputBox.value === '' ) {
        alert('Enter Some Data')
    } else {
        let task = document.createElement('li');
        task.innerText = inputBox.value;
        listTask.append(task);
    }
    inputBox.value = '';
    saveTask();
}

listTask.addEventListener('click', () => {
    
});



//* Local Storage - útil para mantener la información despues de actualizar el navegador
function saveTask() {
    localStorage.setItem('data', listTask.innerHTML);
}

function showTask() {
    listTask.innerHTML = localStorage.getItem('data');
}

showTask();