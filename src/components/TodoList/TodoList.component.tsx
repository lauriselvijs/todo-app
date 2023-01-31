import { useEffect, useMemo, useState } from "react";
import { ReactSortable } from "react-sortablejs";

import TodoListItem from "../TodoListItem";
import { Task } from "../../types/Task.d";
import TodoFooter from "../TodoFooter";

import styles from "./TodoList.style.module.scss";
import { useTodoFilter } from "./TodoList.hook";

const TodoList = () => {
  const { filteredTasks, orderedTasks, setOrderedTasks } = useTodoFilter();

  const renderTodos = useMemo(
    () =>
      orderedTasks.map((todo: Task) => (
        <TodoListItem key={todo.id} {...todo} />
      )),
    [orderedTasks]
  );

  return (
    <div className={styles.todos}>
      <ReactSortable
        chosenClass={`${styles.todoChosen}`}
        ghostClass={`${styles.ghostTodo}`}
        list={orderedTasks.map((task) => ({ ...task, chosen: true }))}
        setList={setOrderedTasks}
      >
        {renderTodos}
      </ReactSortable>
      <TodoFooter />
    </div>
  );
};

export default TodoList;
