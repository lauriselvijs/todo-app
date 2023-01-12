import styles from "./TodoCheckmark.style.module.scss";
import { TodoCheckmarkProps } from "./TodoCheckmark.component.d";
import { todoActions } from "../../store/features/Todo/Todo.slice";
import { useAppDispatch } from "../../hooks/Store";
import { bindActionCreators } from "@reduxjs/toolkit";

const TodoCheckmark = ({
  todoId,
  newActiveTodo,
  todoActive,
}: TodoCheckmarkProps) => {
  const dispatch = useAppDispatch();
  const { taskActivated, taskInputSelected } = bindActionCreators(
    todoActions,
    dispatch
  );

  const onTodoCheckmarkClick = () => {
    todoId && taskActivated({ id: todoId, active: !todoActive });
    newActiveTodo && taskInputSelected(!todoActive);
  };

  return (
    <div
      data-testid="todo-checkmark"
      onClick={onTodoCheckmarkClick}
      className={todoActive ? styles.todoCheckmark : styles.todoCheckmarkActive}
    />
  );
};

export default TodoCheckmark;
