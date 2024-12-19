import React, { useState } from "react";

const TodoList = () => {
  const [todoList, setTodoList] = useState([]);
  const [taskVal, setTaskVal] = useState("");

  const handleChange = (e) => {
    setTaskVal(e.target.value);
  };

  const handleAdd = () => {
    setTodoList([
      ...todoList,
      {
        text: taskVal,
        updateCompleted: true,
        deleteIcon: true,
        id: Date.now(),
      },
    ]);
  };

  const handleCheck = (e, id) => {
    const updTodoList = todoList.map((todo, index) => {
      if (todo.id === id) {
        todo.updateCompleted = !todo.updateCompleted;
      }
      return todo;
    });
    console.log(updTodoList);
    setTodoList(updTodoList);
  };
  return (
    <div className="todoContainer">
      <div className="todoText">
        <div>
          <input
            type="text"
            style={{ width: "120%", height: "30px" }}
            onChange={handleChange}
          />
        </div>
        <div>
          <button onClick={handleAdd}>Add</button>
        </div>
      </div>
      <div className="todoList">
        {todoList.map((todo, index) => {
          return (
            <div className="todoDiv">
              <div
                className={todo.updateCompleted ? "circle" : "nonCircle"}
                onClick={(e) => handleCheck(e, todo.id)}
              ></div>

              <div
                className={`todoText ${!todo.updateCompleted ? "strike" : ""}`}
              >
                {todo.text}
              </div>
              {todo.deleteIcon && <div className="closIcon">X</div>}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TodoList;
