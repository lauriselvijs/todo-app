import { bindActionCreators } from "@reduxjs/toolkit";
import { useEffect, useState } from "react";
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

  const [orderedTasks, setOrderedTasks] = useState(tasks);
  const [filteredTasks, setFilteredTasks] = useState(tasks);

  const dispatch = useAppDispatch();
  const { tasksReordered } = bindActionCreators(todoActions, dispatch);

  useEffect(() => {
    setOrderedTasks(tasks);
  }, [tasks]);

  useEffect(() => {
    tasksReordered(orderedTasks);
  }, [orderedTasks]);

  useEffect(() => {
    setFilteredTasks(orderedTasks.filter(filterTypes[showTasks as ShowTasks]));
  }, [showTasks]);

  return { tasks, orderedTasks, setOrderedTasks, filteredTasks };
};
