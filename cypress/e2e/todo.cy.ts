import {
  createNewTodoPlaceholder,
  finishProjectTodo,
  todoCheckMark,
} from "../constants/Todo.const";

describe("Todo", () => {
  it("should be able to create task", () => {
    cy.visit("/");
    cy.findByPlaceholderText(createNewTodoPlaceholder).type("Finnish project");
    cy.findByTestId(todoCheckMark).click();
    cy.findByPlaceholderText(createNewTodoPlaceholder).type("{enter}");
    cy.findByPlaceholderText(createNewTodoPlaceholder).should("have.value", "");
    cy.findByRole("button", { name: finishProjectTodo }).should("exist");
    cy.findByRole("button", { name: finishProjectTodo }).should(
      "have.css",
      "text-decoration",
      "line-through solid rgb(210, 211, 219)"
    );
    cy.get(".todo-list-item-completed")
      .findByTestId(todoCheckMark)
      .should("have.css", "background-repeat", "no-repeat, no-repeat");
  });
});
