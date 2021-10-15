import { createElement } from "./elements.js";

export function createFormElement(onSubmit) {
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

  const formElement = createElement(
    "form",
    {
      className: "form",
      onsubmit: function (event) {
        event.preventDefault();
        onSubmit(toDoInput.value);
      },
    },
    [toDoInput, submitButton]
  );

  return formElement;
}
