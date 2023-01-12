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

const TodoActiveBtn = () => {
  const { showTasks } = useSelector((state: RootState) => state[todoSliceName]);
  const dispatch = useAppDispatch();
  const { showedActiveTasks } = bindActionCreators(todoActions, dispatch);

  const onTodoShowActiveBtnClick = () => {
    showedActiveTasks();
  };

  return (
    <button
      className={
        showTasks === ACTIVE
          ? styles.todoActiveBtn
          : styles.todoActiveBtnSelected
      }
      onClick={onTodoShowActiveBtnClick}
    >
      Active
    </button>
  );
};

export default TodoActiveBtn;
