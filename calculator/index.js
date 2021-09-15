const doCalculation = input => {
    allOperators = ["+", "−", "÷", "×", "√"];
    let matchedOperator;
    allOperators.forEach(el => input.includes(el) ? matchedOperator = el : null);

    console.log(matchedOperator);
    return matchedOperator;

}



const keyEventListenerFunc = event => {
    //reference screen element
    let screenEl = document.getElementById("screen")

    let keyPressed = event.target.textContent;
    console.log(keyPressed)
    switch (keyPressed) {
        case "0":
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
        case ".":
        case "+":
        case "−":
        case "×":
        case "÷":
            //check if there's already an existing √() inside the Screen Element. Then put new number inside brackets
            if (screenEl.textContent.includes("√")) {
                console.log("It includes √()")
                let openBracketIndex = screenEl.textContent.indexOf("(");
                let closeBracketIndex = screenEl.textContent.indexOf(")");
                screenEl.textContent = `${screenEl.textContent.slice(0,openBracketIndex+1)}${keyPressed}${screenEl.textContent.slice(closeBracketIndex)}`
                
            } else {
                screenEl.textContent += keyPressed;
            }

            break;

        case "C":
            screenEl.textContent = "";
            break;

        case "√x":
            screenEl.textContent = `√(${screenEl.textContent})`;



        default:
            console.log("No matching cases found.");
            break;
    }
    console.log(screenEl.innerHTML)
    console.log(screenEl.textContent)
}












/* //runCalculation function from screen element input
const runCalculation = input => {
    //match operator
    allOperators = ["+", "−", "÷", "×", "√"];
    let matchedOperator;
    for (let operator of allOperators) {
        if (input.includes(operator)) {
            console.log(`The matched operator was ${operator}`);
            matchedOperator = operator;
        }
    }
    console.log(input)
    //perform calculation
    let output;
    if (matchedOperator === "√") {
        input = input.replace("(", "").replace(")", "")
    }
    let isFirstNumNegative = false;
    if (input[0] === "−") {
        isFirstNumNegative = true;
    }
    console.log()
    let inputSplit = input.split(matchedOperator)
    switch (matchedOperator) {
        case "+":
            inputSplit = inputSplit.map(el => parseFloat(el));
            output = inputSplit[0] + inputSplit[1];
            console.log(output);
            return output.toString();

        case "−":
            inputSplit = inputSplit.map(el => parseFloat(el));
            output = inputSplit[0] - inputSplit[1];
            console.log(output);
            return output.toString();

        case "÷":
            inputSplit = inputSplit.map(el => parseFloat(el));
            output = inputSplit[0] / inputSplit[1];
            console.log(output);
            return output.toString();

        case "×":
            inputSplit = inputSplit.map(el => parseFloat(el));
            output = inputSplit[0] * inputSplit[1];
            console.log(output);
            return output.toString();

        case "√":
            output = parseFloat(input.replace("√", ""));
            output = Math.sqrt(output);
            console.log(output);
            return output.toString();

        default:
            console.log("No matching conditions")
    }
} */

/* //define calculator key event listener function
let saveKeyPresses = [];

const keyEventListenerFunc = event => {
    let screenEl = document.getElementById("screen");
    let keyPressed = event.target.textContent;
    console.log(keyPressed)

    //saveKeyPresses.push(keyPressed);
    //console.log(saveKeyPresses)

    let numberKeys = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "+", "−", "×", "÷", "."];
    if (numberKeys.includes(keyPressed)) {
        screenEl.textContent += keyPressed;
    } else if (keyPressed === "C") {
        screenEl.textContent = "";
    } else if (keyPressed === "=") {
        screenEl.textContent = runCalculation(screenEl.textContent)
    } else if (keyPressed === "√x") {
        screenEl.textContent = `√(${screenEl.textContent})`
    }
} */

//render numberpad
let numberPadEl = document.getElementById("keypad");

let symbol_to_htmlcode = {
    "√": "&#8730",
    "÷": "&#247",
    "×": "&#215",
    "−": "&#8722",
    "+": "&#43",
    "=": "&#61"
};

let keys = [
    ["x<sup>2</sup>", "<span>&#8730</span>x", "C", "<span>&#247</span>"],
    ["7", "8", "9", "<span>&#215</span>"],
    ["4", "5", "6", "<span>&#8722</span>"],
    ["1", "2", "3", "<span>&#43</span>"],
    ["0", ".", "<span>&#61</span>"]
]


keys.forEach((keyRow, index) => {
    let rowDiv = document.createElement("div");
    numberPadEl.appendChild(rowDiv);
    rowDiv.id = "keyRow" + index.toString();
    rowDiv.class = "keyRow"

    rowDiv.style.display = "flex";
    rowDiv.style.flexDirection = "row";

    let keyRowEl = document.getElementById(rowDiv.id);
    keyRow.forEach(key => {
        //create new div element
        let keyDiv = document.createElement("button");
        // add it within keyRow
        keyRowEl.appendChild(keyDiv);
        // add value to newly created div
        keyDiv.innerHTML += key;
        //give it a class name
        keyDiv.class = "numberPadKey"
        keyDiv.id = key;

        //Add styling to keyDiv and numberPadKey divs
        keyDiv.style.margin = "auto";
        keyDiv.style.padding = "10px";
        keyDiv.style.borderStyle = "solid";
        keyDiv.style.textAlign = "center";
        keyDiv.style.width = "50px"
        keyDiv.style.height = "50px";
        //add event listener
        keyDiv.addEventListener("click", event => keyEventListenerFunc(event))
    })
})

// increase padding on 0, . and = keys
let keysStylesToChange = [
    document.getElementById("0"),
    document.getElementById("."),
    document.getElementById("<span>&#61</span>")
];
keysStylesToChange.forEach(keyToEdit => {
    keyToEdit.style.width = "70px"
})











