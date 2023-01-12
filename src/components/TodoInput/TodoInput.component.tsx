import { useState, ChangeEvent, KeyboardEvent } from "react";
import { bindActionCreators } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

import TodoCheckmark from "../TodoCheckmark";
import { RootState } from "../../store/app/store";
import { todoActions, todoSliceName } from "../../store/features/Todo";
import { useAppDispatch } from "../../hooks/Store";

import styles from "./TodoInput.style.module.scss";

const TodoInput = () => {
  const [todoInput, setTodoInput] = useState<string>("");
  const { taskInputActive } = useSelector(
    (state: RootState) => state[todoSliceName]
  );
  const dispatch = useAppDispatch();
  const { taskAdded, taskInputSelected } = bindActionCreators(
    todoActions,
    dispatch
  );

  const onTodoInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setTodoInput(e.target.value);
  };

  const handleAddTodoOnEnterKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.code === "Enter" && todoInput) {
      taskAdded({ msg: todoInput, active: taskInputActive });
      !taskInputActive && taskInputSelected(true);
      setTodoInput("");
    }
  };

  return (
    <div
      className={styles.todoInput}
      title="Press &ldquo;Enter&ldquo; to Add Todo"
    >
      <TodoCheckmark newActiveTodo={true} todoActive={taskInputActive} />
      <input
        type="text"
        placeholder="Create a new todo..."
        value={todoInput}
        onChange={onTodoInputChange}
        className={styles.field}
        onKeyDown={handleAddTodoOnEnterKeyPress}
      />
    </div>
  );
};

export default TodoInput;
