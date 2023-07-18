import { bindActionCreators } from "@reduxjs/toolkit";
import { AiOutlineClose } from "react-icons/ai";

import { useAppDispatch } from "../../hooks/Store";
import { todoActions } from "../../store/features/Todo";

import styles from "./TodoDeleteBtn.style.module.scss";
import { TodoDeleteBtnProps } from "./TodoDeleteBtn.component.d";
import { useTranslation } from "react-i18next";

const TodoDeleteBtn = ({ taskId }: TodoDeleteBtnProps) => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const { taskDeleted } = bindActionCreators(todoActions, dispatch);

  const onTodoDeleteBtnClick = () => {
    taskDeleted(taskId);
  };

  return (
    <button
      title={t("Delete", { ns: "ui" })}
      aria-label={t("Delete task", { ns: "ui" })}
      className={styles.todoDeleteBtn}
      onClick={onTodoDeleteBtnClick}
    >
      <AiOutlineClose size={24} />
    </button>
  );
};

export default TodoDeleteBtn;
