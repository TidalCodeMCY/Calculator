class Calculator {
    constructor(x,y,method) {
        this.x = x;
        this.y = y;
        this.method = method;
    }

    setMethod(value){
        this.method = value;
    }

    add(x,y) {
        if(x && y){
            return x+y;
        }else{
            return 'Need two values';
        }
    }

    subtract(x,y) {
        if(x && y){
            return x-y;
        }else{
            return 'Need two values';
        }
    }

    multiply(x,y) {
        if(x && y){
            return x*y;
        }else{
            return 'Need two values';
        }
    }

    divide(x,y) {
        if(x && y){
            if(x > y){
                return x/y;
            }else {
                return y/x;
            }
        }else{
            return 'Need two values';
        }
    }
}

const newCalculator = new Calculator();

(function watch(){
    const calculator = document.querySelector('.numbers');

    calculator.addEventListener('click', (e) => {
        calculate(e.target);
    });
})();

function calculate(target){
    const calculatorscreen = document.querySelector('.final');

    if(target.id === 'finalscreen'){
        return;
    }

    if(target.textContent === '/'||target.textContent === '*'||target.textContent === '+'||target.textContent === '-'){
        newCalculator.setMethod(target.textContent);
    }

    if(target.textContent === 'Clear'){
        calculatorscreen.textContent = '';
        return;
    }

    if(target.textContent === '='){
        const arrg = calculatorscreen.textContent.split(newCalculator.method);
        if(newCalculator.method === '+'){
            const answer = newCalculator.add(parseInt(arrg[0]),parseInt(arrg[1]));
            calculatorscreen.textContent = answer;
        }else if(newCalculator.method === '-') {
            const answer = newCalculator.subtract(parseInt(arrg[0]),parseInt(arrg[1]));
            calculatorscreen.textContent = answer;
        }else if(newCalculator.method === '*') {
            const answer = newCalculator.multiply(parseInt(arrg[0]),parseInt(arrg[1]));
            calculatorscreen.textContent = answer;
        }else if(newCalculator.method === '/') {
            let answer = newCalculator.divide(parseInt(arrg[0]),parseInt(arrg[1]));
            answer = parseFloat(answer.toFixed(3));
            calculatorscreen.textContent = answer;
        }
    }else {
        calculatorscreen.textContent = calculatorscreen.textContent + target.textContent;
    }
}