import { createElement } from "./elements.js";

export function createTitleComponent() {
  const titleElement = createElement(
    "h1",
    {
      className: "title",
    },
    ["ToDo List"]
  );

  return titleElement;
}
