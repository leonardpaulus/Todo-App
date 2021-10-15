import { createElement } from "./elements.js";

export function createEnterToDo(toDo) {
  const toDoInput = createElement("input", {
    type: "text",
    placeholder: "Enter your task here",
  });

  const submitButton = createElement(
    "button",
    {
      className: "submitButton",
      type: "submit",
    },
    ["Submit"]
  );
  /* 
  const formElement = createElement(
    "form",
    {
      className: "form",
      onsubmit: function (event) {
        event.preventDefault();
        toDo(toDoInput.value);
      },
    },
    [toDoInput, submitButton]
  );

  return formElement; */

  return toDoInput;
}
