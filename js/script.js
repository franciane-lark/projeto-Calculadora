const previousOperationText = document.querySelector("#previous-operation")
const currentOperationText = document.querySelector("#current-operation")
const buttons = document.querySelectorAll("#buttons-container button")

class Calculator {
    constructor(previousOperationText, currentOperationText){
        this.previousOperationText = previousOperationText
        this.currentOperationText = currentOperationText
        this.currentOperationText = ""
    }
    // add digit to calculator screen
    addDigit(digit){
        //check if current operation alredy has a dot
        if(digit === "." && this.currentOperationText.innerText(".")){
            return;
        }
        this.currentOpration = digit
        this.updateScreen();
    }
    // Process all calculator operations
    processOperation(operation){

        //Get current and previos value
        let operationVal;
        const previos = +this.previousOperationText.innerText
        const current = +this.currentOperationText.innerText

        switch(operation){
            case "+":
                operationValue = previous + current;
                this.updateScreen(operationValue, operation, current, previous);
                break;
            default:
                return;
        }
    }
    //Change values of the calculator screen
    updateScreen(
        operationValue = null, 
        operation = null, 
        current = null, 
        previous = null
        ) {
        if(operationValue === null){
            this.currentOperationText.innerText += this.currentOperation;
        }else{
            //Check if value is zero, if it is just add current value
            if(previous === 0){
                operationValue = current
            }

            //Add current value to previous
            this.previousOperationText.innerText = `${operationValue} ${operation}`
            this.currentOperationText.innerText = "";
        }
    }
}


const calc = new Calculator(previousOperationText, currentOperationText)

buttons.forEach((btn) =>{
    btn.addEventListener("click", (e) => {
        const value = e.target.innerText;
        
        if(+value >= 0 || value === "."){
            calc.addDigit(value);
        }else{
            console.log("Op: " + value);
        }
    });
});