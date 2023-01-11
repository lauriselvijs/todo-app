export interface Task {
  task: {
    id: string;
    msg: string;
    active: boolean;
  };
  provided: DraggableProvided;
  snapshot: DraggableStateSnapshot;
}
