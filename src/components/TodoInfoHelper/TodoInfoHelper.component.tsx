import { useTranslation } from "react-i18next";
import styles from "./TodoInfoHelper.style.module.scss";

import { ns } from "../../config/Lang";

const TodoInfoHelper = () => {
  const { t } = useTranslation();

  const { ui } = ns;

  return (
    <div className={styles.todoInfoHelper}>
      {t("Drag and drop to reorder list", { ns: ui })}
    </div>
  );
};

export default TodoInfoHelper;
