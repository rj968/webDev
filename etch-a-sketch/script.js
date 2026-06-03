const GRID_SIZE = 1000; // size of grid in pixels
const MAX_SIDE = 100;

const gridEl = document.querySelector(".grid");
const changeGridEl = document.querySelector(".change-grid")
const clearGridEl = document.querySelector(".clear-grid")


function createGrid(side)
{
    let box_size = GRID_SIZE / side;

    for(let i = 0; i < side; i++)
    {
        let row = document.createElement("div")
        row.classList.add("row");
        for(let j = 0; j < side; j++)
        {
            let box = document.createElement("div")
            box.classList.add("box")
            box.style.height = box_size + "px";
            box.style.width = box_size + "px";
            row.appendChild(box)
        }
        gridEl.appendChild(row);
    }
}

function colorGridMouse()
{
    gridEl.addEventListener("mouseover", 
        (event) => {
            if(!event.target.classList.contains("box"))
                return;
            event.target.style.backgroundColor = "red";
        }
    )
}

function isIntegerInput(input) 
{
  // Eliminate empty strings or whitespace-only strings which coerce to 0
  if (typeof input === 'string' && input.trim() === '') {
    return false;
  }
  // Check if the forced number conversion is finite
  return Number.isInteger(Number(input));
}

function getSideLength()
{    
    let side = window.prompt("Enter the number of boxes in each row (Max = 100): ");
    if(!isIntegerInput(side))
        return alert("Invalid input. Try again.");
    side = Number(side);
    if(side <= 0 || side > MAX_SIDE)
        return alert("Invalid input. Try again.")
    return side
}

let side = 16;
createGrid(side);
colorGridMouse();

changeGridEl.onclick = getSideLength;

clearGridEl.onclick = function() {
    console.log("click")
};