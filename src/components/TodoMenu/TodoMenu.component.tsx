import React, { useState } from "react";
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

const TodoMenu = () => {
  const todoList = useSelector((state: RootState) => state.todos.todoList);
  const [todoItems, setTodoItems] = useState<ITodoListItem["todo"][]>(todoList);

  const onDragEnd = (result: DropResult): void => {
    const { source, destination } = result;

    if (destination) {
      const newTodoItems = Array.from(todoItems);
      const [removed] = newTodoItems.splice(source.index, 1);
      newTodoItems.splice(destination.index, 0, removed);
      setTodoItems(newTodoItems);
    }
  };

  const todoComponentArray = todoList.map(
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
                  "--todo-list-item-length": todoList.length,
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
