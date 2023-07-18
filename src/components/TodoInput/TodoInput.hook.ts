import { ChangeEvent, useState, KeyboardEvent } from "react";
import { bindActionCreators } from "@reduxjs/toolkit";

import { KeyboardCode } from "../../constants/Keyboard.const";
import { useAppDispatch } from "../../hooks/Store";
import { todoActions } from "../../store/features/Todo";
import { useTranslation } from "react-i18next";

const { ENTER } = KeyboardCode;

export const useTodoInput = () => {
  const { t } = useTranslation();
  const [input, setInput] = useState<string>("");
  const [todoCompleted, setTodoCompleted] = useState<boolean>(false);

  const dispatch = useAppDispatch();
  const { taskAdded } = bindActionCreators(todoActions, dispatch);

  const onInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setInput(e.target.value);
  };

  const handleAddTodoOnKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === ENTER && input) {
      taskAdded({ msg: input, completed: todoCompleted });
      setInput("");
    }
  };

  const onInputCheckmarkClick = () => {
    setTodoCompleted((todoCompleted) => !todoCompleted);
  };

  return {
    t,
    todoCompleted,
    input,
    onInputChange,
    handleAddTodoOnKeyPress,
    onInputCheckmarkClick,
  };
};
