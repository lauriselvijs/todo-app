import { bindActionCreators } from "@reduxjs/toolkit";
import { FormEvent, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../hooks/Store";
import { RootState } from "../../store/app/store";
import { todoActions, todoSliceName } from "../../store/features/Todo";
import { Task } from "../../types/Task.d";

// TODO:
// [ ] - Extract checkmark functionality and move to shared folder
export const useTodoListItem = ({ id: todoId, completed, msg }: Task) => {
  const [isEdited, setIsEdit] = useState<boolean>(false);
  const [showModifyMenu, setShowModifyMenu] = useState<boolean>(false);

  const dispatch = useAppDispatch();
  const { taskEdited } = bindActionCreators(todoActions, dispatch);

  const { editedTaskId } = useSelector(
    (state: RootState) => state[todoSliceName]
  );

  useEffect(() => {
    todoId === editedTaskId ? setIsEdit(true) : setIsEdit(false);
  }, [editedTaskId, taskEdited, todoId]);

  const onInputChange = (e: FormEvent<HTMLInputElement>): void => {
    taskEdited({
      id: todoId,
      msg: e.currentTarget.value,
      completed: completed,
    });
  };

  const onCheckmarkBtnClick = () => {
    taskEdited({
      id: todoId,
      msg,
      completed: !completed,
    });
  };

  const onMouseEnter = () => {
    setShowModifyMenu(true);
  };

  const onMouseLeave = () => {
    setShowModifyMenu(false);
  };

  return {
    showModifyMenu,
    onMouseEnter,
    onMouseLeave,
    isEdited,
    onInputChange,
    onCheckmarkBtnClick,
  };
};
