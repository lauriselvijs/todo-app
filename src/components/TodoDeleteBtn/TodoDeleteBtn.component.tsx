import "./TodoDeleteBtn.style.scss";
import IconCross from "../../asset/image/icon/icon-cross.svg";
import IconCrossDarkMode from "../../asset/image/icon/icon-cross-dark-mode.svg";
import {
  deleteTodo,
  setTodoOptionAll,
} from "../../store/features/TodoItems/todoItems.slice";
import { useAppDispatch } from "../../hooks/TodoActions.hook";
import { RootState } from "../../store/app/store";
import { useSelector } from "react-redux";

const TodoDeleteBtn = ({ todoId }: { todoId: string }) => {
  const dispatch = useAppDispatch();
  const todoList = useSelector((state: RootState) => state.todos.todoList);
  const darkMode = useSelector((state: RootState) => state.dark.darkMode);

  const onTodoDeleteBtnClick = () => {
    dispatch(deleteTodo(todoId));
    todoList.length === 1 && dispatch(setTodoOptionAll());
  };

  return (
    <button className="todo-delete-btn" onClick={onTodoDeleteBtnClick}>
      <img
        src={darkMode ? IconCrossDarkMode : IconCross}
        alt="Icon cross"
        className="todo-delete-btn-img"
      />
    </button>
  );
};

export default TodoDeleteBtn;
