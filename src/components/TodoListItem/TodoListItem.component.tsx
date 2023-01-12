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

const TodoListItem = ({
  task: { id, msg, active },
  provided: { innerRef, draggableProps, dragHandleProps },
  snapshot,
}: Task) => {
  const dispatch = useAppDispatch();
  const { taskEdited } = bindActionCreators(todoActions, dispatch);
  const { taskEditMode } = useSelector(
    (state: RootState) => state[todoSliceName]
  );
  const [showDeleteTodo, setShowDeleteTodo] = useState<boolean>(false);
  const [showEditTodo, setShowEditTodo] = useState<boolean>(false);

  const onMouseLeaveTodoItem = (): void => {
    setShowDeleteTodo(false);
    setShowEditTodo(false);
  };

  const onMouseOverTodoItem = (): void => {
    setShowDeleteTodo(true);
    setShowEditTodo(true);
  };

  const onTodoEditInputChange = (e: FormEvent<HTMLInputElement>): void => {
    taskEdited({ id, msg: e.currentTarget.value, active });
  };

  return (
    <div
      data-testid="todo-list-item"
      className={active ? styles.todoListItem : styles.todoListItemCompleted}
      onMouseLeave={onMouseLeaveTodoItem}
      onMouseOver={onMouseOverTodoItem}
      ref={innerRef}
      snapshot={snapshot}
      {...draggableProps}
      {...dragHandleProps}
    >
      <TodoCheckmark todoId={id} todoActive={active} />
      {!taskEditMode && msg}
      {taskEditMode && (
        <input
          onInput={onTodoEditInputChange}
          className={styles.input}
          type="text"
          placeholder={msg}
        />
      )}
      <div className={styles.modify}>
        {(taskEditMode || showEditTodo) && <TodoEditBtn />}
        {(taskEditMode || showDeleteTodo) && <TodoDeleteBtn todoId={id} />}
      </div>
    </div>
  );
};

export default TodoListItem;
