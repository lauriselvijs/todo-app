
describe("Todo", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should be able to create task", () => {
    cy.addTodo();
    cy.getTodoInput().type("{enter}");

    cy.getTodoInput().should("have.value", "");
    cy.getTodo().should("exist"); 

    cy.findByTestId(/todo-list-item/i).within((_todo) => {
      cy.findByRole("button", { name: /check if task completed/i }).click();

      cy.getTodo().should("have.css", "text-decoration", "line-through solid rgb(147, 148, 165)")

    });
  });
});
