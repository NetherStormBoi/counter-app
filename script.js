const clearBtn = document.getElementById("clear-btn")

// 1. Initialise the count as 0
let count = 0

// 2. Grab the HTML element where we want to show the number
// We use the ID "count-el" we created in HTML
let countEl = document.getElementById("count-el") //Note: countEl is an object representing entire <h2> tag, thats why
//you cannot add/subtract directly cos its not an integer

// 3. Create a function ( a command ) that runs when button is clicked
function increment() {
    count = count + 1; // add 1 to the count
    countEl.innerText = count; // Change the text on screen to the new count

}

clearBtn.addEventListener('dblclick', function() {
    saveEl.textContent = ""
    countEl.innerText = 0;
    count = 0;

})
// 1. grab the save-el paragraph and store it in a variable
let saveEl = document.getElementById("save-el")

function save() {
    // 2. create a variable that contains the count AND a dash
    let countStr = count + " - ";

    // 3. add this string to the paragraph's existing text
    // note: we use "+=" which means "keep what is there AND add this new stuff"
    saveEl.textContent += countStr;

    // optional: reset the count back to 0 for the next batch
    countEl.innerText = 0;
    count = 0;

}

