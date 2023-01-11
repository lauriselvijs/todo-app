import "./Todo.stye.scss";
import TodoMenuWrapper from "../TodoMenuWrapper";
import TodoInput from "../TodoInput";
import TodoMenu from "../TodoMenu";
import TodoInfoHelper from "../TodoInfoHelper";
import { RootState } from "../../store/app/store";
import { useSelector } from "react-redux";

const Todo = () => {
  const todoList = useSelector((state: RootState) => state.todos.todoList);

  return (
    <main className="todo">
      <TodoMenuWrapper>
        <TodoInput />
        <TodoMenu />
        {todoList.length !== 0 && <TodoInfoHelper />}
      </TodoMenuWrapper>
    </main>
  );
};

export default Todo;
