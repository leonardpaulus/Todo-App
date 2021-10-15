import { createEnterToDo } from "./enterToDo.js";

export function renderToDo(toDo) {
  appElement.removeChild(enterToDo);

  const toDoPage = createToDo(toDo);

  appElement.append(toDoPage);

  return toDoPage;
}
