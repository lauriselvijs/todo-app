import { useMemo, useState } from "react";
import { ReactSortable, Sortable } from "react-sortablejs";

import TodoListItem from "../TodoListItem";
import { Task } from "../../types/Task.d";
import TodoFooter from "../TodoFooter";

import styles from "./TodoList.style.module.scss";
import { useTodoFilter } from "./TodoList.hook";

const TodoList = () => {
  const { filteredTodos } = useTodoFilter();

  const [todos, setTodos] = useState<Task[]>(filteredTodos);

  const renderTodos = useMemo(
    () => todos.map((todo: Task) => <TodoListItem key={todo.id} {...todo} />),
    [todos]
  );

  return (
    <div className={styles.todos}>
      <ReactSortable
        chosenClass={`${styles.todoChosen}`}
        ghostClass={`${styles.ghostTodo}`}
        list={todos.map((todo) => ({ ...todo, chosen: true }))}
        setList={setTodos}
      >
        {renderTodos}
      </ReactSortable>
      <TodoFooter />
    </div>
  );
};

export default TodoList;
