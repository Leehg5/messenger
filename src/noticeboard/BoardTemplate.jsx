import React from "react";

function BoardTemplate({ children }) {
  return (
    <div className="BoardTemplate">
      <div className="app-title"></div>
      <div className="content">{children}</div>
    </div>
  );
}

export default BoardTemplate;
