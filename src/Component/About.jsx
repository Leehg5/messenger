import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import BoardLEdit from "../noticeboard/BoardLEdit";
import BoardInsert from "../noticeboard/BoardInsert";
import BoardList from "../noticeboard/BoardList";
import BoardTemplate from "../noticeboard/BoardTemplate";
import "../styles/About.scss";

function About() {
  const [todos, setTodos] = useState([]);
  const [insertToggle, setInsertToggle] = useState(false);
  const [selectedTodo, setSelectedTodo] = useState(null);
  const [isLoading, setIsLoading] = useState(true); //초음 데이터 가져올때
  const [error, setError] = useState(null); //처음엔 에러는 없으니 널
  const nextId = useRef(4);

  const handleDragStart = (e, todo) => {
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("tmp", JSON.stringify(todo));
  };
  const handleDragOver = (e) => {
    e.preventDefault();
  };
  //매뉴창 이동
  const handleDrop = async (e, targetItem) => {
    e.preventDefault();
    try {
      const originalItem = await JSON.parse(e.dataTransfer.getData("tmp")); // 1
      // setTodos((todos) =>
      //   todos.map((todo) => {
      //     return todo.id === targetItem.id
      //       ? { ...originalItem, id: targetItem.id }
      //       : todo.id === originalItem.id
      //       ? { ...targetItem, id: originalItem.id }
      //       : todo;
      //   })
      // );
      const data = await axios({
        url: `http://localhost:4444/todos/swap/${originalItem.id}`,
        method: "PATCH",
        data: { targetId: targetItem.id },
      });

      setTodos(data.data);
    } catch (e) {
      setError(e);
    }
  };
  //할일 추가
  const onInsert = async (text) => {
    // const todo = {
    //   id: nextId.current,
    //   text: text,
    //   checked: false,
    // };
    // nextId.current++;
    // setTodos((todos) => todos.concat(todo));

    const data = await axios({
      url: `http://localhost:4444/todos`,
      method: "POST",
      data: { text },
    });
    setTodos(data.data);
  };

  const onInsertToggle = () => {
    setInsertToggle((prev) => !prev);
  };

  const onRemove = async (id) => {
    // setTodos((todos) => todos.filter((todo) => todo.id !== id));
    try {
      await axios({
        url: `http://localhost:4444/todos/${id}`,
        method: "DELETE",
      });
      const data = await axios({
        url: `http://localhost:4444/todos`,
        method: "GET",
      });
      setTodos(data.data);
    } catch (e) {
      setError(e);
    }
  };

  const onToggle = async (id) => {
    try {
      const data = await axios({
        url: `http://localhost:4444/todos/check/${id}`,
        method: "PATCH",
      });
      setTodos(data.data);
    } catch (e) {
      setError(e);
    }
  };
  //수정
  const onUpdate = async (id, text) => {
    // setTodos((todos) =>
    //   todos.map((todo) => (todo.id === id ? { ...todo, text } : todo))
    // );
    try {
      const data = await axios({
        url: `http://localhost:4444/todos/${id}`,
        method: "PATCH",
        data: {
          text: text,
          perform_date: "2022-08-09 11:11:11",
        },
      });
      setTodos(data.data);
    } catch (e) {
      setError(e);
    }
    onInsertToggle();
  };

  //데이터 불러오기
  useEffect(() => {
    const getData = async () => {
      try {
        const data = await axios({
          url: "http://localhost:4444/todos",
          method: "GET",
        });

        setTodos(data.data);
        setIsLoading(false);
        // throw new Error("조회중 에러발생!!");
        // await new Promise((resolve, reject) => {
        //   setTimeout(() => {
        //     resolve()
        //   }, 3000)
        // })
      } catch (e) {
        setError(e);
      }
    };

    getData();
  }, []);

  if (error) {
    return <>에러: {error.message}</>;
  }

  if (isLoading) {
    return <>Loading...</>;
  }
  return (
    <div className="About_div11">
      <BoardTemplate>
        <BoardInsert onInsert={onInsert} />
        <BoardList
          todos={todos}
          onRemove={onRemove}
          onInsertToggle={onInsertToggle}
          setSelectedTodo={setSelectedTodo}
          handleDragStart={handleDragStart}
          handleDragOver={handleDragOver}
          handleDrop={handleDrop}
        />
        {insertToggle && (
          <BoardLEdit
            onInsertToggle={onInsertToggle}
            selectedTodo={selectedTodo}
            onUpdate={onUpdate}
          />
        )}
        <button
          onClick={() => {
            console.log(todos);
          }}
        >
          확인
        </button>
      </BoardTemplate>
    </div>
  );
}

export default About;
