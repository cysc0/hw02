(function() {
    "use strict";
    
    // bind event listeners, run calculator
    function init() {
        initButtons();
        reset();
    }
    
    // (re-)init our state tracker for the calculator
    var state = {};
    function reset() {
        state.current = null; // current decimal value input
        state.loop = null;  // clone of state.current from 1 operator ago,
        // used for repeated += entry (incrementing)
        state.prevOperator = null;  // clone of state.operator from 1 turn ago,
        // used for repeated += entry (incrementing)
        state.previous = null; // previous value entered before operator
        state.operator = null; // current operator to apply
        state.result = null; // output of solve()
        updateDisplay();
    }
    
    // set up all buttons
    function initButtons() {
        var numButtons = document.getElementsByClassName("calcnum");
        for (var x = 0; x < numButtons.length; x++) {
            numButtons[x].addEventListener('click', processNum, false);
        }
        var opButtons = document.getElementsByClassName("calcop");
        for (var x = 0; x < opButtons.length; x++) {
            opButtons[x].addEventListener('click', processOp, false);
        }
    }
    
    // configure event handler for any numeric buttons (0-9, decimal)
    function processNum(e) {
        if (state.current  == null) {
            // first number in entry
            if (state.current !== 0 && e.target.value !== "0") {
                if (e.target.value === ".") { // prepend 0 for aesthetic
                    state.current = "0.";
                } else {
                    state.current = e.target.value;
                }
            }
        } else {
            // all subsequent digits
            if (e.target.value === ".") { // don't allow multiple dots
            if (!isDecimal(state.current)) {
                // coerce number input to concatenate: https://stackoverflow.com/a/1723724
                state.current = "" + state.current + e.target.value;
            }
        } else {
            state.current = "" + state.current + e.target.value;
        }
    }
    updateDisplay(state.current);
}

// configure event handlers for clear and all arithmetic buttons
// TODO: got a a little messy when accounting for edge case 3, cleanups needed
// would have been done better first time if we had thought of these edge cases before :(
function processOp(e) {
    if (e.target.value == "C") {
        reset();
    } else if (state.current !== null) {
        if (state.previous === null) {
            // Case 1: this occurs when user has entered the first number
            // and pressed some operator.
            state.operator = e.target.value;
            state.previous = state.current;
            state.current = null;
        } else {
            // Case 2: this occurs once the user has entered one number,
            // selected the operator, then entered the second number,
            // then has pressed another operator
            solve();
            updateDisplay(state.result);
            state.previous = state.result;
            state.loop = state.current;
            state.prevOperator = state.operator;
            state.current = null;
            state.operator = e.target.value;
        }
    } else if (state.operator === "+=" && state.operator === e.target.value) {
        // Case 3: this occurs when a user has entered a full equation
        // gotten the result, then keeps pressing +=
        // This is to simulate 3 x 3 = 9 = 27 = 81
        // aka it keeps applying the most recently applied operation
        state.current = state.loop;
        state.operator = state.prevOperator;
        solve();
        updateDisplay(state.result);
        state.previous = state.result;
        state.loop = state.current;
        state.current = null;
        state.operator = e.target.value;
    } else {
        // Case 4: if the user has entered an equation, pressed +=, then
        // clicked another operator
        state.operator = e.target.value;
    }
}

// to see if we already have a decimal point to avoid erroneous input
function isDecimal(input) {
    for (var x = 0; x < input.length; x++) {
        if (input.charAt(x) === ".") {
            return true;
        }
    }
    return false;
}

// generate ouptut
function solve() {
    if (state.operator === "+=") {
        state.result = parseFloat(state.previous) + parseFloat(state.current);
    } else if (state.operator === "-") {
        state.result = parseFloat(state.previous) - parseFloat(state.current);
    } else if (state.operator === "*" ) {
        state.result = parseFloat(state.previous) * parseFloat(state.current);
    } else if (state.operator === "/") {
        state.result = parseFloat(state.previous) / parseFloat(state.current);
    }
}

// update the DOM element representing the screen
function updateDisplay(display) {
    if (display == null) {
        document.getElementById("display").value = "0";
    } else {
        document.getElementById("display").value = display;
    }
}

// call init once page loaded
window.addEventListener('load', init, false);
})();