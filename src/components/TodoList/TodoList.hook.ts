import { bindActionCreators } from "@reduxjs/toolkit";
import { useEffect, useLayoutEffect, useState } from "react";
import { useSelector } from "react-redux";

import { ShowTasks } from "../../constants/Task.const";
import { useAppDispatch } from "../../hooks/Store";
import { RootState } from "../../store/app/store";
import { todoActions, todoSliceName } from "../../store/features/Todo";
import { Task } from "../../types/Task.d";

const { ACTIVE, ALL, COMPLETED } = ShowTasks;

const filterTypes = {
  [ACTIVE]: ({ completed }: Task) => !completed,
  [COMPLETED]: ({ completed }: Task) => completed,
  [ALL]: () => true,
};

export const useTodoFilter = () => {
  const { tasks, showTasks } = useSelector(
    (state: RootState) => state[todoSliceName]
  );

  const dispatch = useAppDispatch();
  const { tasksReordered } = bindActionCreators(todoActions, dispatch);

  const [filteredTasks, setFilteredTasks] = useState(tasks);

  useLayoutEffect(() => {
    setFilteredTasks(tasks.filter(filterTypes[showTasks as ShowTasks]));
  }, [showTasks, tasks]);

  return { filteredTasks, tasksReordered };
};
