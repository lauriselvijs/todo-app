import { useMobile } from "../../hooks/Media";
import TodoShowActiveBtn from "../TodoActiveBtn";
import TodoShowAllBtn from "../TodoShowAllBtn";
import TodoShowCompletedBtn from "../TodoShowCompletedBtn";

import styles from "./TodoFilter.style.module.scss";

const TodoFilter = () => {
  return (
    <div className={styles.todoFilter}>
      <TodoShowAllBtn />
      <TodoShowActiveBtn />
      <TodoShowCompletedBtn />
    </div>
  );
};

export default TodoFilter;
