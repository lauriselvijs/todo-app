import IconEdit from "../../assets/icons/icon-edit.svg";

import styles from "./TodoEditBtn.style.module.scss";
import { TodoEditBtnProps } from "./TodoEditBtn.component.d";
import { useMemo } from "react";
import { useTodoEditBtnHook } from "./TodoEditBtn.hook";

const TodoEditBtn = ({ taskId }: TodoEditBtnProps) => {
  const { onBtnClick, isEdited } = useTodoEditBtnHook(taskId);

  const renderIcon = useMemo(() => {
    if (isEdited) {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 10 8"
          className={styles.confirm}
        >
          <path fill="none" strokeWidth="1" d="M1 4.304L3.696 7l6-6" />
        </svg>
      );
    } else {
      return <img width={22} height={22} src={IconEdit} alt="Edit icon" />;
    }
  }, [isEdited]);

  return (
    <button
      aria-label="Edit todo"
      className={styles.todoEditBtn}
      onClick={onBtnClick}
    >
      {renderIcon}
    </button>
  );
};

export default TodoEditBtn;
