/*function operationsBetweenNumbers(input){
    let num1 = Number(input.shift());
    let num2 = Number(input.shift());
    let operand = input.shift();
    let result = 0.0;
    let oddOrEven = "";

    switch(operand){

        case"+":
        result = num1 + num2;

        if(result % 2 == 0){
            oddOrEven = "even";
        } else{
            oddOrEven = "odd";
        }

        console.log(`${num1} ${operand} ${num2} = ${result} - ${oddOrEven}`);
        break;

        case"-":
        result = num1 - num2;

        if(result % 2 == 0){
            oddOrEven = "even";
        } else{
            oddOrEven = "odd";
        }

        console.log(`${num1} ${operand} ${num2} = ${result} - ${oddOrEven}`);
        break;

        case"*":
        result = num1 * num2;

        if(result % 2 == 0){
            oddOrEven = "even";
        } else{
            oddOrEven = "odd";
        }

        console.log(`${num1} ${operand} ${num2} = ${result} - ${oddOrEven}`);
        break;

        case"/":
        result = num1 / num2;

        if(num2 == 0){
            console.log(`Cannot divide ${num1} by zero`);
            break;
        } else{
            console.log(`${num1} / ${num2} = ${result}`);
        }
        break;

        case"%":
        result = num1 % num2;

        if(num2 == 0){
            console.log(`Cannot divide ${num1} by zero`);
            break;
        } else{
            console.log(`${num1} % ${num2} = ${result}`);
        }
        break;
    }
}

operationsBetweenNumbers(["10","12","+"]); */

function operationsBetweenNumbers(input) {
    let firstNumber = Number(input[0]);
    let secondNumber = Number(input[1]);
    let operator = input[2];
    let result = 0;

    switch(operator) {
        case '+':
                result = firstNumber + secondNumber;
                if((firstNumber + secondNumber) % 2 === 0) {
                    console.log(`${firstNumber} + ${secondNumber} = ${firstNumber + secondNumber} - even`);
                } else {
                    console.log(`${firstNumber} + ${secondNumber} = ${firstNumber + secondNumber} - odd`);
                }
                break;
        case '-':
                result = firstNumber - secondNumber;
                if((firstNumber - secondNumber) % 2 === 0) {
                    console.log(`${firstNumber} - ${secondNumber} = ${firstNumber - secondNumber} - even`);
                } else {
                    console.log(`${firstNumber} - ${secondNumber} = ${firstNumber - secondNumber} - odd`);
                }
                break;
        case '*':
                if((firstNumber * secondNumber) % 2 === 0) {
                    console.log(`${firstNumber} * ${secondNumber} = ${firstNumber * secondNumber} - even`);
                } else {
                    console.log(`${firstNumber} * ${secondNumber} = ${firstNumber * secondNumber} - odd`);
                }
                break;
        case '/':
                if(secondNumber === 0) {
                    console.log(`Cannot divide ${firstNumber} by zero`);
                } else {
                    console.log(`${firstNumber} / ${secondNumber} = ${(firstNumber / secondNumber).toFixed(2)}`);
                }
                break;
        case '%':
                if(secondNumber === 0) {
                    console.log(`Cannot divide ${firstNumber} by zero`);
                } else {
                    console.log(`${firstNumber} % ${secondNumber} = ${firstNumber % secondNumber}`);
                }
                break;
    }
}

operationsBetweenNumbers(["10","12","+"]); 

