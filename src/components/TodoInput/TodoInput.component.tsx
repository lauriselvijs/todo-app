import React, { useState, ChangeEvent, KeyboardEvent } from "react";
import "./TodoInput.style.scss";
import TodoCheckmark from "../TodoCheckmark";
import { DARK_MODE } from "../../constants/DarkMode.const";
import { addTodo } from "../../store/features/TodoItems/todoItems.slice";
import { useDispatch } from "react-redux";

const TodoInput = () => {
  const [todoInput, setTodoInput] = useState<string>("");
  const [todoActive, setTodoActive] = useState<boolean>(true);

  const dispatch = useDispatch();

  const onTodoCheckmarkClick = () => {
    setTodoActive(!todoActive);
  };

  const onTodoInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setTodoInput(e.target.value);
  };

  const handleAddTodoOnEnterKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && todoInput) {
      console.log(todoActive);
      dispatch(addTodo({ todoMsg: todoInput, todoActive }));
    }
  };

  return (
    <div
      className={DARK_MODE ? "todo-input-dark-mode" : "todo-input"}
      title="Press &ldquo;Enter&ldquo; to Add Todo"
    >
      <TodoCheckmark
        todoActive={todoActive}
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
