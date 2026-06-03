let side = 16
const grid = document.querySelector(".grid");
let grid_size = 1000;
let box_size = grid_size / side;

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
    grid.appendChild(row)
}

grid.addEventListener("mouseover", 
    (event) => {
        if(!event.target.classList.contains("box"))
            return;
        event.target.style.backgroundColor = "red";
    }
)

