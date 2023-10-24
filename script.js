const container = document.querySelector(".container");
const slider = document.querySelector(".slider");
const sliderOutput = document.querySelector("#sliderOutput");
const color = document.querySelector("#color")
const p = document.querySelector("p")
const eraser = document.querySelector("#eraser")
const clear = document.querySelector("#clear")
let eraserOn = false;

color.value = "#000002";

// Sets default grid template
container.style.gridTemplate = "repeat(4, 1fr) / repeat(4, 1fr)";

// Sets default boxes
for (let j = 0; j < (slider.value * slider.value); j++) {
    let box = document.createElement("div");
    box.classList.add("box");
    container.appendChild(box);
    // Changes color of box whenever box is clicked
    box.addEventListener("click", function(e) {
        if (eraserOn === false) {
            e.target.style.backgroundColor = color.value;
        } else {
            e.target.style.backgroundColor = "#ffffff";
        }
    });
    // Changes color of box whenever mouse button is hovering over the box and mouse button is also held down
    box.addEventListener("mouseover", function(e) {
        if (e.buttons === 1 && eraserOn === false) {
            e.target.style.backgroundColor = color.value;
        } else if (e.buttons === 1 && eraserOn === true) {
            e.target.style.backgroundColor = "#ffffff";
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
            if (eraserOn === false) {
                e.target.style.backgroundColor = color.value;
            } else {
                e.target.style.backgroundColor = "#ffffff";
            }
        });
        // Changes color of box whenever mouse button is hovering over the box and mouse button is also held down
        box.addEventListener("mouseover", function(e) {
            if (e.buttons === 1 && eraserOn === false) {
                e.target.style.backgroundColor = color.value;
            } else if (e.buttons === 1 && eraserOn === true) {
                e.target.style.backgroundColor = "#ffffff";
            }
        });
    };
}

// Toggle eraser
eraser.addEventListener("click", function(e) {
    if (eraser.classList.contains("active")) {
        eraser.classList.add("inactive")
        eraser.classList.remove("active")
        eraserOn = false;
    } else {
        eraser.classList.add("active")
        eraser.classList.remove("inactive")
        eraserOn = true;
    }
})

// Clears canvas when button is clicked
clear.addEventListener("click", function(e) {
    document.querySelectorAll(".box").forEach((boxDiv) => boxDiv.style.backgroundColor = "#ffffff");
});
