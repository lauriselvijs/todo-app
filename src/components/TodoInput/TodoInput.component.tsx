import React, { useState, ChangeEvent, KeyboardEvent } from "react";
import "./TodoInput.style.scss";
import TodoCheckmark from "../TodoCheckmark";
import { DARK_MODE } from "../../constants/DarkMode.const";
import {
  addTodo,
  setNewActiveTodoInput,
} from "../../store/features/TodoItems/todoItems.slice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/app/store";

const TodoInput = () => {
  const [todoInput, setTodoInput] = useState<string>("");
  const todoActiveInput = useSelector(
    (state: RootState) => state.todos.todoActiveInput
  );

  const dispatch = useDispatch();

  const onTodoInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setTodoInput(e.target.value);
  };

  const handleAddTodoOnEnterKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && todoInput) {
      dispatch(addTodo({ todoMsg: todoInput, todoActive: todoActiveInput }));
      // !todoActiveInput && dispatch(setNewActiveTodoInput(true));
      setTodoInput("");
    }
  };

  return (
    <div
      className={DARK_MODE ? "todo-input-dark-mode" : "todo-input"}
      title="Press &ldquo;Enter&ldquo; to Add Todo"
    >
      <TodoCheckmark newActiveTodo={true} todoActive={todoActiveInput} />
      <input
        type="text"
        placeholder={"Create a new todo..."}
        value={todoInput}
        onChange={onTodoInputChange}
        className="todo-input-field"
        onKeyPress={handleAddTodoOnEnterKeyPress}
      />
    </div>
  );
};

export default TodoInput;
