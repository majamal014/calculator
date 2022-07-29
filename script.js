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
    } else if (op === '*') {
        return multiply(x, y);
    } else if (op === '/') {
        return divide(x, y);
    }
}

const currentOp = document.querySelector('.current-op');
const previousOp = document.querySelector('.previous-op');

// Initialize var with a number button
let lastPressed = document.querySelector('.number');
let previousNum = 0;
let currentNum = 0;

document.querySelector('.all-clear').onclick = () => {
    document.querySelector('.previous-op').innerHTML = '';
    currentOp.innerHTML = '0';
};


document.querySelectorAll('.number').forEach(button => {
    button.onclick = () => {
        if (currentOp.innerHTML == '0' || lastPressed.classList.contains('operator')) {
            currentOp.innerHTML = button.innerHTML;
        } else {
            currentOp.innerHTML += button.innerHTML;
        }
        // Change to parseFloat
        currentNum = parseInt(currentOp.innerHTML);
        lastPressed = button;
    };
});

document.querySelectorAll('.operator').forEach(button => {
    button.onclick = () => {
        if (!lastPressed.classList.contains('operator')) {

            // this causes problems displaying nums on screen
            //if (previousOp.innerHTML != '') {
              //  currentOp.innerHTML = operator(button.innerHTML, previousNum, currentNum);
            //} 
            
            console.log(`${currentOp.innerHTML}, ${button.innerHTML}`);
            previousOp.innerHTML += currentOp.innerHTML + button.innerHTML;
            //previousOp.innerHTML += button.innerHTML;

            //console.log(`${previousNum}, ${currentNum}`);
            
            lastPressed = button;
        }
    };
});