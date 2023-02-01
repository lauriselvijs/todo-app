import { useMemo } from "react";

import TodoInput from "../TodoInput";
import TodoInfoHelper from "../TodoInfoHelper";
import { RootState } from "../../store/app/store";
import { useSelector } from "react-redux";
import { todoSliceName } from "../../store/features/Todo";
import TodoList from "../TodoList";
import TodoTitle from "../TodoTItle";
import DarkModeBtn from "../DarkModeBtn";
import TodoFilter from "../TodoFilter";

import styles from "./Todo.style.module.scss";
import { useMobile } from "../../hooks/Media";
import WeatherCurrent from "../WeatherCurrent";

const Todo = () => {
  const { tasks } = useSelector((state: RootState) => state[todoSliceName]);
  const isMobile = useMobile();

  const renderTodoMenu = useMemo(() => {
    if (tasks.length !== 0) {
      return (
        <>
          <TodoList />
          {isMobile && <TodoFilter />}
          <TodoInfoHelper />
        </>
      );
    }
  }, [tasks, isMobile]);

  return (
    <main className={styles.todo}>
      <div className={styles.header}>
        <TodoTitle />
        <DarkModeBtn />
      </div>
      <TodoInput />
      {renderTodoMenu}
    </main>
  );
};

export default Todo;
