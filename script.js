// menampilkan tombol
const calculatorScreen = document.querySelector(".calculator-screen");

const updateScreen = (number)=>{
    calculatorScreen.value = number
};

const numbers = document.querySelectorAll(".number");

numbers.forEach((number)=>{
    number.addEventListener("click", (event) => {
        inputNumber(event.target.value);
        updateScreen(currentNumber);
    })
});
// akhir menampilkan tombol

// variabel kalkulasi
let prevNumber = '';
let calculationOperator = '';
let currentNumber = '0';
// akhir variabel kalkulasi

// memberikan input ke currentNumber
const inputNumber = (number) =>{
    if (currentNumber === '0'){
        currentNumber = number;
    }else{
        currentNumber += number
    }
};
// Akhir input ke currentNumber

// menjalankan operator
const operators =  document.querySelectorAll(".operator")

operators.forEach((operator)=>{
    operator.addEventListener("click" , (event)=>{
        inputOperator(event.target.value);
    })
})

const inputOperator = (operator)=>{
    if(calculationOperator === ''){
        prevNumber = currentNumber
    }
    calculationOperator = operator
    currentNumber = '0'
}
// Akhir operator

// Tombol sama dengan 
const equalSign = document.querySelector('.equal-sign')

equalSign.addEventListener('click' , ()=>{
    calculate()
    updateScreen(currentNumber)
})

const calculate = () =>{
    let result = ''
    switch(calculationOperator) {
        case "+":
            result = parseFloat(prevNumber) + parseFloat(currentNumber)
            break
        case "-":
            result = prevNumber - currentNumber
            break
        case "*":
            result = prevNumber * currentNumber
            break
        case "/":
            result = prevNumber / currentNumber
            break
        default:
            break
    }
    currentNumber = result
    calculationOperator = ''
}
// Akhir tombol sama dengan 

// Tombol AC
const clearBtn = document.querySelector(".all-clear")

clearBtn.addEventListener('click', ()=>{
    clearAll()
    updateScreen(currentNumber)
})

const clearAll = ()=>{
    prevNumber = ''
    calculationOperator = ''
    currentNumber = '0'
}
// Akhir Tombol AC

// Desimal
const decimal = document.querySelector('.decimal')

decimal.addEventListener('click' , (event)=>{
    inputDecimal(event.target.value)
    updateScreen(currentNumber)
})

inputDecimal = (dot) =>{
    if(currentNumber.includes('.')){
        return
    }
    currentNumber += dot
}
// Akhir decimal
// function back(){
// 	var hasil = document.form.textarea.value;
// 	document.form.textarea.value = hasil.substring(0,hasil.length-1);
// }