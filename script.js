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


document.querySelectorAll('.number').forEach(button => {
    button.onclick = () => {
        if (currentOp.innerHTML == '' || lastPressed.classList.contains('operator')) {
            currentOp.innerHTML = button.innerHTML;
        } else {
            currentOp.innerHTML += button.innerHTML;
        }
        // Change to parseFloat
        currentNum = parseInt(currentOp.innerHTML);
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
                currentOp.innerHTML = previousNum;
            } else {
                previousNum = currentNum;
            }
            
            //console.log(`${currentOp.innerHTML}, ${button.innerHTML}`);
            previousOp.innerHTML += currentNum + button.innerHTML;

            
            lastOperation = button.innerHTML;
            lastPressed = button;
        }
    };
});