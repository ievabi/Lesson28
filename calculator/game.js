
$(document).ready(function () {
    var result = 0;
    var storedNumber = 0;
    var operation = null;
    var activeNumber = '0';
    updateScreen(result);

    $('.button').on('click', function (evt) {
        var buttonPressed = $(this).html();
        console.log(buttonPressed);

        if (buttonPressed === "Del") {
            result = 0;
            activeNumber = '0';
        } else if (buttonPressed === '.') {
            activeNumber += '.';
        } else if (isNumber(buttonPressed)) {
            if (activeNumber === '0') activeNumber = buttonPressed;
            else activeNumber = activeNumber + buttonPressed;
        } else if (isOperator(buttonPressed)) {
            storedNumber = parseFloat(activeNumber);
            operation = buttonPressed;
            activeNumber = '';
        } else if (buttonPressed === '=') {
            activeNumber = operate(storedNumber, activeNumber, operation).toFixed(2);
            operation = null;
        }
        updateScreen(activeNumber);
    });
});

updateScreen = function (displayValue) {
    var displayValue = displayValue.toString();
    $('#screen').html(displayValue.substring(0, 10));
};

isNumber = function (value) {
    return !isNaN(value);
}

isOperator = function (value) {
    return value === '/' || value === 'x' || value === '+' || value === '-';
};

operate = function (a, b, operation) {
    a = parseFloat(a);
    b = parseFloat(b);
    console.log(a, b, operation);
    if (operation === '+') return a + b;
    if (operation === '-') return a - b;
    if (operation === 'x') return a * b;
    if (operation === '/') return a / b;
}
