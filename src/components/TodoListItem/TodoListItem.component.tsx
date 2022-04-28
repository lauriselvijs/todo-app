import React, { useState } from "react";
import "./TodoListItem.style.scss";
import { ITodoListItem } from "../../types/ListItem";
import TodoCheckmark from "../TodoCheckmark";
import PropTypes from "prop-types";
import TodoDeleteBtn from "../DeleteTodoBtn";
import { DARK_MODE } from "../../constants/DarkMode.const";

const TodoListItem = ({
  todo: { todoMsg, todoActive, todoId },
  provided: { innerRef, draggableProps, dragHandleProps },
  snapshot,
}: ITodoListItem) => {
  const [showDeleteTodo, setShowDeleteTodo] = useState<boolean>(false);

  const onMouseLeaveTodoItem = () => {
    setShowDeleteTodo(false);
  };

  const onMouseEnterTodoItem = () => {
    setShowDeleteTodo(true);
  };

  return (
    <div
      className={
        DARK_MODE
          ? todoActive
            ? "todo-list-item-dark-mode"
            : "todo-list-item-dark-mode-completed"
          : todoActive
          ? "todo-list-item"
          : "todo-list-item-completed"
      }
      onMouseEnter={onMouseEnterTodoItem}
      onMouseLeave={onMouseLeaveTodoItem}
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
