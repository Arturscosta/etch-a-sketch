container = document.querySelector("#container");

let num = 32;

let canvasSize = num * num;

for (i = 0; i < canvasSize; i++) {
  newDiv = document.createElement("div");
  newDiv.style.flex = `1 1 calc(100% / (${num}))`;

  newDiv.style.aspectRatio = "1/1";

  newDiv.addEventListener("mouseover", (e) => {
    e.target.style.backgroundColor = "red";
  });

  container.appendChild(newDiv);
}
