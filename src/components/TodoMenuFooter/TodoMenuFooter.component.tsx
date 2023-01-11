import { useSelector } from "react-redux";
import { RootState } from "../../store/app/store";
import TodoClearCompletedBtn from "../TodoClearCompletedBtn";
import TodoInputCount from "../TodoItemCount";
import TodoShowActiveBtn from "../TodoShowActiveBtn";
import TodoShowAllBtn from "../TodoShowAllBtn";
import TodoShowCompletedBtn from "../TodoShowCompletedBtn";
import "./TodoMenuFooter.style.scss";

const TodoMenuFooter = () => {
  const darkMode = useSelector((state: RootState) => state.dark.darkMode);

  return (
    <div className="todo-menu-footer">
      <div className="todo-menu-footer-left-section">
        <TodoInputCount />
      </div>
      <div
        className={
          darkMode
            ? "todo-menu-footer-center-section-dark-mode"
            : "todo-menu-footer-center-section"
        }
      >
        <TodoShowAllBtn />
        <TodoShowActiveBtn />
        <TodoShowCompletedBtn />
      </div>
      <div className="todo-menu-footer-right-section">
        <TodoClearCompletedBtn />
      </div>
    </div>
  );
};

export default TodoMenuFooter;
