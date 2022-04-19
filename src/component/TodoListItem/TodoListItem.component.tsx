import React, { useState } from "react";
import "./TodoListItem.style.scss";
import { ITodoListItem } from "../../type-definition/ListItem";
import TodoCheckmark from "../TodoCheckmark";
import PropTypes from "prop-types";
import IconCross from "../../asset/image/icon/icon-cross.svg";

const TodoListItem = ({
  todo: { todoMsg, todoActive: initialActive, todoId },
}: ITodoListItem) => {
  const [active, setActive] = useState<boolean>(initialActive);
  const [showDeleteTodo, setShowDeleteTodo] = useState<boolean>(false);

  const onTodoCheckmarkClick = () => {
    setActive(!active);
  };

  const onMouseLeaveTodoItem = () => {
    setShowDeleteTodo(false);
  };

  const onMouseEnterTodoItem = () => {
    setShowDeleteTodo(true);
  };

  return (
    <div
      className="todo-list-item"
      onMouseEnter={onMouseEnterTodoItem}
      onMouseLeave={onMouseLeaveTodoItem}
    >
      <TodoCheckmark
        active={active}
        onTodoCheckmarkClick={onTodoCheckmarkClick}
      />
      {todoMsg}
      {showDeleteTodo && (
        <img src={IconCross} alt="Icon cross" className="icon-cross" />
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
