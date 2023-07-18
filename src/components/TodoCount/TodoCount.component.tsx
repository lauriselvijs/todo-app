import { useSelector } from "react-redux";

import { RootState } from "../../store/app/store";
import { todoSliceName } from "../../store/features/Todo";
import { useTranslation } from "react-i18next";

const TodoCount = () => {
  const { tasksLeft } = useSelector((state: RootState) => state[todoSliceName]);
  const { t } = useTranslation();

  return <div>{t("itemWithCount", { count: tasksLeft, ns: "ui" })}</div>;
};

export default TodoCount;
