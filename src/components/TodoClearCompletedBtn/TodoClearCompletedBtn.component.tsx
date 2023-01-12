import styles from "./TodoClearCompletedBtn.style.module.scss";
import { useAppDispatch } from "../../hooks/Store";
import { bindActionCreators } from "@reduxjs/toolkit";
import { todoActions } from "../../store/features/Todo";

const TodoClearCompletedBtn = () => {
  const dispatch = useAppDispatch();
  const { completedTasksCleared } = bindActionCreators(todoActions, dispatch);

  const onTodoClearCompletedBtnClick = () => {
    completedTasksCleared();
  };

  return (
    <button
      className={styles.todoClearCompletedBtn}
      onClick={onTodoClearCompletedBtnClick}
    >
      Clear Completed
    </button>
  );
};

export default TodoClearCompletedBtn;
