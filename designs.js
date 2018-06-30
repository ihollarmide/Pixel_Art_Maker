// Select color input
const color = document.getElementById("colorPicker");
// Select size input
const height = document.getElementById("inputHeight");
const width = document.getElementById("inputWidth");
const sizePicker = document.getElementById("sizePicker");
const canvas = document.getElementById("pixelCanvas");
// Select clear button input
const clear = document.getElementById("clearCell");

//function to create Grid cells
function makeGrid() {
    let tr, td;
    //create table: (for loop runs from inside, then outside). create td, append to tr; create tr, tr to table(canvas).
    for (let i = 0; i < height.value; i++) {
        tr = document.createElement("tr");
        canvas.appendChild(tr);
        for (let j = 0; j < width.value; j++) {
            td = document.createElement("td");
            tr.appendChild(td);
        }
    }
}

//function to add colour to the Grid Cells
function cellColor() {
    //check which TD is clicked, change its color (Udacity Lesson 21: 5. Avoid Too Many Events talks about this)
    canvas.addEventListener("click", function(e) {
        e.preventDefault();
        // check using capital letters
        if (e.target.nodeName === "TD") {
            e.target.style.backgroundColor = color.value;
        }
    })
}

//function to clear created Grid cells
function clearGrid() {
    while (canvas.firstChild) {
        canvas.removeChild(canvas.firstChild);
    }
}

// To reset the color of a cell to its default value without reloading
function resetColor() {
    canvas.addEventListener("dblclick", function(e) {
        e.preventDefault();
        // check using capital letters
        if (e.target.nodeName === "TD") {
            e.target.style.backgroundColor = "transparent";
        }
    })
}

// When size is submitted by the user, call makeGrid()
sizePicker.addEventListener("submit", function(e) {
    e.preventDefault();
    clearGrid();
    makeGrid();
    cellColor();
})


// When a cell is double clicked by the user, call resetColor()
canvas.addEventListener("dblclick", function(e) {
    e.preventDefault();
    resetColor();
})


// When Clear Grid button is clicked, call clearGrid()
clear.addEventListener("click", function(e) {
    e.preventDefault();
    clearGrid();
})