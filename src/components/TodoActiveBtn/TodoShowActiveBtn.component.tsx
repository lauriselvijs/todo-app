import { bindActionCreators } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

import { RootState } from "../../store/app/store";
import {
  todoActions,
  todoSliceName,
} from "../../store/features/Todo/Todo.slice";
import { ShowTasks } from "../../constants/Task.const";
import { useAppDispatch } from "../../hooks/Store";

import styles from "./TodoShowActiveBtn.style.module.scss";

const { ACTIVE } = ShowTasks;

const TodoShowActiveBtn = () => {
  const { showTasks } = useSelector((state: RootState) => state[todoSliceName]);
  const dispatch = useAppDispatch();
  const { activeTasksShowed } = bindActionCreators(todoActions, dispatch);

  const onTodoShowActiveBtnClick = () => {
    activeTasksShowed();
  };

  return (
    <button
      className={
        showTasks === ACTIVE
          ? styles.todoActiveBtnSelected
          : styles.todoActiveBtn
      }
      onClick={onTodoShowActiveBtnClick}
    >
      Active
    </button>
  );
};

export default TodoShowActiveBtn;
