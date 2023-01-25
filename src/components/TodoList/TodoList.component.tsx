import { useMemo } from "react";

import TodoListItem from "../TodoListItem";
import { Task } from "../../types/Task";
import TodoFooter from "../TodoFooter";

import styles from "./TodoList.style.module.scss";
import useTodoFilter from "./TodoList.hook";

const TodoList = () => {
  const { tasks, filteredTodos } = useTodoFilter();

  const renderTodos = useMemo(
    () =>
      filteredTodos.map((todo: Task, index: number) => (
        <TodoListItem key={index} {...todo} />
      )),
    [filteredTodos]
  );

  return (
    <div className={styles.todos}>
      <div className={styles.container}>{renderTodos}</div>
      <TodoFooter />
    </div>
  );
};

export default TodoList;
