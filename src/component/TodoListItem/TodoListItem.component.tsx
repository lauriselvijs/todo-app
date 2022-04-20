import React, { useState } from "react";
import "./TodoListItem.style.scss";
import { ITodoListItem } from "../../type-definition/ListItem";
import TodoCheckmark from "../TodoCheckmark";
import PropTypes from "prop-types";
import TodoDeleteBtn from "../DeleteTodoBtn";

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
      className={todoCompleted ? "todo-list-item-completed" : "todo-list-item"}
      onMouseEnter={onMouseEnterTodoItem}
      onMouseLeave={onMouseLeaveTodoItem}
      onClick={onTodoListItemClick}
    >
      <TodoCheckmark
        todoActive={todoActive}
        onTodoCheckmarkClick={onTodoCheckmarkClick}
      />
      {todoMsg}
      {showDeleteTodo && <TodoDeleteBtn />}
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
