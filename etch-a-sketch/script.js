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

function getRandomColor()
{
    return Math.trunc((Math.random() * 16 * 16 * 16 * 16 * 16 * 16)).toString(16);
}

function colorGridMouse()
{
    gridEl.addEventListener("mouseover", 
        (event) => {
            if(!event.target.classList.contains("box"))
                return;
            
            let color = "#" + getRandomColor(); 
            event.target.style.backgroundColor = color ;

            // reduce opacity to make the element darker with each pass.
            let opacity = parseFloat(getComputedStyle(event.target).opacity);
            opacity = Math.max(0, opacity - 0.1); // Defensively prevent it from going negative as that may cause problem

            event.target.style.opacity = opacity;
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
    {
        alert("Invalid input. Try again.");
        return;
    }
    side = Number(side);
    if(side <= 0 || side > MAX_SIDE)
        return alert("Invalid input. Try again.")
    return side
}

function removeGrid()
{
    let rows  = document.querySelectorAll(".row");
    for(let row of rows)
        row.remove();
}

function changeGrid()
{
    let side = getSideLength();
    if(!side)
        return ;
    removeGrid();

    createGrid(Number(side));

}

function clearGrid()
{
    let boxes = document.querySelectorAll(".box");
    for(let box of boxes)
        box.style.backgroundColor = ""
}

let side = 16;
createGrid(side);
colorGridMouse();

changeGridEl.onclick = changeGrid;

clearGridEl.onclick = clearGrid;