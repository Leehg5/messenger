import React from "react";
import "../styles/BoardListItem.scss";

const BoardListItem = ({
  todo,
  onRemove,
  onInsertToggle,
  setSelectedTodo,
  handleDragStart,
  handleDragOver,
  handleDrop,
}) => {
  const { id, text } = todo;
  return (
    <li
      className="BoardListItem"
      draggable={true}
      onDragStart={(e) => {
        handleDragStart(e, todo);
      }}
      onDragOver={handleDragOver}
      onDrop={(e) => {
        handleDrop(e, todo);
      }}
    >
      <div className="text">{text}</div>
      <div
        className="edit"
        onClick={() => {
          onInsertToggle();
          setSelectedTodo((prev) => todo);
        }}
      >
        <button>수정</button>
      </div>
      <div
        className="remove"
        onClick={() => {
          onRemove(id);
        }}
      >
        <button>삭제</button>
      </div>
    </li>
  );
};

export default BoardListItem;
