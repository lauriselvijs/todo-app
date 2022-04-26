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

const todoList = [
  {
    todoId: "1",
    todoMsg: "Finnish homework",
    todoActive: true,
  },
  {
    todoId: "2",
    todoMsg: "Shopping1",
    todoActive: false,
  },
  {
    todoId: "3",
    todoMsg: "Shopping2",
    todoActive: false,
  },
  {
    todoId: "4",
    todoMsg: "Shopping3",
    todoActive: false,
  },
  {
    todoId: "5",
    todoMsg: "Shopping4",
    todoActive: false,
  },
];

const TodoMenu = () => {
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

  const todoComponentArray = todoItems.map(
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
        <TodoMenuFooter />
      </div>
    </DragDropContext>
  );
};

export default TodoMenu;
