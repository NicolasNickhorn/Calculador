const setDisplay = document.getElementById("display");

function setNumbers(number) {
    setDisplay.textContent += number;
}

function setOperator(operator) {
    const lastOperator = setDisplay.textContent.slice(-1);

    if(["+", "-", "/", "*"].includes(lastOperator)){
        return;
    }

    setDisplay.textContent += operator;
}

function clearDisplay() {
    setDisplay.textContent = "";
}

function calcResult() {
    try{
        setDisplay.textContent = eval(setDisplay.textContent);
    } catch {
        setDisplay.textContent = "Error"
    }
}
