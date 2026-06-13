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

function squareRoot(){
    setDisplay.textContent = Math.sqrt(setDisplay.textContent);
}

function eraseLast(){
    setDisplay.textContent = setDisplay.textContent.slice(0, -1);
}



document.addEventListener("keydown", (event) =>{

    if (event.key === "/") {
        event.preventDefault();
    }

    switch(event.key){
        case "Enter":
            calcResult();
            break;

        case "Backspace":
            eraseLast();
            break;

        case "c":
        case "C":
        case "Escape":
            clearDisplay();
            break;

        case "+":
        case "-":
        case "*":
        case "/":
            setOperator(event.key);
            break;

        case ".":
            setNumbers(".");
            break;

        case "r":
        case "R":
            squareRoot();
            break;

        default:
            if(!isNaN(event.key)){
                setNumbers(event.key);
            }
    }
})
