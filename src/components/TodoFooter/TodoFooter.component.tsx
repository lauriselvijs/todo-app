import { useMemo } from "react";
import { useMobile } from "../../hooks/Media";
import TodoClearCompletedBtn from "../TodoClearCompletedBtn";
import TodoFilter from "../TodoFilter";
import TodoInputCount from "../TodoCount";

import styles from "./TodoFooter.style.module.scss";

const TodoFooter = () => {
  const isMobile = useMobile();

  const renderTodoFilter = useMemo(
    () => !isMobile && <TodoFilter />,

    [isMobile]
  );

  return (
    <div className={styles.todoMenuFooter}>
      <TodoInputCount />
      {renderTodoFilter}
      <TodoClearCompletedBtn />
    </div>
  );
};

export default TodoFooter;
