import React from "react";
import BoardListItem from "./BoardListItem";

const BoardList = ({
  todos,
  onRemove,
  onToggle,
  onInsertToggle,
  setSelectedTodo,
  handleDragStart,
  handleDragOver,
  handleDrop,
}) => {
  return (
    <ul className="BoardList">
      {todos.map((todo, index) => {
        //console.log(`${index}번 todo `, todo);
        return (
          <BoardListItem
            todo={todo}
            key={index}
            onRemove={onRemove}
            onToggle={onToggle}
            onInsertToggle={onInsertToggle}
            setSelectedTodo={setSelectedTodo}
            handleDragStart={handleDragStart}
            handleDragOver={handleDragOver}
            handleDrop={handleDrop}
          />
        );
      })}
    </ul>
  );
};

export default BoardList;
