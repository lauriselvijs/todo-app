import TodoInput from "../TodoInput";
import { fireEvent, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TodoMenu from "../TodoList";
import { render } from "../../__tests__/config/Store.config";

const setup = () => {
  const todoInput = screen.getByRole("textbox");
  return {
    todoInput,
  };
};

// you can also use beforeEach, beforeAll, afterEach, afterAll
// beforeEach(() => {
// });

// unit test
// test("on enter press if value givin", () => {
//   render(<TodoInput />);
//   const { todoInput } = setup();

//   userEvent.type(todoInput, "test");
//   userEvent.keyboard("{Enter}");

//   expect(todoInput).toHaveValue("");
// });

// integration test
test("on enter press if value givin", () => {
  render(
    <>
      <TodoInput />
      <TodoMenu />
    </>
  );
  const { todoInput } = setup();

  // default event
  // fireEvent.change(todoInput, {target: {value: 'a'}})
  // fireEvent.keyDown(todoInput, {key: 'Enter'})

  // more realistic event
  userEvent.type(todoInput, "test");
  userEvent.keyboard("{Enter}");

  expect(todoInput).toHaveValue("");

  const testTodo = screen.getByText(/test/i);

  expect(testTodo).toBeInTheDocument();
  expect(testTodo.className).toBe("todo-list-item");
  // only work for inline styles
  // expect(screen.getByRole(testTodo.className).toHaveStyle({
  //   textDecoration: "none",
  // });
});
