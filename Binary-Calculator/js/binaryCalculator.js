const res = document.querySelector('#res');
const btn0 = document.querySelector('#btn0');
const btn1 = document.querySelector('#btn1');
const btnClr = document.querySelector('#btnClr');
const btnSum = document.querySelector('#btnSum');
const btnEql = document.querySelector('#btnEql');
const btnSub = document.querySelector('#btnSub');
const btnMul = document.querySelector('#btnMul');
const btnDiv = document.querySelector('#btnDiv');

const pattern = /[0-1]+/g;
const opPattern = /[-,+,/,*,]/g;

btn0.addEventListener('click', () => {
    res.innerText += 0;
});

btn1.addEventListener('click', () => {
    res.innerText += 1;
});

btnClr.addEventListener('click', () => {
    res.innerText = '';
})

btnSum.addEventListener('click', () => {
    if ( !res.innerText.includes('+') && res.innerText !== '' ) {
        res.innerText += '+';
    }
});

btnSub.addEventListener('click', () => {
    if ( !res.innerText.includes('-') && res.innerText !== '' ) {
        res.innerText += '-';
    }
});

btnMul.addEventListener('click', () => {
    if ( !res.innerText.includes('*') && res.innerText !== '' ) {
        res.innerText += '*';
    }
});

btnDiv.addEventListener('click', () => {
    if ( !res.innerText.includes('/') && res.innerText !== '' ) {
        res.innerText += '/';
    }
});

btnEql.addEventListener('click', () => {
    const nums = res.innerText.match(pattern);
    const operator = res.innerText.match(opPattern); 

    if ( nums.length === 2 && operator ) {
        const result = resuelve(nums[0], nums[1], operator);
        res.innerText = result;
    }
})

function resuelve( numA, numB, op ) {

    numA = Number.parseInt(numA,2);
    numB = Number.parseInt(numB,2)

    if( op == "+" ) {
        return (numA + numB).toString(2);
    }
    else if( op == "-" ) {
        return (numA - numB).toString(2);
    }
    else if( op == "/" ) {
        return (numA / numB).toString(2);
    }
    else if( op == "*" ) {
        return (numA * numB).toString(2);
    }
}