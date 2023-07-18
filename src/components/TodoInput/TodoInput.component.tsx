import { useMemo } from "react";

import { useTodoInput } from "./TodoInput.hook";
import styles from "./TodoInput.style.module.scss";

const TodoInput = () => {
  const {
    todoCompleted,
    input,
    onInputChange,
    handleAddTodoOnKeyPress,
    onInputCheckmarkClick,
    t,
    ns: { ui },
  } = useTodoInput();

  const todoCheckmarkStyle = todoCompleted
    ? styles.checkmarkActive
    : styles.checkmark;

  const renderCheckMarkBtn = useMemo(
    () => (
      <button
        aria-label={t("Check if task completed", { ns: ui })}
        onClick={onInputCheckmarkClick}
        className={todoCheckmarkStyle}
      />
    ),
    [todoCheckmarkStyle, onInputCheckmarkClick, t, ui]
  );

  const renderInput = useMemo(
    () => (
      <input
        title={t("Press &ldquo;Enter&ldquo; to add new task", { ns: ui })}
        type="text"
        placeholder={t("Create a new todo...", { ns: ui })}
        value={input}
        onChange={onInputChange}
        className={styles.input}
        onKeyDown={handleAddTodoOnKeyPress}
      />
    ),
    [input, onInputChange, handleAddTodoOnKeyPress, t, ui]
  );

  return (
    <div className={styles.todoInput}>
      {renderCheckMarkBtn}
      {renderInput}
    </div>
  );
};

export default TodoInput;
