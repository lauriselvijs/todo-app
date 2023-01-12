import { useSelector } from "react-redux";

import { RootState } from "../../store/app/store";
import { stringPluralize } from "../../utils/String.util";
import { todoSliceName } from "../../store/features/Todo";

import styles from "./TodoItemCount.style.module.scss";

const TodoInputCount = () => {
  const { taskCount } = useSelector((state: RootState) => state[todoSliceName]);

  return (
    <div className={styles.todoInputCount}>
      {stringPluralize(taskCount, "item")} left
    </div>
  );
};

export default TodoInputCount;
