import React, { useEffect, useState } from "react";
import "./TodoMenu.style.scss";
import TodoListItem from "../TodoListItem";
import { ITodoListItem } from "../../types/ListItem";
import { DARK_MODE } from "../../constants/DarkMode.const";
import TodoMenuFooter from "../TodoMenuFooter";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
  DroppableProvided,
} from "react-beautiful-dnd";
import { useSelector } from "react-redux";
import { RootState } from "../../store/app/store";
import { todoOptions } from "../../constants/TodoMenu.const";
import { useAppDispatch } from "../../hooks/TodoActions.hook";
import { onTodoDragEnd } from "../../utils/TodoAnimation.util";
import {
  setNewTodoOrder,
  setTodoCount,
} from "../../store/features/TodoItems/todoItems.slice";

const TodoMenu = () => {
  const { TODO_OPTION_ACTIVE, TODO_OPTION_ALL, TODO_OPTION_COMPLETED } =
    todoOptions;
  const { todoList, todoOption } = useSelector(
    (state: RootState) => state.todos
  );
  const [filteredTodos, setFilteredTodos] =
    useState<ITodoListItem["todo"][]>(todoList);
  const dispatch = useAppDispatch();

  useEffect(() => {
    todoOption === TODO_OPTION_ACTIVE &&
      setFilteredTodos(todoList.filter((todo) => todo.todoActive));
    todoOption === TODO_OPTION_COMPLETED &&
      setFilteredTodos(todoList.filter((todo) => !todo.todoActive));
    todoOption === TODO_OPTION_ALL && setFilteredTodos(todoList);
  }, [todoOption, todoList]);

  useEffect(() => {
    dispatch(setTodoCount(filteredTodos.length));
  }, [filteredTodos]);

  const onDragEnd = (result: DropResult): void => {
    setFilteredTodos(onTodoDragEnd(result, filteredTodos));
    dispatch(setNewTodoOrder(onTodoDragEnd(result, filteredTodos)));
  };

  const todoComponentArray = filteredTodos.map(
    (todo: ITodoListItem["todo"], index: number) => (
      <div key={index}>
        <Draggable key={todo.todoId} draggableId={todo.todoId} index={index}>
          {(provided, snapshot) => (
            <TodoListItem provided={provided} snapshot={snapshot} todo={todo} />
          )}
        </Draggable>
      </div>
    )
  );

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className={DARK_MODE ? "todo-menu-dark-mode" : "todo-menu"}>
        <Droppable droppableId="droppable">
          {({ droppableProps, innerRef, placeholder }: DroppableProvided) => (
            <div
              className="todo-item-container"
              style={
                {
                  "--todo-list-item-length": filteredTodos.length,
                } as React.CSSProperties
              }
              {...droppableProps}
              ref={innerRef}
            >
              {todoComponentArray}
              {placeholder}
            </div>
          )}
        </Droppable>
        {todoList.length !== 0 && <TodoMenuFooter />}
      </div>
    </DragDropContext>
  );
};

export default TodoMenu;
