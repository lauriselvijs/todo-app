import { useMemo } from "react";
import { useMedia } from "react-use";

import { Task } from "../../types/Task";
import TodoDeleteBtn from "../TodoDeleteBtn";
import TodoEditBtn from "../TodoEditBtn";

import styles from "./TodoListItem.style.module.scss";
import { useTodoListItem } from "./TodoListItem.hook";

import Media from "../../style/main.scss";

const TodoListItem = ({ id, msg, completed }: Task) => {
  const { mobile } = Media;

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

  const isMobile = useMedia(mobile);

  const renderModifyMenu = useMemo(() => {
    if (showModifyMenu || isEdited || isMobile) {
      return (
        <div>
          <TodoEditBtn taskId={id} />
          <TodoDeleteBtn taskId={id} />
        </div>
      );
    }
  }, [id, showModifyMenu, isEdited, isMobile]);

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
      return (
        <p className={completed ? styles.msgCompleted : styles.msg}>{msg}</p>
      );
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
  }, [onInputChange, msg, isEdited, completed]);

  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      data-testid="todo-list-item"
      className={styles.todoListItem}
    >
      {renderCheckMarkBtn}
      {renderMsg}
      {renderModifyMenu}
    </div>
  );
};

export default TodoListItem;
