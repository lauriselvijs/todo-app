import { useMemo } from "react";
import { MdEdit } from "react-icons/md";
import { AiOutlineCheck } from "react-icons/ai";

import styles from "./TodoEditBtn.style.module.scss";
import { TodoEditBtnProps } from "./TodoEditBtn.component.d";
import { useTodoEditBtn } from "./TodoEditBtn.hook";
import { useTranslation } from "react-i18next";

const TodoEditBtn = ({ taskId }: TodoEditBtnProps) => {
  const { onBtnClick, isEdited } = useTodoEditBtn(taskId);
  const { t } = useTranslation();

  const renderIcon = useMemo(
    () => (isEdited ? <AiOutlineCheck size={24} /> : <MdEdit size={24} />),
    [isEdited]
  );

  return (
    <button
      title={t("Edit", { ns: "ui" })}
      aria-label={t("Edit", { ns: "ui" })}
      className={styles.todoEditBtn}
      onClick={onBtnClick}
    >
      {renderIcon}
    </button>
  );
};

export default TodoEditBtn;
