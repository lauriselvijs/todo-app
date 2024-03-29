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
import { useMobile } from "../../hooks/Media";

import styles from "./Todo.style.module.scss";

const Todo = () => {
  const {
    tasks: { length: tasksLength },
  } = useSelector((state: RootState) => state[todoSliceName]);
  const isMobile = useMobile();

  const renderFilter = useMemo(() => isMobile && <TodoFilter />, [isMobile]);

  const renderMenu = useMemo(
    () =>
      tasksLength > 0 && (
        <>
          <TodoList />
          {renderFilter}
          <TodoInfoHelper />
        </>
      ),

    [tasksLength, renderFilter]
  );

  return (
    <div className={styles.todo}>
      <div className={styles.header}>
        <TodoTitle />
        <DarkModeBtn />
      </div>
      <TodoInput />
      {renderMenu}
    </div>
  );
};

export default Todo;
