import { useState, ChangeEvent, KeyboardEvent } from "react";
import "./TodoInput.style.scss";
import TodoCheckmark from "../TodoCheckmark";
import {
  addTodo,
  setNewActiveTodoInput,
} from "../../store/features/TodoItems/todoItems.slice";
import { useSelector } from "react-redux";
import { RootState } from "../../store/app/store";
import { useAppDispatch } from "../../hooks/TodoActions.hook";

const TodoInput = () => {
  const darkMode = useSelector((state: RootState) => state.dark.darkMode);
  const [todoInput, setTodoInput] = useState<string>("");
  const todoActiveInput = useSelector(
    (state: RootState) => state.todos.todoActiveInput
  );

  const dispatch = useAppDispatch();

  const onTodoInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setTodoInput(e.target.value);
  };

  const handleAddTodoOnEnterKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && todoInput) {
      dispatch(addTodo({ todoMsg: todoInput, todoActive: todoActiveInput }));
      !todoActiveInput && dispatch(setNewActiveTodoInput(true));
      setTodoInput("");
    }
  };

  return (
    <div
      className={darkMode ? "todo-input-dark-mode" : "todo-input"}
      title="Press &ldquo;Enter&ldquo; to Add Todo"
    >
      <TodoCheckmark newActiveTodo={true} todoActive={todoActiveInput} />
      <input
        type="text"
        placeholder="Create a new todo..."
        value={todoInput}
        onChange={onTodoInputChange}
        className="todo-input-field"
        onKeyPress={handleAddTodoOnEnterKeyPress}
      />
    </div>
  );
};

export default TodoInput;
