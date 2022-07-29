function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    return x / y;
}

function operator(op, x, y) {
    if (op === '+') {
        return add(x, y);
    } else if (op === '-') {
        return subtract(x, y);
    } else if (op === 'X') {
        return multiply(x, y);
    } else if (op === '/') {
        return divide(x, y);
    }
}

const currentOp = document.querySelector('.current-op');
const previousOp = document.querySelector('.previous-op');

// Initialize var with a number button
let lastPressed = document.querySelector('.number');

let lastOperation = undefined;
let previousNum = 0;
let currentNum = 0;


document.querySelector('.all-clear').onclick = () => {
    document.querySelector('.previous-op').innerHTML = '';
    currentOp.innerHTML = '';
    previousNum = 0;
    currentNum = 0;
};

document.querySelector('#decimal').onclick = () => {
    // check case where lastPressed was an operator

    if (currentOp.innerHTML != '' && !currentOp.innerHTML.includes('.')) {
        currentOp.innerHTML = `${currentNum}.`;
    } else if (!currentOp.innerHTML.includes('.')) {
        currentOp.innerHTML = '0.';
    }
};

document.querySelector('#plus-minus').onclick = () => {
    if (currentOp.innerHTML != '') {
        currentNum *= -1;
        currentOp.innerHTML = currentNum;
    }
};

document.querySelectorAll('.number').forEach(button => {
    button.onclick = () => {
        if (currentOp.innerHTML == '' || lastPressed.classList.contains('operator')) {
            currentOp.innerHTML = button.innerHTML;
        } else {
            currentOp.innerHTML += button.innerHTML;
        }
        // Change to parseFloat
        currentNum = parseFloat(currentOp.innerHTML);
        //console.log(`currentNum: ${currentNum}`);
        lastPressed = button;
    };
});

document.querySelectorAll('.operator').forEach(button => {
    button.onclick = () => {
        if (!lastPressed.classList.contains('operator')) {

            if (previousOp.innerHTML != '') {
                console.log(`${previousNum}, ${currentNum}`);
                previousNum = operator(lastOperation, previousNum, currentNum);

                console.log(previousNum);
                //currentOp.innerHTML = previousNum;
                currentOp.innerHTML = Math.round((previousNum + Number.EPSILON) * 100000) / 100000;
            } else {
                previousNum = currentNum;
            }
            
            previousOp.innerHTML += currentNum + button.innerHTML;

        } else if (lastPressed.id == 'equal') {
            // disable number buttons

            console.log(`previousNum: ${previousNum}, currentNum: ${currentNum}`);
            previousOp.innerHTML = previousNum + button.innerHTML;           
        }

        lastOperation = button.innerHTML;
        lastPressed = button;
    };
});

