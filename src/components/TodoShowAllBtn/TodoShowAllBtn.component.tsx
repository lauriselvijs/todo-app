import { bindActionCreators } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

import { RootState } from "../../store/app/store";
import { ShowTasks } from "../../constants/Task.const";
import { useAppDispatch } from "../../hooks/Store";
import { todoActions, todoSliceName } from "../../store/features/Todo";

import styles from "./TodoShowAllBtn.style.module.scss";
import { useTranslation } from "react-i18next";

const { ALL } = ShowTasks;

const TodoShowAllBtn = () => {
  const { showTasks } = useSelector((state: RootState) => state[todoSliceName]);
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const { allTasksShowed } = bindActionCreators(todoActions, dispatch);

  const onTodoShowAllBtnClick = () => {
    allTasksShowed();
  };

  return (
    <button
      className={
        showTasks === ALL ? styles.todoShowAllBtnClicked : styles.todoShowAllBtn
      }
      onClick={onTodoShowAllBtnClick}
    >
      {t("All", { ns: "ui" })}
    </button>
  );
};

export default TodoShowAllBtn;
