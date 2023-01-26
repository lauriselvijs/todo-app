import { useMemo } from "react";

import { Task } from "../../types/Task";
import TodoDeleteBtn from "../TodoDeleteBtn";
import TodoEditBtn from "../TodoEditBtn";

import styles from "./TodoListItem.style.module.scss";
import { useTodoListItem } from "./TodoListItem.hook";

const TodoListItem = ({ id, msg, completed }: Task) => {
  const { isEdited, onInputChange, onCheckmarkBtnClick } = useTodoListItem({
    id,
    msg,
    completed,
  });

  const renderCheckMarkBtn = useMemo(
    () => (
      <button
        aria-label="Check if task completed"
        data-testid="todo-checkmark"
        onClick={onCheckmarkBtnClick}
        className={completed ? styles.checkmarkChecked : styles.checkmark}
      />
    ),
    [completed, onCheckmarkBtnClick]
  );

  const renderMsg = useMemo(() => {
    if (!isEdited) {
      return <div className={styles.msg}>{msg}</div>;
    } else if (isEdited) {
      return (
        <input
          onInput={onInputChange}
          className={styles.input}
          type="text"
          value={msg}
        />
      );
    }
  }, [onInputChange, msg, isEdited]);

  return (
    <div
      data-testid="todo-list-item"
      className={completed ? styles.todoListItemCompleted : styles.todoListItem}
    >
      {renderCheckMarkBtn}
      {renderMsg}
      <div className={styles.modify}>
        <TodoEditBtn taskId={id} />
        <TodoDeleteBtn taskId={id} />
      </div>
    </div>
  );
};

export default TodoListItem;
