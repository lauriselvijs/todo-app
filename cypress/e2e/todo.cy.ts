import { createNewTodoPlaceholder } from "../constants/Todo.const";

describe("Todo", () => {
  beforeEach(() => {
    cy.visit("/");
  });


  it("should be able to create task", () => {
    cy.findByPlaceholderText(createNewTodoPlaceholder).type("Finnish project");
    cy.findByPlaceholderText(createNewTodoPlaceholder).type("{enter}");

    cy.findByPlaceholderText(createNewTodoPlaceholder).should("have.value", "");
    cy.findByText("Finnish project").should("exist");

    cy.findByText("Finnish project")
      .findByRole("button", { name: /check if task completed/i })
      .click();

    cy.findByText("Finnish project")
      .findByRole("button", { name: /check if task completed/i }).should(
      "have.css",
      "background-repeat",
      "no-repeat, no-repeat"
    );
  });
});
