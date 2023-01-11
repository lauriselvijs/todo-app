import { FormEvent, useState } from "react";
import "./TodoListItem.style.scss";
import { ITodoListItem } from "../../types/ListItem";
import TodoCheckmark from "../TodoCheckmark";
import PropTypes from "prop-types";
import TodoDeleteBtn from "../TodoDeleteBtn";
import { useSelector } from "react-redux";
import { RootState } from "../../store/app/store";
import TodoEditBtn from "../TodoEditBtn";
import { useAppDispatch } from "../../hooks/TodoActions.hook";
import { setTodoEdit } from "../../store/features/TodoItems/todoItems.slice";

const TodoListItem = ({
  todo: { todoMsg, todoActive, todoId },
  provided: { innerRef, draggableProps, dragHandleProps },
  snapshot,
}: ITodoListItem) => {
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
    dispatch(setTodoEdit({todoId, todoMsg: e.currentTarget.value, todoActive}));
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
      {!todoEditMode && todoMsg}
      {todoEditMode && (
        <input
          onInput={onTodoEditInputChange}
          className="todo-list-item-edit-input"
          type="text"
          placeholder={todoMsg}
        />
      )}
      <div className="todo-list-item-edit-delete">
        {(todoEditMode || showEditTodo) && <TodoEditBtn />}
        {(todoEditMode || showDeleteTodo) && <TodoDeleteBtn todoId={todoId} />}
      </div>
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
