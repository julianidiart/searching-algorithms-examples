import React, { useContext } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import DataContext from "../../contexts/DataContext";

const DataContainer = () => {
  const context = useContext(DataContext);
  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };
  const onDragEnd = result => {
    if (!result.destination) return;

    const items = reorder(
      context.data,
      result.source.index,
      result.destination.index
    );

    context.setData(items);
  };
  return (
    <>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable" direction="horizontal">
          {provided => (
            <div
              className="data-container"
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {context.data.map((item, index) => (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className={item.classes}
                    >
                      <div
                        className={
                          snapshot.isDragging ? "item item--dragging" : "item"
                        }
                      >
                        {item.value}
                      </div>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </>
  );
};

export default DataContainer;
