import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ShowTasks } from "../../constants/Task.const";
import { RootState } from "../../store/app/store";
import { todoSliceName } from "../../store/features/Todo";
import { Task } from "../../types/Task.d";

const { ACTIVE, ALL, COMPLETED } = ShowTasks;

export const useTodoFilter = () => {
  const { tasks, showTasks } = useSelector(
    (state: RootState) => state[todoSliceName]
  );
  const [filteredTodos, setFilteredTodos] = useState(tasks);

  useEffect(() => {
    const filterTypes = {
      [ACTIVE]: ({ completed }: Task) => !completed,
      [COMPLETED]: ({ completed }: Task) => completed,
      [ALL]: () => true,
    };

    setFilteredTodos(tasks.filter(filterTypes[showTasks as ShowTasks]));
  }, [showTasks, tasks]);

  return { filteredTodos };
};
