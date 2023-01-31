import { ReactNode } from "react";
import {
  DragDropContext as ReactBeautifulDragDropContext,
  DropResult,
  OnDragEndResponder,
} from "react-beautiful-dnd";
import { reorder } from "../../../utils/Array";
import StrictModeDroppable from "../StrictModeDroppable";

const DragDropContext = ({
  children,
  onDragEnd,
}: {
  children: ReactNode;
  onDragEnd: OnDragEndResponder;
}) => {
  return (
    <ReactBeautifulDragDropContext onDragEnd={onDragEnd}>
      <StrictModeDroppable droppableId="droppable">
        {({ droppableProps, innerRef, placeholder }) => (
          <div {...droppableProps} ref={innerRef}>
            {children}
            {placeholder}
          </div>
        )}
      </StrictModeDroppable>
    </ReactBeautifulDragDropContext>
  );
};

export default DragDropContext;
