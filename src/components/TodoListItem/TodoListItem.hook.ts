import { bindActionCreators } from "@reduxjs/toolkit";
import { FormEvent, useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../hooks/Store";
import { RootState } from "../../store/app/store";
import { todoActions, todoSliceName } from "../../store/features/Todo";

// TODO:
// [ ] - extract checkmark functionality and move to shared folder
export const useTodoListItem = (id: string) => {
  const [todoCompleted, setTodoCompleted] = useState<boolean>(false);
  const [isEdited, setIsEdit] = useState<boolean>(false);

  const dispatch = useAppDispatch();
  const { taskEdited } = bindActionCreators(todoActions, dispatch);

  const { editedTaskId } = useSelector(
    (state: RootState) => state[todoSliceName]
  );

  useEffect(() => {
    id === editedTaskId ? setIsEdit(true) : setIsEdit(false);
  }, [taskEdited]);

  const onInputChange = (e: FormEvent<HTMLInputElement>): void => {
    taskEdited({ id, msg: e.currentTarget.value, completed: todoCompleted });
  };

  const onCheckmarkBtnClick = () => {
    setTodoCompleted((todoCompleted) => !todoCompleted);
  };

  return {
    isEdited,
    todoCompleted,
    onInputChange,
    onCheckmarkBtnClick,
  };
};
