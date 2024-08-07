document.addEventListener("DOMContentLoaded", function () {
    const numbers = document.querySelectorAll(".number");
    const operators = document.querySelectorAll(".operators");
    const inputDisplay = document.getElementById("display");
    const outputDisplay = document.getElementById("output");

    numbers.forEach(number => {
        number.addEventListener("click", function () {
            if (inputDisplay.innerText === "0") {
                inputDisplay.innerText = number.value;
            } else {
                inputDisplay.innerText += number.value;
            }
        });
    });

    operators.forEach(operator => {
        operator.addEventListener("click", function () {
            switch (operator.id) {
                case "clear-display":
                    inputDisplay.innerText = '0';
                    break;
                case "clear":
                    inputDisplay.innerText = '0';
                    outputDisplay.innerText = '';
                    break;
                case "equals":
                    try {
                        const expression = inputDisplay.innerText.replace(/x/g, "*");
                        const result = eval(expression);
                        outputDisplay.innerText = inputDisplay.innerText;
                        inputDisplay.innerText = result;
                    } catch (error) {
                        console.log(error);
                        inputDisplay.innerText = 'Error';
                    }
                    break;
                case "add":
                case "subtract":
                case "divide":
                case "multiply":
                case "decimal":
                    const lastChar = inputDisplay.innerText.slice(-1)
                    if (operator.value === "decimal") {
                        if (!lastChar.match(/[+\-x*/]/) && !inputDisplay.innerText.includes('.')) {
                            inputDisplay.innerText += operator.value;
                        }
                    } else {
                        if (!["+", "-", "/", "x"].includes(lastChar)) {
                            inputDisplay.innerText += operator.value;
                        }
                    }
                    break;
                default:
                    break;

            };
        });
    });
});