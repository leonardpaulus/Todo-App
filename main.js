import { createTitleComponent } from "./lib/titleComponent.js";
import { createFormElement } from "./lib/createFormElement.js";
import { createElement } from "./lib/elements.js";

function createApp() {
  const appElement = document.querySelector("#app");

  const titleComponent = createTitleComponent();

  const enterToDo = createFormElement(function (task) {
    let taskList = createElement("div", { className: "tasklist" }, [
      createElement("label", { className: "tasks" }, [
        task,
        createElement("input", { type: "checkbox" }),
      ]),
    ]);
    appElement.append(taskList);
  });

  appElement.append(titleComponent);
  appElement.append(enterToDo);
}

createApp();
