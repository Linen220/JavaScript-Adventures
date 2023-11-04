const addBtn = document.querySelector('#addBtn');
const app = document.querySelector('#main');

addBtn.addEventListener('click', () => {
    let note = document.createElement('div');
    note.classList.add('note');

    //* METODO 1:
    note.innerHTML = `
        <div class="tool">
            <i class="fa-solid fa-floppy-disk"></i>    
            <i class="fa-solid fa-trash"></i>
        </div>
        <textarea>
        </textarea>
    `

    //* METODO 2:
    // let tool = document.createElement('div');
    // tool.classList.add('tool');

    // let iconSave = document.createElement('i');

    //? Tambien funciona pero no te olvides de que 'classList.add('class1', 'class2', ...)' debe
    //? estar separado por coma las clases si es que fuenran más de 1.
    // iconSave.classList.add('fa-solid', 'fa-floppy-disk');

    // let iconDelete = document.createElement('i');
    // iconDelete.classList.add('fa-solid', 'fa-trash');

    // let text = document.createElement('textarea');

    // tool.append(iconSave, iconDelete);
    // note.append(tool, text);
    app.append(note);
});