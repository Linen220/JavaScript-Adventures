const ageCalculatorForm = document.querySelector('#ageCalculator');

function calculateAge() {
    const today = new Date();
    const birthdateInput = document.getElementById('birthdate').value;
    const birthdateParts = birthdateInput.split('-');

    const birthDay = birthdateParts[0];

    //* Restamos -1 porque el constructor 'new Date' enumara los meses desde 0, 
    //* por lo que enero es 0 y diciembre es 11.
    const birthMonth = birthdateParts[1] - 1;
    const birthYear = birthdateParts[2];
    const birthDate = new Date(birthYear, birthMonth, birthDay);

    const isValidDate = ( date ) => {
        return (
            //* Esta línea sera útil para verificar si el valor almacenado
            //* en la variable 'date' es un objeto de tipo (Date).
            Object.prototype.toString.call( date ) === '[object Date]' && !isNaN(date)
        );
    }

    if ( !isValidDate(birthDate) ) {
        alert('Invalid Date Format: Please Enter a valid date in DD-MM-YYYY format.');
        return;
    }

    const ageInMilliseconds = today - birthDate; // El resultado se muestra en milisegundos
    const ageInSeconds = Math.floor( ageInMilliseconds/1000 );
    const ageInMinutes = Math.floor( ageInSeconds/60 );
    const ageInHours = Math.floor( ageInMinutes/60 );
    const ageInDays = Math.floor( ageInHours/24 );
    const ageInWeeks = Math.floor( ageInDays/7 );
    const ageInMonths = Math.floor( ageInDays/30.436875 ); // Usamos un numero aprox. ya que algunos meses tiene 31 o 30 dias
    const ageInYears = Math.floor( ageInDays/365.25 ); // Algunos años tiene 365 o 366 dias.

    const resultContainer = document.getElementById('resultContainer');
    const result = document.getElementById('result');


    /*
        La expresión ageInMonths % 12 se utiliza para calcular los meses restantes 
        después de contabilizar los años completos en la edad calculada.

        - Por ejemplo, si ageInMonths es 27, ageInMonths % 12 sería 3, ya que hay 2 años 
          completos y 3 meses adicionales.

        Es útil porque te da la cantidad de meses restantes después de haber contabilizado los años completos en la edad.
    */

    result.innerHTML = `
        <div class="result__item">
            <h3 class="item__title">Age:</h3>
            <p class="item__info">${ageInYears} Years ${ageInMonths % 12} Months ${ageInDays % 30} Days</p>
        </div>
        <div class="result__item">
            <h3 class="item__title">Months Passed:</h3>
            <p class="item__info">${ageInMonths}</p>
        </div>
        <div class="result__item">
            <h3 class="item__title">Weeks Passed:</h3>
            <p class="item__info">${ageInWeeks}</p>
        </div>
        <div class="result__item">
            <h3 class="item__title">Days Passed:</h3>
            <p class="item__info">${ageInDays}</p>
        </div>
        <div class="result__item">
            <h3 class="item__title">Hours Passed:</h3>
            <p class="item__info">${ageInHours}</p>
        </div>
        <div class="result__item">
            <h3 class="item__title">Minutes Passed:</h3>
            <p class="item__info">${ageInMinutes}</p>
        </div>
        <div class="result__item">
            <h3 class="item__title">Seconds Passed:</h3>
            <p class="item__info">${ageInSeconds}</p>
        </div>
    `;

    resultContainer.style.display = 'block';
}

ageCalculatorForm.addEventListener('submit', ( event ) => {
    //* Esto hace que la página no se refresque, ya que por defecto
    //* el boton al hacer click refrescara ya que es de tipo submit.
    event.preventDefault();

    calculateAge();
    
});