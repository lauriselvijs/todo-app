import TodoInput from "../TodoInput";
import { cleanup, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TodoList from "../TodoList";
import { renderWithProviders } from "../../tests/config/Store.config";

jest.mock("../../hooks/Media", () => ({
  useMobile: () => true,
}));

const setup = () => {
  const todoInput = screen.getByRole("textbox", {
    name: "Press &ldquo;Enter&ldquo; to add new task",
  });
  return {
    todoInput,
  };
};

describe("Todo input", () => {
  it("should clear todo input when enter pressed", async () => {
    renderWithProviders(
      <>
        <TodoInput />
        <TodoList />
      </>
    );

    const { todoInput } = setup();

    await userEvent.type(todoInput, "My first task");
    await userEvent.keyboard("{Enter}");

    expect(todoInput).toHaveValue("");

    cleanup();
  });

  it("after pressing enter should display user todo on screen", async () => {
    renderWithProviders(
      <>
        <TodoInput />
        <TodoList />
      </>
    );
    const { todoInput } = setup();

    await userEvent.type(todoInput, "My first task");
    await userEvent.keyboard("{Enter}");

    const testTodo = await screen.findByText(/My first task/i);

    expect(testTodo).toBeInTheDocument();

    cleanup();
  });
});
