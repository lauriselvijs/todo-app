import { useSelector } from "react-redux";
import pluralize from "pluralize";

import { RootState } from "../../store/app/store";
import { todoSliceName } from "../../store/features/Todo";

const TodoInputCount = () => {
  const { tasksLeft } = useSelector((state: RootState) => state[todoSliceName]);

  return <div>{pluralize("item", tasksLeft, true)} left</div>;
};

export default TodoInputCount;
