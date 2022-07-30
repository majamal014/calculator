function operator(op, x, y) {
    if (op === '+') {
        return x + y;
    } else if (op === '-') {
        return x - y;
    } else if (op === '×') {
        return x * y;
    } else if (op === '÷') {
        return x / y;
    }
}

const currentOp = document.querySelector('.current-op');
const previousOp = document.querySelector('.previous-op');

// Initialize var with a number button
let lastPressed = document.querySelector('.number');

let lastOperation = undefined;
let previousNum = 0;
let currentNum = 0;

function clear() {
    document.querySelector('.previous-op').innerHTML = '';
    currentOp.innerHTML = '';
    previousNum = 0;
    currentNum = 0;
    lastPressed = document.querySelector('#all-clear');
}

document.querySelector('#all-clear').onclick = clear;

document.querySelector('#clear').onclick = () => {
    if (lastPressed.id == 'equal') {
        clear();
    } else {
        currentOp.innerHTML = currentOp.innerHTML.slice(0, currentOp.innerHTML.length - 1);
        currentNum = parseFloat(currentOp.innerHTML);
        lastPressed = document.querySelector('#clear');
    }
    
};

document.querySelector('#decimal').addEventListener('click', () => {
    if (currentOp.innerHTML != '' && !currentOp.innerHTML.includes('.')) {
        
        if (lastPressed.classList.contains('operator')) {
            currentOp.innerHTML = '0.';
        } else {
            currentOp.innerHTML = `${currentNum}.`;
        }
        lastPressed = document.querySelector('#decimal');

    } else if (!currentOp.innerHTML.includes('.')) {
        currentOp.innerHTML = '0.';
        lastPressed = document.querySelector('#decimal');
    }
});

document.querySelector('#plus-minus').addEventListener('click', () => {
    if (currentOp.innerHTML != '') {
        currentNum *= -1;
        currentOp.innerHTML = currentNum;
    }
});

document.querySelectorAll('.number').forEach(button => {
    button.addEventListener('click', () => {
        if (currentOp.innerHTML == '' || lastPressed.classList.contains('operator')) {
            currentOp.innerHTML = button.innerHTML;
        } else {
            currentOp.innerHTML += button.innerHTML;
        }
        currentNum = parseFloat(currentOp.innerHTML);
        lastPressed = button;
    }); 
});

document.querySelectorAll('.operator').forEach(button => {
    button.addEventListener('click', () => {
        if (!lastPressed.classList.contains('operator')) {

            if (previousOp.innerHTML != '') {
                console.log(`${previousNum}, ${currentNum}`);
                previousNum = operator(lastOperation, previousNum, currentNum);

                console.log(previousNum);
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
    });
});

