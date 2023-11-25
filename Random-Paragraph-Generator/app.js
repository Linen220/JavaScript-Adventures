const paragraphs = [
    'En el fascinante mundo de la programación, los algoritmos son como hechizos mágicos que guían a las máquinas para realizar tareas específicas. Como un conjuro cuidadosamente escrito, un algoritmo es la receta que le dice a la computadora exactamente qué hacer y cómo hacerlo. A medida que los desarrolladores teclean líneas de código, están esculpiendo la esencia de la lógica y la funcionalidad, creando así un hechizo que transforma datos y produce resultados asombrosos.',
    'En el vasto baile de la programación, los lenguajes son como diferentes estilos de danza. Cada uno tiene su propio ritmo, sintaxis y propósito. Desde el elegante ballet de Python hasta la energética danza de Java, los desarrolladores seleccionan cuidadosamente el lenguaje que mejor se adapte a la coreografía de su proyecto. Este constante movimiento entre lenguajes es parte integral de la creatividad y adaptabilidad que caracteriza a la programación.',
    'El proceso de depuración en programación es como embarcarse en una búsqueda del tesoro invisible. Los desarrolladores se convierten en intrépidos cazadores, rastreando errores ocultos en el código fuente. Con linternas en forma de impresiones y herramientas de inspección, siguen pistas y desentrañan misterios hasta que finalmente encuentran el tesoro perdido: el bug. Este desafío constante añade un elemento de emoción y descubrimiento a la disciplina de programar.',
    'Los arrays, esos arreglos ordenados de datos, son como una sinfonía de la memoria en el mundo de la programación. Cada elemento es una nota, y la combinación de todos crea una melodía funcional. A través de índices y bucles, los desarrolladores componen esta sinfonía para manipular y organizar datos de manera armoniosa, transformando simples secuencias en obras maestras de funcionalidad.',
    'La programación es como un viaje a través de diferentes dimensiones de pensamiento, cada una representando un paradigma único. Desde la meticulosa planificación orientada a objetos hasta la libertad creativa de la programación funcional, los desarrolladores exploran y eligen paradigmas según la naturaleza de sus proyectos. Este viaje constante entre paradigmas no solo amplía la mente del programador, sino que también desencadena innovaciones sorprendentes en el desarrollo de software.',
    'Las variables en programación son como cajas mágicas que almacenan valores cambiantes. Son la esencia de la flexibilidad y adaptabilidad en el código. Al asignar nombres a estas cajas, los desarrolladores crean un sistema de etiquetas que les permite conjurar y manipular información con facilidad, dando vida a las abstracciones que hacen posible la ejecución de software.',
    'Las declaraciones condicionales son como señales de tráfico en el camino del código, guiando a la ejecución en diferentes direcciones según las circunstancias. Con estructuras como if, else, y switch, los programadores diseñan caminos divergentes para que el software tome decisiones informadas. Esta capacidad de tomar decisiones dinámicas añade un nivel de inteligencia y adaptabilidad a las aplicaciones.',
    'Los bucles en programación son como danzas repetitivas que ejecutan una y otra vez, permitiendo que ciertas operaciones se realicen de manera eficiente. Ya sea un bucle for, while o do-while, estos patrones rítmicos llevan a cabo tareas iterativas, creando una coreografía que transforma datos y mantiene el código en movimiento.',
    'La arquitectura de software es como el esqueleto que da forma y soporte a la aplicación. Desde la arquitectura monolítica hasta la arquitectura de microservicios, los desarrolladores diseñan la estructura subyacente que define cómo interactúan y se comunican los diferentes componentes. Esta planificación cuidadosa es esencial para construir aplicaciones robustas y escalables.',
    'Las Interfaces de Programación de Aplicaciones (APIs) actúan como traductores lingüísticos en el mundo digital. Permiten que diferentes aplicaciones se comuniquen y compartan información de manera armoniosa. Como embajadores de la interoperabilidad, las APIs facilitan la integración de servicios y potencian la creación de ecosistemas tecnológicos interconectados.',
];

const item = document.getElementById('items');
const dataContainer = document.getElementById('data');


function shuffle( array ) {
    let currentIndex = array.length;
    let randomIndex;

    while ( currentIndex != 0 ) {
        //* Aloritmo de Fisher-Yates:

        randomIndex = Math.floor( Math.random() * currentIndex );
        currentIndex--;

        //* Se utiliza la técnica de desestructuración de arreglos para intercambiar 
        //* los elementos en las posiciones currentIndex y randomIndex del array.
        [ array[currentIndex], array[randomIndex] ] = [ array[randomIndex], array[currentIndex] ];
    }

    return array;
    
}

function generate() {
    if ( item.value <= 0 ) {
        alert('The Value cannot be zero or negative');
    } else if ( item.value > paragraphs.length ) {
        const randomIndex = Math.floor( Math.random() * paragraphs.length );
        dataContainer.innerHTML = `${paragraphs[randomIndex]}`;
    } else {
        const shuffleParagraphs = paragraphs;
        shuffle( paragraphs );

        const selectedParagraphs = shuffleParagraphs.slice(0, item.value);
        const paragraphsHTML = selectedParagraphs.map( paragraph => `<p>${paragraph}</p>` ).join('');

        dataContainer.innerHTML = paragraphsHTML;
    }
   
}
