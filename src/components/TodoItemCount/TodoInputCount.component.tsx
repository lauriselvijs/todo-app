import { useSelector } from "react-redux";
import pluralize from "pluralize";

import { RootState } from "../../store/app/store";
import { todoSliceName } from "../../store/features/Todo";

import styles from "./TodoItemCount.style.module.scss";

const TodoInputCount = () => {
  const { taskCount } = useSelector((state: RootState) => state[todoSliceName]);

  return (
    <div className={styles.todoInputCount}>
      {pluralize("item", taskCount)} left
    </div>
  );
};

export default TodoInputCount;
