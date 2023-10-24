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
    box.addEventListener("click", function(e) {
        e.target.style.backgroundColor = "black";
    });
};

// Sets sliderOutput equal to slider input value
sliderOutput.textContent = `${slider.value} x ${slider.value}`;

// Changes slider output when bar is moved and adjusts grid to slider value
slider.oninput = function() {
    container.innerHTML = "";
    sliderOutput.textContent = `${slider.value} x ${slider.value}`;
    container.style.gridTemplate = `repeat(${slider.value}, 1fr) / repeat(${slider.value}, 1fr)`;
    for (let j = 0; j < (slider.value * slider.value); j++) {
        let box = document.createElement("div");
        box.classList.add("box");
        container.appendChild(box);
        box.addEventListener("click", function(e) {
            e.target.style.backgroundColor = "black";
        });
    };
}

// Adds event listeners to each box
const addListenerToBox = (e) => {
    console.log(e);
};
