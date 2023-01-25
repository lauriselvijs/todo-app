import { useSelector } from "react-redux";
import pluralize from "pluralize";

import { RootState } from "../../store/app/store";
import { todoSliceName } from "../../store/features/Todo";

import styles from "./TodoItemCount.style.module.scss";

const TodoInputCount = () => {
  const { tasks } = useSelector((state: RootState) => state[todoSliceName]);

  return (
    <div className={styles.todoInputCount}>
      {pluralize("item", tasks.length, true)} left
    </div>
  );
};

export default TodoInputCount;
