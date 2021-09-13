let input1 = "3+3";
let input2 = "3-3";



/* const calcFunc = input => {
    const getOperator = input => {
        allOperators = ["+", "-", "÷", "×"]
        for (let operator of allOperators) {
            let splitInput = input.split(operator);
            if (!splitInput.includes("+" || "-" || "×" || "÷")) {
                console.log(`The operator detected is ${operator}.`)
                return operator
            }
        }
    }

    let operation = getOperator(input);
    let valInput = input.split(operation);
    let output = 0;
    switch (operation) {
        case "+":
            output = parseFloat(valInput[0]) + parseFloat(valInput[1])
            break
        case "-":
            output = parseFloat(valInput[0]) - parseFloat(valInput[1])
            break
        case "×":
            output = parseFloat(valInput[0]) * parseFloat(valInput[1])
            break
        case "÷":
            output = parseFloat(valInput[0]) / parseFloat(valInput[1])
            break
        default:
            output = "No recognised operator found"
    }
    console.log(output)
} */



/* const func = input => {
    if (input.includes("+")) {
        let vals = input1.replace("+", "")
        console.log(vals)
        console.log(vals.includes("+" | "-" | "×" | "÷"))
    }
} */


calcFunc(input2)



