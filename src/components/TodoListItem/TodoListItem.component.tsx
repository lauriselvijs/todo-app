import React, { useState } from "react";
import "./TodoListItem.style.scss";
import { ITodoListItem } from "../../types/ListItem";
import TodoCheckmark from "../TodoCheckmark";
import PropTypes from "prop-types";
import TodoDeleteBtn from "../DeleteTodoBtn";
import { DARK_MODE } from "../../constants/DarkMode.const";

const TodoListItem = ({
  todo: { todoMsg, todoActive: todoInitialActive, todoId },
}: ITodoListItem) => {
  const [todoActive, setTodoActive] = useState<boolean>(todoInitialActive);
  const [showDeleteTodo, setShowDeleteTodo] = useState<boolean>(false);
  const [todoCompleted, setTodoCompleted] = useState<boolean>(false);

  const onTodoCheckmarkClick = () => {
    setTodoActive(!todoActive);
  };

  const onMouseLeaveTodoItem = () => {
    !todoCompleted && setShowDeleteTodo(false);
  };

  const onMouseEnterTodoItem = () => {
    !todoCompleted && setShowDeleteTodo(true);
  };

  const onTodoListItemClick = () => {
    setTodoCompleted(true);
    setShowDeleteTodo(false);
  };

  return (
    <div
      className={
        DARK_MODE
          ? todoCompleted
            ? "todo-list-item-dark-mode-completed"
            : "todo-list-item-dark-mode"
          : todoCompleted
          ? "todo-list-item-completed"
          : "todo-list-item"
      }
      onMouseEnter={onMouseEnterTodoItem}
      onMouseLeave={onMouseLeaveTodoItem}
    >
      <TodoCheckmark
        todoActive={todoActive}
        onTodoCheckmarkClick={onTodoCheckmarkClick}
      />
      {todoMsg}
      {showDeleteTodo && (
        <TodoDeleteBtn onTodoDeleteBtnClick={onTodoListItemClick} />
      )}
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
