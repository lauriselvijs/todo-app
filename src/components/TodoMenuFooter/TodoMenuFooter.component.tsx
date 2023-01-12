import TodoClearCompletedBtn from "../TodoClearCompletedBtn";
import TodoInputCount from "../TodoItemCount";
import TodoShowActiveBtn from "../TodoActiveBtn";
import TodoShowAllBtn from "../TodoShowAllBtn";
import TodoShowCompletedBtn from "../TodoShowCompletedBtn";

import styles from "./TodoMenuFooter.style.module.scss";

const TodoMenuFooter = () => {
  return (
    <div className={styles.todoMenuFooter}>
      <div>
        <TodoInputCount />
      </div>
      <div className={styles.center}>
        <TodoShowAllBtn />
        <TodoShowActiveBtn />
        <TodoShowCompletedBtn />
      </div>
      <div>
        <TodoClearCompletedBtn />
      </div>
    </div>
  );
};

export default TodoMenuFooter;
