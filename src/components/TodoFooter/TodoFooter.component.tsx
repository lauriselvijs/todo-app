import TodoClearCompletedBtn from "../TodoClearCompletedBtn";
import TodoInputCount from "../TodoItemCount";

import styles from "./TodoFooter.style.module.scss";

const TodoFooter = () => {
  return (
    <div className={styles.todoMenuFooter}>
      <TodoInputCount />
      <TodoClearCompletedBtn />
    </div>
  );
};

export default TodoFooter;
