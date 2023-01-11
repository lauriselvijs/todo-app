import { FormEvent, useState } from "react";
import "./TodoListItem.style.scss";
import { Task } from "../../types/Task";
import TodoCheckmark from "../TodoCheckmark";
import PropTypes from "prop-types";
import TodoDeleteBtn from "../TodoDeleteBtn";
import { useSelector } from "react-redux";
import { RootState } from "../../store/app/store";
import TodoEditBtn from "../TodoEditBtn";
import { useAppDispatch } from "../../hooks/TodoActions.hook";
import { setTodoEdit } from "../../store/features/Todo/Todo.slice";

const TodoListItem = ({
  task: { id, msg, active },
  provided: { innerRef, draggableProps, dragHandleProps },
  snapshot,
}: Task) => {
  const dispatch = useAppDispatch();
  const todoEditMode = useSelector(
    (state: RootState) => state.todos.todoEditMode
  );
  const darkMode = useSelector((state: RootState) => state.dark.darkMode);
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
    dispatch(setTodoEdit({ id, msg: e.currentTarget.value, active }));
  };

  return (
    <div
      data-testid="todo-list-item"
      className={
        darkMode
          ? active
            ? "todo-list-item-dark-mode"
            : "todo-list-item-dark-mode-completed"
          : active
          ? "todo-list-item"
          : "todo-list-item-completed"
      }
      onMouseLeave={onMouseLeaveTodoItem}
      onMouseOver={onMouseOverTodoItem}
      ref={innerRef}
      snapshot={snapshot}
      {...draggableProps}
      {...dragHandleProps}
    >
      <TodoCheckmark todoId={id} todoActive={active} />
      {!todoEditMode && msg}
      {todoEditMode && (
        <input
          onInput={onTodoEditInputChange}
          className="todo-list-item-edit-input"
          type="text"
          placeholder={msg}
        />
      )}
      <div className="todo-list-item-edit-delete">
        {(todoEditMode || showEditTodo) && <TodoEditBtn />}
        {(todoEditMode || showDeleteTodo) && <TodoDeleteBtn todoId={id} />}
      </div>
    </div>
  );
};

export default TodoListItem;
