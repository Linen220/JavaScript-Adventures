const addBtn = document.querySelector('#addBtn');
const app = document.querySelector('#main');

addBtn.addEventListener('click', addNote);

function addNote() {
    let note = document.createElement('div');
    note.classList.add('note');

    //* METODO 1:
    note.innerHTML = `
        <div class="tool">
            <i class="save fa-solid fa-floppy-disk"></i>    
            <i class="trash fa-solid fa-trash"></i>
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


    const save = note.querySelector('.save');
    const trash = note.querySelector('.trash');
    const textarea = note.querySelector('textarea');

    save.addEventListener( 'click', saveNotes );
    textarea.addEventListener( 'input', saveNotes );
    trash.addEventListener( 'click', () => {
        note.remove();
        saveNotes();
    });

    app.append(note);
}

function saveNotes() {
    //* 'document.querySelectorAll', devolvera una colección de nodos(una lista similar a un arreglo), pero no un arreglo real.
    const notes = document.querySelectorAll('.note textarea');

    const data = [...notes].map( note => note.value ); 
    // const data = Array.from(notes).map( note => note.value ); //? Otra manera

    if ( data.length === 0 ) {
        localStorage.removeItem('notes');
    } else {
        localStorage.setItem('notes', JSON.stringify(data));
    }
}

function loadNotes() {
    const lsNotes = JSON.parse(localStorage.getItem('notes'));

    if ( lsNotes !== null ) {
        lsNotes.forEach( noteText => {
            addNote();
            const notes = document.querySelectorAll('.note textarea');
            const lastNode = notes[notes.length - 1];
            console.log(notes)
            lastNode.value = noteText;
        });
    } else {
        addNote();
    }

}

loadNotes();