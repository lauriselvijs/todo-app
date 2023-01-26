import { bindActionCreators } from "@reduxjs/toolkit";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { useAppDispatch } from "../../hooks/Store";
import { RootState } from "../../store/app/store";
import { todoActions, todoSliceName } from "../../store/features/Todo";
import { Task } from "../../types/Task.d";

const useIsEditedModeSet = (taskId: Task["id"]): boolean => {
  const [isEdited, setIsEdited] = useState<boolean>(false);

  const { editedTaskId } = useSelector(
    (state: RootState) => state[todoSliceName]
  );

  useEffect(() => {
    taskId === editedTaskId ? setIsEdited(true) : setIsEdited(false);
  }, [taskId, editedTaskId]);

  return isEdited;
};

export const useTodoEditBtnHook = (taskId: Task["id"]) => {
  const dispatch = useAppDispatch();
  const { editTaskModeToggled } = bindActionCreators(todoActions, dispatch);

  const isEdited = useIsEditedModeSet(taskId);

  const onBtnClick = () => {
    editTaskModeToggled(taskId);
  };

  return { onBtnClick, isEdited };
};
