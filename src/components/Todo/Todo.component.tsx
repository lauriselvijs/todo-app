import TodoInput from "../TodoInput";
import TodoInfoHelper from "../TodoInfoHelper";
import { RootState } from "../../store/app/store";
import { useSelector } from "react-redux";
import { todoSliceName } from "../../store/features/Todo";
import Todos from "../Todos";

const Todo = () => {
  const { tasks } = useSelector((state: RootState) => state[todoSliceName]);

  return (
    <main>
      <TodoInput />
      <Todos />
      {tasks.length !== 0 && <TodoInfoHelper />}
    </main>
  );
};

export default Todo;
