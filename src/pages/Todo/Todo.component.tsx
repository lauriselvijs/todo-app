import "./Todo.stye.scss";
import TodoMenuWrapper from "../../components/TodoMenuWrapper";
import TodoInput from "../../components/TodoInput";
import TodoMenu from "../../components/TodoMenu";
import TodoInfoHelper from "../../components/TodoInfoHelper";
import { RootState } from "../../store/app/store";
import { useSelector } from "react-redux";

const Todo = () => {
  const todoList = useSelector((state: RootState) => state.todos.todoList);

  return (
    <div className="todo">
      <TodoMenuWrapper>
        <TodoInput />
        <TodoMenu />
        {todoList.length !== 0 && <TodoInfoHelper />}
      </TodoMenuWrapper>
    </div>
  );
};

export default Todo;
