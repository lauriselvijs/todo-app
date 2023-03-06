import { createNewTodoPlaceholder } from "../constants/Todo.const";

describe("Todo", () => {
  it("should be able to create task", () => {
    cy.visit("/");
    cy.findByPlaceholderText(createNewTodoPlaceholder).type("Finnish project");
    cy.findByRole("button", { name: /check if task completed/i }).click();
    cy.findByPlaceholderText(createNewTodoPlaceholder).type("{enter}");
    cy.findByPlaceholderText(createNewTodoPlaceholder).should("have.value", "");
    cy.findByText("Finnish project").should("exist");
    cy.findByText("Finnish project")
      .findByRole("button", { name: /check if task completed/i })
      .click();
    // cy.get(".todo-list-item-completed").should(
    //   "have.css",
    //   "background-repeat",
    //   "no-repeat, no-repeat"
    // );
  });
});
