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

document.querySelector('.all-clear').onclick = () => {
    document.querySelector('.previous-op').innerHTML = '';
    currentOp.innerHTML = '0';
};


document.querySelectorAll('.number').forEach(button => {
    button.onclick = () => {
        if (currentOp.innerHTML == '0') {
            currentOp.innerHTML = button.innerHTML;
        } else {
            currentOp.innerHTML += button.innerHTML;
        }
    };
});

document.querySelectorAll('.operator').forEach(button => {
    button.onclick = () => {
        if (currentOp.innerHTML != '') {
            previousOp.innerHTML = currentOp.innerHTML;
            previousOp.innerHTML += button.innerHTML;
            currentOp.innerHTML = '';
        } 
    };
});