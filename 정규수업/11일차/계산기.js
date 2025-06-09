
const calculateData = {
    view: 0,
}

function calculator (num1, num2, operator) {
    switch (operator) {
        case '+':
            calculateData.view = num1 + num2;
            break;
        case '-':
            calculateData.view = num1 - num2;
            break;
        case '*':
            calculateData.view = num1 * num2;
            break;
        case '/':
            if ( num2 === 0 ) {
                calculateData.view = 0;
                break;
            }
            calculateData.view = num1 / num2;
            break;
        default: return;
    }
    return calculateData.view;
}

console.log(calculator ( 123, 3 , '+' ));

