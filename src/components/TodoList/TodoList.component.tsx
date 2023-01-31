import { useMemo } from "react";

import TodoListItem from "../TodoListItem";
import { Task } from "../../types/Task.d";
import TodoFooter from "../TodoFooter";

import styles from "./TodoList.style.module.scss";
import { useTodoFilter } from "./TodoList.hook";
import DragDropContext from "../shared/DragDropContext";
import Draggable from "../shared/Draggable";

const TodoList = () => {
  const { filteredTasks, onDragEnd } = useTodoFilter();

  const renderTodos = useMemo(
    () =>
      filteredTasks.map((todo: Task, index: number) => (
        <Draggable id={todo.id} index={index}>
          <TodoListItem key={todo.id} {...todo} />
        </Draggable>
      )),
    [filteredTasks]
  );

  return (
    <div className={styles.todos}>
      <DragDropContext onDragEnd={onDragEnd}>{renderTodos}</DragDropContext>
      <TodoFooter />
    </div>
  );
};

export default TodoList;
