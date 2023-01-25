import { bindActionCreators } from "@reduxjs/toolkit";

import IconCross from "../../assets/icons/icon-cross.svg";
import IconCrossDarkMode from "../../assets/icons/icon-cross-dark-mode.svg";
import { RootState } from "../../store/app/store";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../hooks/Store";
import { todoActions, todoSliceName } from "../../store/features/Todo";

import styles from "./TodoDeleteBtn.style.module.scss";
import { Task } from "../../types/Task.d";

interface TodoDeleteBtnProps {
  taskId: Task["id"];
}

const TodoDeleteBtn = ({ taskId }: TodoDeleteBtnProps) => {
  const dispatch = useAppDispatch();
  const { taskDeleted, allTasksShowed } = bindActionCreators(
    todoActions,
    dispatch
  );
  const { tasks } = useSelector((state: RootState) => state[todoSliceName]);

  const onTodoDeleteBtnClick = () => {
    taskDeleted(taskId);
    tasks.length === 1 && allTasksShowed();
  };

  return (
    <button
      aria-label="Delete task"
      className={styles.todoDeleteBtn}
      onClick={onTodoDeleteBtnClick}
    >
      <img
        width={22}
        height={22}
        src={IconCross}
        alt="Delete task icon"
        className={styles.image}
      />
    </button>
  );
};

export default TodoDeleteBtn;
