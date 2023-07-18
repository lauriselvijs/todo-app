import { useSelector } from "react-redux";
import { RootState } from "../../store/app/store";
import { ShowTasks } from "../../constants/Task.const";
import { useAppDispatch } from "../../hooks/Store";
import { todoActions, todoSliceName } from "../../store/features/Todo";
import { bindActionCreators } from "@reduxjs/toolkit";

import styles from "./TodoShowCompletedBtn.style.module.scss";
import { useTranslation } from "react-i18next";
import { ns } from "../../config/Lang";

const { COMPLETED } = ShowTasks;

const TodoShowCompletedBtn = () => {
  const { showTasks } = useSelector((state: RootState) => state[todoSliceName]);
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const { completedTasksShowed } = bindActionCreators(todoActions, dispatch);

  const { ui } = ns;

  const onTodoShowCompletedBtnClick = () => {
    completedTasksShowed();
  };

  return (
    <button
      className={
        showTasks === COMPLETED
          ? styles.todoShowCompletedBtnSelected
          : styles.todoShowCompletedBtn
      }
      onClick={onTodoShowCompletedBtnClick}
    >
      {t("Completed", { ns: ui })}
    </button>
  );
};

export default TodoShowCompletedBtn;
