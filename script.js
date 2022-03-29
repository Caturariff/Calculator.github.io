//mengambil elemen, nilai, dan mengupdate angka pada layar kalkulator
const numbers = document.querySelectorAll(".number");

numbers.forEach((Number)=> {
    Number.addEventListener("click", (event)=> {
        inputNumber(event.target.value);
        updateScreen(currentNumber);
    });
});

const calculatorScreen = document.querySelector(".calculator-screen");

const updateScreen = (Number) => {
    calculatorScreen.value = Number;
}

let prevNumber = '';
let calculationOperator = '';
let currentNumber = '0';

const inputNumber = (Number) => {
    if (currentNumber === '0') {
        currentNumber = Number;
    } else {
    currentNumber += Number;
    }
}

//mengambil element dan value dari operator
const operators = document.querySelectorAll(".operator");

operators.forEach((operator)=> {
    operator.addEventListener("click", (Event)=> {
        inputOperator(Event.target.value);
    });
});

//input operator aritmatika dan kalkulasinya
const inputOperator = (operator)=> {
    if(calculationOperator === ''){
        prevNumber = currentNumber;
    }
    calculationOperator = operator;
    currentNumber = '0';
}

const equalSign = document.querySelector(".equal-sign");

equalSign.addEventListener('click', ()=> {
    calculate();
    updateScreen(currentNumber);
});

const calculate = ()=> {
    let result = '';
    switch(calculationOperator) {
        case "+":
            result = parseFloat(prevNumber) + parseFloat(currentNumber);
            break;
        case "-":
            result = prevNumber - currentNumber;
            break;
        case "*":
            result = prevNumber * currentNumber;
            break;
        case "/":
            result = prevNumber / currentNumber;
            break;
        default:
            break;
    }
    currentNumber = result;
    calculationOperator = '';
}

//fungsi tombol AC(All Clear)
const clearBtn = document.querySelector(".all-clear");

clearBtn.addEventListener('click', ()=> {
    clearAll();
    updateScreen(currentNumber);
});

const clearAll = ()=> {
    prevNumber = '';
    calculationOperator = '';
    currentNumber = '0';
}

//fungsi button decimal(.)
const decimal = document.querySelector(".decimal");

decimal.addEventListener('click', (event)=> {
    inputDecimal(event.target.value);
    updateScreen(currentNumber);
});

inputDecimal = (dot)=> {
    if(currentNumber.includes('.')) {
        return;
    }
    currentNumber += dot;
}

//fungsi button persen (%)
const percent = document.querySelector(".percentage");

percent.addEventListener('click', ()=> {
    persen();
    updateScreen(currentNumber);
});

const persen = ()=> {
    currentNumber/= 100;
    return;
}
