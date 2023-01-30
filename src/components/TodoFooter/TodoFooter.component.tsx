import { useMemo } from "react";
import { useMobile } from "../../hooks/Media";
import TodoClearCompletedBtn from "../TodoClearCompletedBtn";
import TodoFilter from "../TodoFilter";
import TodoInputCount from "../TodoItemCount";

import styles from "./TodoFooter.style.module.scss";

const TodoFooter = () => {
  const isMobile = useMobile();

  const renderTodoFilter = useMemo(() => {
    if (!isMobile) {
      return <TodoFilter />;
    }
  }, [isMobile]);

  return (
    <div className={styles.todoMenuFooter}>
      <TodoInputCount />
      {renderTodoFilter}
      <TodoClearCompletedBtn />
    </div>
  );
};

export default TodoFooter;
