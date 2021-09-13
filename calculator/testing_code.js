let testInput1 = "3+3";
let testInput2 = "3-3";
let testInput3 = "4×4";
let testInput4 = "8÷5";


allOperators = ["+", "-", "÷", "×"];

const getOperator = input => {
    let matchedOperator;
    for (let operator of allOperators) {
        if (input.includes(operator)) {
            console.log(`The matched operator was ${operator}`);
            matchedOperator = operator;
        }
    }
    return matchedOperator;
}

const runCalculation = input => {
    let matchedOperator = getOperator(input);
    let output;
    let inputSplit = input.split(matchedOperator).map(value => parseFloat(value));
    switch (matchedOperator) {
        case "+":
            output = inputSplit[0] + inputSplit[1];
            console.log(output);
            return output;

        case "-":
            output = inputSplit[0] + inputSplit[1];
            console.log(output);
            return output;

        case "÷":
            output = inputSplit[0] + inputSplit[1];
            console.log(output);
            return output;

        case "×":
            output = inputSplit[0] + inputSplit[1];
            console.log(output);
            return output;

        default:
            console.log("No matching conditions")
    }
}


runCalculation(testInput1);
runCalculation(testInput2);
runCalculation(testInput3);
runCalculation(testInput4);





