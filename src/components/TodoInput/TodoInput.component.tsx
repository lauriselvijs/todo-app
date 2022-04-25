import React, { useState, ChangeEvent, KeyboardEvent } from "react";
import "./TodoInput.style.scss";
import TodoCheckmark from "../TodoCheckmark";
import { DARK_MODE } from "../../constants/DarkMode.const";

const TodoInput = () => {
  const [todoInput, setTodoInput] = useState<string>("");
  const [active, setActive] = useState<boolean>(true);

  const onTodoCheckmarkClick = () => {
    setActive(!active);
  };

  const onTodoInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setTodoInput(e.target.value);
  };

  const handleAddTodoOnEnterKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      console.log("enter pressed");
    }
  };

  return (
    <div
      className={DARK_MODE ? "todo-input-dark-mode" : "todo-input"}
      title="Press &ldquo;Enter&ldquo; to Add Todo"
    >
      <TodoCheckmark
        todoActive={active}
        onTodoCheckmarkClick={onTodoCheckmarkClick}
      />
      <input
        type="text"
        placeholder="Create a new todo..."
        value={todoInput}
        onChange={onTodoInputChange}
        className="todo-input-field"
        onKeyPress={handleAddTodoOnEnterKeyPress}
      />
    </div>
  );
};

export default TodoInput;
