const doCalculation = input => {
    allOperators = ["+", "−", "÷", "×", "√","sup"];
    let matchedOperator;
    allOperators.forEach(el => input.includes(el) ? matchedOperator = el : null);
    
    let [splitInput, output] = ["",""];
    console.log(matchedOperator);
    switch (matchedOperator) {
        case "+":
            splitInput = input.split(matchedOperator).map(el => parseFloat(el));
            output = splitInput[0] + splitInput[1]
            break
        
        case "−":
            splitInput = input.split(matchedOperator).map(el => parseFloat(el))
            output = splitInput[0] - splitInput[1]
            break
        
        case "×":
            splitInput = input.split(matchedOperator).map(el => parseFloat(el))
            output = splitInput[0] * splitInput[1]
            break

        case "÷":
            splitInput = input.split(matchedOperator).map(el => parseFloat(el))
            output = splitInput[0] / splitInput[1]
            break
        
        case "√":
            output = input
                        .replace("(","")
                        .replace(")","")
                        .replace(" ","")
                        .replace("√","")
                        .trim()
            output = Math.sqrt(parseFloat(output));
            console.log(output)
            break
        
        case "sup":
            output = input.replace("<sup>2</sup>","");
            output = parseFloat(output);
            output = output * output;
            console.log(output)
            break


        default:
            console.log("No calculation match found.")
            break;
    }
    return output

}



const keyEventListenerFunc = event => {
    //reference screen element
    let screenEl = document.getElementById("screen")
    
    let keyPressed = event.target.textContent;
    console.log(`Text content: ${keyPressed}`)
    console.log(`InnerHTML: ${event.target.innerHTML}`)
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
                screenEl.textContent = `${screenEl.textContent.slice(0,openBracketIndex+1)}${screenEl.textContent.slice(openBracketIndex+1,closeBracketIndex)}${keyPressed}${screenEl.textContent.slice(closeBracketIndex)}`
                
            } else {
                screenEl.textContent += keyPressed;
            }

            break;

        case "C":
            screenEl.textContent = "";
            break;

        case "√x":
            screenEl.textContent = `√(${screenEl.textContent})`;
            break
        
        case "x2":
            screenEl.innerHTML = `${screenEl.innerHTML}<sup>2</sup>`;
            break

        case "=":
            if (screenEl.innerHTML.includes("sup")) {
                screenEl.innerHTML = doCalculation(screenEl.innerHTML)
            } else {
                screenEl.textContent = doCalculation(screenEl.textContent)
            }
            
            break

        default:
            console.log("No matching cases found.");
            break;
    }
}













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











