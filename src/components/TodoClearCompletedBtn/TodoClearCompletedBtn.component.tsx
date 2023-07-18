import { useAppDispatch } from "../../hooks/Store";
import { bindActionCreators } from "@reduxjs/toolkit";
import { todoActions } from "../../store/features/Todo";

import styles from "./TodoClearCompletedBtn.style.module.scss";
import { useTranslation } from "react-i18next";

const TodoClearCompletedBtn = () => {
  const dispatch = useAppDispatch();
  const { completedTasksCleared } = bindActionCreators(todoActions, dispatch);

  const onTodoClearCompletedBtnClick = () => {
    completedTasksCleared();
  };

  const { t } = useTranslation();

  return (
    <button
      className={styles.todoClearCompletedBtn}
      onClick={onTodoClearCompletedBtnClick}
    >
      {t("Clear Completed", { ns: "ui" })}
    </button>
  );
};

export default TodoClearCompletedBtn;
