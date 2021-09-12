let input1 = "3+3";
let input2 = "3-3";

allOperators = ["+", "-", "÷", "×"]

const getOperator = (input, allOperators) => {
    allOperators.forEach(el => {
        input
            .split("el") // split by test operator
            .join("") // join again
            .includes(el) // check if test operator was removed
    })
}



