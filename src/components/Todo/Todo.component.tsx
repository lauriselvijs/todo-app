import TodoInput from "../TodoInput";
import TodoInfoHelper from "../TodoInfoHelper";
import { RootState } from "../../store/app/store";
import { useSelector } from "react-redux";
import { todoSliceName } from "../../store/features/Todo";
import TodoList from "../TodoList";
import TodoTitle from "../TodoTItle";
import DarkModeBtn from "../DarkModeBtn";

import styles from "./Todo.style.module.scss";

const Todo = () => {
  const { tasks } = useSelector((state: RootState) => state[todoSliceName]);

  return (
    <main className={styles.todo}>
      <div className={styles.header}>
        <TodoTitle />
        <DarkModeBtn />
      </div>
      <TodoInput />
      <TodoList />
      {tasks.length !== 0 && <TodoInfoHelper />}
    </main>
  );
};

export default Todo;
