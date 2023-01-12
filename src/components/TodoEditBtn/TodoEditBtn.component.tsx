import { useSelector } from "react-redux";
import { bindActionCreators } from "@reduxjs/toolkit";

import { RootState } from "../../store/app/store";
import IconCheck from "../../assets/icons/icon-checkmark.svg";
import IconCheckDarkMode from "../../assets/icons/icon-checkmark-dark-mode.svg";
import IconEdit from "../../assets/icons/icon-edit.svg";
import IconEditDarkMode from "../../assets/icons/icon-edit-dark-mode.svg";
import { useAppDispatch } from "../../hooks/Store";
import { todoActions, todoSliceName } from "../../store/features/Todo";

import styles from "./TodoEditBtn.style.module.scss";

const TodoEditBtn = () => {
  const dispatch = useAppDispatch();
  const { taskEditModeActivated } = bindActionCreators(todoActions, dispatch);
  const { taskEditMode } = useSelector(
    (state: RootState) => state[todoSliceName]
  );

  const onTodoEditBtnClick = () => {
    taskEditModeActivated();
  };

  return (
    <button
      aria-label="Todo edit"
      className={styles.todoEditBtn}
      onClick={onTodoEditBtnClick}
    >
      {taskEditMode ? (
        <img src={IconCheck} alt="Check icon" className={styles.image} />
      ) : (
        <img src={IconEdit} alt="Edit icon" className="todo-edit-btn-img" />
      )}
    </button>
  );
};

export default TodoEditBtn;
