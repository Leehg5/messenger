import "../styles/BoardInsert.scss";
import React, { useState } from "react";

const BoardList = ({ onInsert, text }) => {
  const [value, setValue] = useState("");
  const onChange = (e) => {
    setValue(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    setValue("");
    onInsert(value);
  };
  return (
    <div>
      <div class="notice">
        <div class="page-title">
          <div class="container">
            <h3>게시판</h3>
          </div>
        </div>

        <div id="board-search">
          <div class="search-window">
            <div class="search-wrap">
              <form className="BoardList" onSubmit={onSubmit}>
                <input
                  onChange={onChange}
                  value={value}
                  placeholder="글을 입력해주세요"
                />
                <button type="submit" class="btn btn-dark1">
                  추가하기
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoardList;
