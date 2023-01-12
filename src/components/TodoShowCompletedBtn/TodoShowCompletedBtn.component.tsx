import { useSelector } from "react-redux";
import { RootState } from "../../store/app/store";
import { ShowTasks } from "../../constants/Task.const";
import { useAppDispatch } from "../../hooks/Store";
import { todoActions, todoSliceName } from "../../store/features/Todo";
import { bindActionCreators } from "@reduxjs/toolkit";

import styles from "./TodoShowCompletedBtn.style.module.scss";

const { COMPLETED } = ShowTasks;

const TodoShowCompletedBtn = () => {
  const { showTasks } = useSelector((state: RootState) => state[todoSliceName]);
  const dispatch = useAppDispatch();
  const { completedTasksShowed } = bindActionCreators(todoActions, dispatch);

  const onTodoShowCompletedBtnClick = () => {
    completedTasksShowed();
  };

  return (
    <button
      className={
        showTasks === COMPLETED
          ? styles.todoShowCompletedBtnClicked
          : styles.todoShowCompletedBtn
      }
      onClick={onTodoShowCompletedBtnClick}
    >
      Completed
    </button>
  );
};

export default TodoShowCompletedBtn;
