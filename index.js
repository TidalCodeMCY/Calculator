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
            return x;
        }
    }

    subtract(x,y) {
        if(x && y){
            return x-y;
        }else{
            return x;
        }
    }

    multiply(x,y) {
        if(x && y){
            return x*y;
        }else{
            return x;
        }
    }

    divide(x,y) {
        if(x === 0 || y === 0){
            return 'We dont divide by zero!'
        }

        if(x && y){
            if(x > y){
                return x/y;
            }else {
                return y/x;
            }
        }else{
            return x;
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
        if(newCalculator.method === '/' || newCalculator.method === '*' || newCalculator.method === '-' || newCalculator.method === '+'){
            const foeTarget = document.createElement('div');
            foeTarget.textContent = '=';
            calculate(foeTarget);
            newCalculator.setMethod(target.textContent);
            calculatorscreen.textContent = calculatorscreen.textContent + target.textContent;
            return;
        }
        newCalculator.setMethod(target.textContent);
    }

    if(target.textContent === 'Clear'){
        calculatorscreen.textContent = '';
        newCalculator.setMethod('');
        return;
    }

    if(target.textContent === '='){
        const arrg = calculatorscreen.textContent.split(newCalculator.method);

        if(!arrg[1]){
            return;
        }

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
            if(typeof answer === 'string'){
                const delay = 2000;
                calculatorscreen.textContent = answer;
                setTimeout(function() {
                    calculatorscreen.textContent = arrg[0]+newCalculator.method;
                },delay);
                return;
            }
            answer = parseFloat(answer.toFixed(3));
            calculatorscreen.textContent = answer;
        }
    }else {
        calculatorscreen.textContent = calculatorscreen.textContent + target.textContent;
    }
}