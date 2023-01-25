import { useSelector } from "react-redux";
import { bindActionCreators } from "@reduxjs/toolkit";

import { RootState } from "../../store/app/store";
import IconEdit from "../../assets/icons/icon-edit.svg";
import { useAppDispatch } from "../../hooks/Store";
import { todoActions, todoSliceName } from "../../store/features/Todo";

import styles from "./TodoEditBtn.style.module.scss";
import { TodoEditBtnProps } from "./TodoEditBtn.component.d";

const TodoEditBtn = ({ taskId }: TodoEditBtnProps) => {
  const dispatch = useAppDispatch();
  const { editTaskModeToggled } = bindActionCreators(todoActions, dispatch);
  const { editedTaskId } = useSelector(
    (state: RootState) => state[todoSliceName]
  );

  const onTodoEditBtnClick = () => {
    editTaskModeToggled(taskId);
  };

  return (
    <button
      aria-label="Edit todo"
      className={styles.todoEditBtn}
      onClick={onTodoEditBtnClick}
    >
      {editedTaskId === taskId ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 10 8"
          className={styles.confirm}
        >
          <path fill="none" strokeWidth="1" d="M1 4.304L3.696 7l6-6" />
        </svg>
      ) : (
        <img width={22} height={22} src={IconEdit} alt="Edit icon" />
      )}
    </button>
  );
};

export default TodoEditBtn;
