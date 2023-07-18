import { useAppDispatch } from "../../hooks/Store";
import { bindActionCreators } from "@reduxjs/toolkit";
import { todoActions } from "../../store/features/Todo";

import styles from "./TodoClearCompletedBtn.style.module.scss";
import { useTranslation } from "react-i18next";
import { ns } from "../../config/Lang";

const TodoClearCompletedBtn = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const { completedTasksCleared } = bindActionCreators(todoActions, dispatch);

  const { ui } = ns;

  const onTodoClearCompletedBtnClick = () => {
    completedTasksCleared();
  };

  return (
    <button
      className={styles.todoClearCompletedBtn}
      onClick={onTodoClearCompletedBtnClick}
    >
      {t("Clear Completed", { ns: ui })}
    </button>
  );
};

export default TodoClearCompletedBtn;
