import { useEffect, useMemo, useState } from "react";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
  DroppableProvided,
} from "react-beautiful-dnd";
import { bindActionCreators } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

import TodoListItem from "../TodoListItem";
import { Task } from "../../types/Task";
import TodoMenuFooter from "../TodoMenuFooter";
import { RootState } from "../../store/app/store";
import { ShowTasks } from "../../constants/Task.const";
import { onTodoDragEnd } from "../../utils/TodoAnimation.util";
import {
  todoActions,
  todoSliceName,
} from "../../store/features/Todo/Todo.slice";
import { setTodoItemLengthProperty } from "../../utils/TodoList.util";
import { useAppDispatch } from "../../hooks/Store";

import styles from "./TodoList.style.module.scss";

const { ACTIVE, ALL, COMPLETED } = ShowTasks;

const TodoList = () => {
  const { tasks, showTasks } = useSelector(
    (state: RootState) => state[todoSliceName]
  );
  const appDispatch = useAppDispatch();
  const { taskCountUpdated, taskOrderUpdated } = bindActionCreators(
    todoActions,
    appDispatch
  );

  const [filteredTodos, setFilteredTodos] = useState<Task["task"][]>(tasks);

  useEffect(() => {
    showTasks === ACTIVE &&
      setFilteredTodos(tasks.filter((task) => task.active));
    showTasks === COMPLETED &&
      setFilteredTodos(tasks.filter((task) => !task.active));
    showTasks === ALL && setFilteredTodos(tasks);
  }, [showTasks, tasks]);

  useEffect(() => {
    taskCountUpdated(filteredTodos.length);
  }, [filteredTodos]);

  const onDragEnd = (result: DropResult): void => {
    setFilteredTodos(onTodoDragEnd(result, filteredTodos));
    taskOrderUpdated(onTodoDragEnd(result, filteredTodos));
  };

  const renderTodo = useMemo(
    () =>
      filteredTodos.map((todo: Task["task"], index: number) => (
        <div key={index}>
          <Draggable key={todo.id} draggableId={todo.id} index={index}>
            {(provided, snapshot) => (
              <TodoListItem
                provided={provided}
                snapshot={snapshot}
                task={todo}
              />
            )}
          </Draggable>
        </div>
      )),
    [filteredTodos]
  );

  const todoMenuTheme = setTodoItemLengthProperty(filteredTodos.length);

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className={styles.todos}>
        <Droppable droppableId="droppable">
          {({ droppableProps, innerRef, placeholder }: DroppableProvided) => (
            <div
              className={styles.container}
              style={todoMenuTheme}
              {...droppableProps}
              ref={innerRef}
            >
              {renderTodo}
              {placeholder}
            </div>
          )}
        </Droppable>
        {tasks.length !== 0 && <TodoMenuFooter />}
      </div>
    </DragDropContext>
  );
};

export default TodoList;
