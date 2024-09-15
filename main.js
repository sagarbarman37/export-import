import { rgba } from "./rgba.js";
import { createEl } from "./element.js";

document.body.style.backgroundColor = rgba();

document.addEventListener("click", () => {
  setTimeout(() => {
    location.reload();
  }, 200);
});

document.addEventListener("mousemove", createEl);
