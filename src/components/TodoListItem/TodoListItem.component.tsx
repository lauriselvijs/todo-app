import { FormEvent, useState } from "react";

import { Task } from "../../types/Task";
import TodoCheckmark from "../TodoCheckmark";
import { bindActionCreators } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import TodoDeleteBtn from "../TodoDeleteBtn";
import { RootState } from "../../store/app/store";
import TodoEditBtn from "../TodoEditBtn";
import {
  todoActions,
  todoSliceName,
} from "../../store/features/Todo/Todo.slice";
import { useAppDispatch } from "../../hooks/Store";

import styles from "./TodoListItem.style.module.scss";

const TodoListItem = ({ id, msg, active }: Task) => {
  const dispatch = useAppDispatch();
  const { taskEdited } = bindActionCreators(todoActions, dispatch);
  const { editedTaskId } = useSelector(
    (state: RootState) => state[todoSliceName]
  );
  const onTodoEditInputChange = (e: FormEvent<HTMLInputElement>): void => {
    taskEdited({ id, msg: e.currentTarget.value, active });
  };

  return (
    <div
      data-testid="todo-list-item"
      className={active ? styles.todoListItem : styles.todoListItemCompleted}
    >
      {/* <TodoCheckmark todoId={id} todoActive={active} /> */}
      {editedTaskId !== id && msg}
      {editedTaskId === id && (
        <input
          onInput={onTodoEditInputChange}
          className={styles.input}
          type="text"
          value={msg}
        />
      )}
      <div className={styles.modify}>
        <TodoEditBtn taskId={id} />
        <TodoDeleteBtn taskId={id} />
      </div>
    </div>
  );
};

export default TodoListItem;
