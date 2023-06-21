import { useMemo } from "react";

import { useMobile } from "../../hooks/Media";
import { Task } from "../../types/Task";
import TodoDeleteBtn from "../TodoDeleteBtn";
import TodoEditBtn from "../TodoEditBtn";

import styles from "./TodoListItem.style.module.scss";
import { useTodoListItem } from "./TodoListItem.hook";

const TodoListItem = ({ id, msg, completed }: Task) => {
  const {
    showModifyMenu,
    onMouseEnter,
    onMouseLeave,
    isEdited,
    onInputChange,
    onCheckmarkBtnClick,
  } = useTodoListItem({
    id,
    msg,
    completed,
  });

  const isMobile = useMobile();

  const renderModifyMenu = useMemo(
    () =>
      (showModifyMenu || isEdited || isMobile) && (
        <div className={styles.modify}>
          <TodoEditBtn taskId={id} />
          <TodoDeleteBtn taskId={id} />
        </div>
      ),

    [id, showModifyMenu, isEdited, isMobile]
  );

  const renderCheckMarkBtn = useMemo(
    () => (
      <button
        aria-label="Check if task completed"
        onClick={onCheckmarkBtnClick}
        className={completed ? styles.checkmarkChecked : styles.checkmark}
      />
    ),
    [completed, onCheckmarkBtnClick]
  );

  const renderMsg = useMemo(() => {
    if (isEdited) {
      return (
        <input
          onInput={onInputChange}
          className={styles.input}
          type="text"
          value={msg}
        />
      );
    }

    return (
      <p className={completed ? styles.msgCompleted : styles.msg}>{msg}</p>
    );
  }, [onInputChange, msg, isEdited, completed]);

  return (
    <div
      data-testid="todo-list-item"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={styles.todoListItem}
      aria-label="Hover to enable controls"
    >
      {renderCheckMarkBtn}
      {renderMsg}
      {renderModifyMenu}
    </div>
  );
};

export default TodoListItem;
