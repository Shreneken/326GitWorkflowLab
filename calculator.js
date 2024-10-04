

// Append number or operator to the display
function appendToDisplay(value) {
    let display = document.getElementById('display');

    display.value += value;
}

// Clear the entire display
function clearDisplay() {
    let display = document.getElementById('display');

    display.value = '';
}

// Delete the last character from the display
function deleteLast() {
    let display = document.getElementById('display');

    display.value = display.value.slice(0, -1);
}

// Calculate and show the result
function calculateResult() {
    let display = document.getElementById('display');

    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}

// TODO: Fix the square root function not displaying
// When used on calculator html , the displayElement should be the display object
function calculateSquareRoot(displayElement) {
    displayElement.value = Math.sqrt(displayElement.value)
}

// TODO: Implement square function
function calculateSquare(displayElement) {
    displayElement.value = Math.pow(displayElement.value, 2)
}

// BUG: FIX reciprocal function
function calculateReciprocal() {
    // Hint: Reciprocal is 1/x
    display.value = 1-value;
}
module.exports = {
    calculateSquareRoot,
    calculateSquare,
};


// TODO: Implement memory storage functionality
let memory = 0;

function memoryStore() {
    // Hint: Store the current value in memory
}

function memoryRecall() {
    // Hint: Recall the stored memory value
}

function memoryClear() {
    // Hint: Clear the memory
}
