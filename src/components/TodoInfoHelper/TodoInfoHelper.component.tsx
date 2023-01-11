import "./TodoInfoHelper.style.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../store/app/store";
import { setTodoItemLengthProperty } from "../../utils/TodoList.util";

const TodoInfoHelper = () => {
  const darkMode = useSelector((state: RootState) => state.dark.darkMode);
  const todoCount = useSelector((state: RootState) => state.todos.todoCount);

  const todoInfoHelperTheme = setTodoItemLengthProperty(todoCount);

  return (
    <div
      className={darkMode ? "todo-info-helper-dark-mode" : "todo-info-helper"}
      style={todoInfoHelperTheme}
    >
      Drag and drop to reorder list
    </div>
  );
};

export default TodoInfoHelper;
