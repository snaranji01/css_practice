





//render numberpad
let numberPadEl = document.getElementById("keypad");
let numberPad2El = document.getElementById("keypad2");

let keys = [
    ["x2", "sqrt", "C", "/"],
    ["7", "8", "9","x"],
    ["4", "5", "6", "-"],
    ["1", "2", "3", "+"],
    ["0", ".", "="]
]

/* let keys_allrow = [...keys].flat();
console.log(keys_allrow) */


//define event listeners
const onClickFunction = (input) => console.log(input)


keys.forEach((keyRow, index) => {
    let rowDiv = document.createElement("div");
    numberPadEl.appendChild(rowDiv);
    rowDiv.id = "keyRow"+index.toString();
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
    })
})



// increase padding on 0, . and = keys
let keysStylesToChange = [
    document.getElementById("0"),
    document.getElementById("."),
    document.getElementById("=")
];
keysStylesToChange.forEach(keyToEdit => {
    keyToEdit.style.width = "70px"
})

// add event listener
/* document.querySelector(".numberPadKey").addEventListener("click", event => {
    console.log(event.target)
})
 */












/* let numberPadEl = document.getElementById("keypad");
[...new Array(10).keys()]
    .forEach(element => {
        let div = document.createElement("div");
        numberPadEl.appendChild(div);
        div.innerHTML += element;
        div.class = "numberPadKey";
    })
 */
