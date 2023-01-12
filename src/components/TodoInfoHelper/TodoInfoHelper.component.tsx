import styles from "./TodoInfoHelper.style.module.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../store/app/store";
import { setTodoItemLengthProperty } from "../../utils/TodoList.util";
import { todoSliceName } from "../../store/features/Todo";

const TodoInfoHelper = () => {
  const { taskCount } = useSelector((state: RootState) => state[todoSliceName]);

  const todoInfoHelperTheme = setTodoItemLengthProperty(taskCount);

  return (
    <div className={styles.todoInfoHelper} style={todoInfoHelperTheme}>
      Drag and drop to reorder list
    </div>
  );
};

export default TodoInfoHelper;
