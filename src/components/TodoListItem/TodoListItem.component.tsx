import React, { useState } from "react";
import "./TodoListItem.style.scss";
import { ITodoListItem } from "../../types/ListItem";
import TodoCheckmark from "../TodoCheckmark";
import PropTypes from "prop-types";
import TodoDeleteBtn from "../DeleteTodoBtn";
import { useSelector } from "react-redux";
import { RootState } from "../../store/app/store";

const TodoListItem = ({
  todo: { todoMsg, todoActive, todoId },
  provided: { innerRef, draggableProps, dragHandleProps },
  snapshot,
}: ITodoListItem) => {
  const darkMode = useSelector((state: RootState) => state.dark.darkMode);
  const [showDeleteTodo, setShowDeleteTodo] = useState<boolean>(false);

  const onMouseLeaveTodoItem = (): void => {
    setShowDeleteTodo(false);
  };

  const onMouseOverTodoItem = (): void => {
    setShowDeleteTodo(true);
  };

  return (
    <div
      data-testid="todo-list-item"
      className={
        darkMode
          ? todoActive
            ? "todo-list-item-dark-mode"
            : "todo-list-item-dark-mode-completed"
          : todoActive
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
      <TodoCheckmark todoId={todoId} todoActive={todoActive} />
      {todoMsg}
      {showDeleteTodo && <TodoDeleteBtn todoId={todoId} />}
    </div>
  );
};

TodoListItem.propTypes = {
  todoId: PropTypes.string,
  todoMsg: PropTypes.string,
  todoActive: PropTypes.bool,
};

TodoListItem.defaultProps = {
  todoId: "",
  todoMsg: "",
  todoActive: false,
};

export default TodoListItem;
