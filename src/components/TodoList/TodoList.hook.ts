import { bindActionCreators } from "@reduxjs/toolkit";
import { useLayoutEffect, useState } from "react";
import { DropResult } from "react-beautiful-dnd";
import { useSelector } from "react-redux";

import { ShowTasks } from "../../constants/Task.const";
import { useAppDispatch } from "../../hooks/Store";
import { RootState } from "../../store/app/store";
import { todoActions, todoSliceName } from "../../store/features/Todo";
import { Task } from "../../types/Task.d";
import { reorder } from "../../utils/Array";

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
  const [filteredTasks, setFilteredTasks] = useState(tasks);

  const dispatch = useAppDispatch();
  const { tasksReordered } = bindActionCreators(todoActions, dispatch);

  useLayoutEffect(() => {
    setFilteredTasks(tasks.filter(filterTypes[showTasks as ShowTasks]));
  }, [showTasks, tasks]);

  const onDragEnd = (result: DropResult) => {
    // dropped outside the list
    if (!result.destination) {
      return;
    }

    const tasks = reorder<Task>(
      filteredTasks,
      result.source.index,
      result.destination.index
    );

    tasksReordered(tasks);
  };

  return { filteredTasks, tasksReordered, onDragEnd };
};
