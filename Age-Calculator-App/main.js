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

    // console.log(birthdateInput)
    // console.log(birthdateParts)
    // console.log(birthMonth)

    const isValidDate = ( date ) => {
        return (
            Object.prototype.toString.call( date ) === '[object Date]' && !isNaN(date)
        );
    }

}

ageCalculatorForm.addEventListener('submit', ( event ) => {
    //* Esto hace que la página no se refresque, ya que por defecto
    //* el boton al hacer click refrescara ya que es de tipo submit.
    event.preventDefault();

    calculateAge();
    
});