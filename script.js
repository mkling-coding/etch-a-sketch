const container = document.querySelector(".container");
const slider = document.querySelector(".slider");
const sliderOutput = document.querySelector("#sliderOutput");

// Sets default grid template
container.style.gridTemplate = "repeat(4, 1fr) / repeat(4, 1fr)";

// Sets default boxes
for (let j = 0; j < (slider.value * slider.value); j++) {
    let box = document.createElement("div");
    box.classList.add("box");
    container.appendChild(box);
    // Changes color of box whenever box is clicked
    box.addEventListener("click", function(e) {
        e.target.style.backgroundColor = "black";
    });
    // Changes color of box whenever mouse button is hovering over the box and mouse button is also held down
    box.addEventListener("mouseover", function(e) {
        if (e.buttons === 1) {
            e.target.style.backgroundColor = "black";
        }
    });
};

// Sets sliderOutput equal to slider input value
sliderOutput.textContent = `${slider.value} x ${slider.value}`;

// Changes slider output when bar is moved, adjusts grid to slider value, and adds event listeners to each box in the grid
slider.oninput = function() {
    container.innerHTML = "";
    sliderOutput.textContent = `${slider.value} x ${slider.value}`;
    container.style.gridTemplate = `repeat(${slider.value}, 1fr) / repeat(${slider.value}, 1fr)`;
    for (let j = 0; j < (slider.value * slider.value); j++) {
        let box = document.createElement("div");
        box.classList.add("box");
        container.appendChild(box);
        // Changes color of box whenever box is clicked
        box.addEventListener("click", function(e) {
            e.target.style.backgroundColor = "black";
        });
        // Changes color of box whenever mouse button is hovering over the box and mouse button is also held down
        box.addEventListener("mouseover", function(e) {
            if (e.buttons === 1) {
                e.target.style.backgroundColor = "black";
            }
        });
    };
}
