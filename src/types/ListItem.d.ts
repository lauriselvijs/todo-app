export interface ITodoListItem {
  todo: {
    todoId: string;
    todoMsg: string;
    todoActive: boolean;
  };
  provided: DraggableProvided;
  snapshot: DraggableStateSnapshot;
}
