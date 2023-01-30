import IconEdit from "../../assets/icons/icon-edit.svg";

import styles from "./TodoEditBtn.style.module.scss";
import { TodoEditBtnProps } from "./TodoEditBtn.component.d";
import { useMemo } from "react";
import { useTodoEditBtn } from "./TodoEditBtn.hook";

import { MdEdit } from "react-icons/md";
import { AiOutlineCheck } from "react-icons/ai";

const TodoEditBtn = ({ taskId }: TodoEditBtnProps) => {
  const { onBtnClick, isEdited } = useTodoEditBtn(taskId);

  const renderIcon = useMemo(
    () => (isEdited ? <AiOutlineCheck size={24} /> : <MdEdit size={24} />),
    [isEdited]
  );

  return (
    <button
      title="Edit"
      aria-label="Edit todo"
      className={styles.todoEditBtn}
      onClick={onBtnClick}
    >
      {renderIcon}
    </button>
  );
};

export default TodoEditBtn;
