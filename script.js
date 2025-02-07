function changeMode() {
    const modeSelector = document.getElementById('modeSelector');
    const scientificButtons = document.querySelector('.scientific-buttons');

    if (modeSelector.value === 'scientific') {
        scientificButtons.style.display = 'grid';
    } else {
        scientificButtons.style.display = 'none';
    }
}

function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;
}

function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '';
}

function deleteLast() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function calculate() {
    const display = document.getElementById('display');
    try {
        let expression = display.value;

        // Replace custom functions with JavaScript equivalents
        expression = expression.replace(/sqrt\(/g, 'Math.sqrt(');
        expression = expression.replace(/pow\(/g, 'Math.pow(');
        expression = expression.replace(/sin\(/g, 'Math.sin(');
        expression = expression.replace(/cos\(/g, 'Math.cos(');
        expression = expression.replace(/tan\(/g, 'Math.tan(');
        expression = expression.replace(/log\(/g, 'Math.log10(');
        expression = expression.replace(/ln\(/g, 'Math.log(');
        expression = expression.replace(/π/g, 'Math.PI');

        // Evaluate the expression safely
        display.value = eval(expression);
    } catch (error) {
        console.error("Calculation error:", error);  // Log the error in the console
        display.value = 'Error';
    } finally {
        console.log("Calculation attempted"); // Ensures execution is completed
    }
}
