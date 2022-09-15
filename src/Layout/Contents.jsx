import React from "react";
import Home from "../Component/Home";
import Main from "../Component/Main";
import About from "../Component/About";
import Event from "../Component/Event";
import { Routes, Route } from "react-router-dom";

const Contents = () => {
  return (
    <div>
      <Routes>
        <Route path="" element={<Main />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/event" element={<Event />} />
      </Routes>
    </div>
  );
};

export default Contents;
