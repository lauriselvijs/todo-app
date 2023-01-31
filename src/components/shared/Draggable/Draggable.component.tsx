import { ReactNode } from "react";
import { Draggable as ReactBeautifulDragAndDrop } from "react-beautiful-dnd";

const Draggable = ({
  children,
  id,
  index,
}: {
  children: ReactNode;
  id: string;
  index: number;
}) => {
  return (
    <ReactBeautifulDragAndDrop key={id} draggableId={id} index={index}>
      {({ innerRef, draggableProps, dragHandleProps }) => (
        <div ref={innerRef} {...draggableProps} {...dragHandleProps}>
          {children}
        </div>
      )}
    </ReactBeautifulDragAndDrop>
  );
};

export default Draggable;
