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
  } = useTodoInput();

  const renderCheckMarkBtn = useMemo(
    () => (
      <button
        aria-label="Check if task completed"
        onClick={onInputCheckmarkClick}
        className={todoCompleted ? styles.checkmarkActive : styles.checkmark}
      />
    ),
    [todoCompleted, onInputCheckmarkClick]
  );

  const renderInput = useMemo(
    () => (
      <input
        title="Press &ldquo;Enter&ldquo; to add new task"
        type="text"
        placeholder="Create a new todo..."
        value={input}
        onChange={onInputChange}
        className={styles.input}
        onKeyDown={handleAddTodoOnKeyPress}
      />
    ),
    [input, onInputChange, handleAddTodoOnKeyPress]
  );

  return (
    <div className={styles.todoInput}>
      {renderCheckMarkBtn}
      {renderInput}
    </div>
  );
};

export default TodoInput;
