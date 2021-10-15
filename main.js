import { createTitleComponent } from "./lib/titleComponent.js";
import { renderToDo } from "./lib/renderToDo.js";
import { createEnterToDo } from "./lib/enterToDo.js";

function createApp() {
  const appElement = document.querySelector("#app");

  const titleComponent = createTitleComponent();

  const enterToDo = createEnterToDo(renderToDo);

  appElement.append(titleComponent);
  appElement.append(enterToDo);
}

createApp();
