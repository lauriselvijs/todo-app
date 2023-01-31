import { useMemo } from "react";
import { DragDropContext, Draggable, DropResult } from "react-beautiful-dnd";

import TodoListItem from "../TodoListItem";
import { Task } from "../../types/Task.d";
import TodoFooter from "../TodoFooter";

import styles from "./TodoList.style.module.scss";
import { useTodoFilter } from "./TodoList.hook";
import { reorder } from "../../utils/Array";
import StrictModeDroppable from "../shared/StrictModeDroppable";

const TodoList = () => {
  const { filteredTasks, tasksReordered } = useTodoFilter();

  const renderTodos = useMemo(
    () =>
      filteredTasks.map((todo: Task, index: number) => (
        <Draggable key={todo.id} draggableId={todo.id} index={index}>
          {(provided) => (
            <div
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
            >
              <TodoListItem key={todo.id} {...todo} />
            </div>
          )}
        </Draggable>
      )),
    [filteredTasks]
  );

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

  return (
    <div className={styles.todos}>
      <DragDropContext onDragEnd={onDragEnd}>
        <StrictModeDroppable droppableId="droppable">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {renderTodos}
              {provided.placeholder}
            </div>
          )}
        </StrictModeDroppable>
      </DragDropContext>
      <TodoFooter />
    </div>
  );
};

export default TodoList;
