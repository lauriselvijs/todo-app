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
import { useTranslation } from "react-i18next";
import { ns } from "../../config/Lang";

const { ACTIVE } = ShowTasks;

const TodoShowActiveBtn = () => {
  const { showTasks } = useSelector((state: RootState) => state[todoSliceName]);
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  const { activeTasksShowed } = bindActionCreators(todoActions, dispatch);
  const { ui } = ns;

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
      {t("Active", { ns: ui })}
    </button>
  );
};

export default TodoShowActiveBtn;
