container = document.querySelector("#container");
changeCanvas = document.querySelector("#canvas-size");
curSize = document.querySelector("p");

changeCanvas.addEventListener("click", () => {
  num = Number(prompt("Choose a canvas size (ex: 16)"));
  while (num <= 0 || num > 100 || Number.isNaN(num) || null || num == "") {
    num = Number(prompt("Invalid number, choose a canvas size (ex: 16)"));
  }
  canvasSize = num * num;
  while (container.hasChildNodes()) {
    container.removeChild(container.firstChild);
  }
  createCanvas();
});

let num = 32;

let canvasSize = num * num;

function createCanvas() {
  for (i = 0; i < canvasSize; i++) {
    const newDiv = document.createElement("div");
    newDiv.style.flex = `1 1 calc(100% / (${num}))`;

    newDiv.style.aspectRatio = "1/1";

    newDiv.addEventListener("mouseover", (e) => {
      e.target.style.backgroundColor = "red";
    });

    container.appendChild(newDiv);
    curSize.innerText = "Current size: " + num + "x" + num;
  }
}

createCanvas();

curSize.innerText = "Current size: " + num + "x" + num;
