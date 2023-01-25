import { bindActionCreators } from "@reduxjs/toolkit";

import IconCross from "../../assets/icons/icon-cross.svg";
import { useAppDispatch } from "../../hooks/Store";
import { todoActions } from "../../store/features/Todo";

import styles from "./TodoDeleteBtn.style.module.scss";
import { TodoDeleteBtnProps } from "./TodoDeleteBtn.component.d";

const TodoDeleteBtn = ({ taskId }: TodoDeleteBtnProps) => {
  const dispatch = useAppDispatch();
  const { taskDeleted } = bindActionCreators(todoActions, dispatch);

  const onTodoDeleteBtnClick = () => {
    taskDeleted(taskId);
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
