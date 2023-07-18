import { useTranslation } from "react-i18next";
import styles from "./TodoInfoHelper.style.module.scss";

const TodoInfoHelper = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.todoInfoHelper}>
      {t("Drag and drop to reorder list")}
    </div>
  );
};

export default TodoInfoHelper;
