import { rgb } from "./rgba.js";

function createEl(event) {
  const div = document.createElement("div");
  div.className = "box";
  div.style.backgroundColor = rgb();
  div.style.borderRadius = "55% 45% 100% 0% / 100% 37% 63% 0%";

  const randomNumber = Math.floor(Math.random() * 100 + 10);
  div.style.height = `${randomNumber}px`;
  div.style.width = `${randomNumber}px`;

  div.style.position = "absolute";
  div.style.left = `${event.x}px`;
  div.style.top = `${event.y}px`;

  document.body.appendChild(div);

  setTimeout(() => {
    div.remove();
  }, 3000);
}

export { createEl };
