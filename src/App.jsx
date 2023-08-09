import { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "./App.css";
import ButtonChangeLights from "./Components/ButtonChange/ButtonChangeLights";
import TodoCard from "./Components/TodoCard/TodoCard";
import Modal from "./Components/Modal/Modal";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [modal, setModal] = useState(false);
  const [data, setData] = useState(null);
  const [theme, setTheme] = useState("light");
  const toggleModal = () => {
    setModal(!modal);
  };
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    console.log(todos);
    if (!data) return;
    setTodos(() => {
      return [...todos, data];
    });
  }, [data]);
  const removeTodo = (id) => {
    const indexTodo = todos.findIndex((item) => {
      return item.id === id;
    });
    const newTodo = [...todos];
    newTodo.splice(indexTodo, 1);
    setTodos(newTodo);
  };

  return (
    <div className="App">
      <div className="container">
        <div className="header">
          <p className="mytasks">
            <b>My Tasks</b>
          </p>
          <ButtonChangeLights theme={theme} />
        </div>
        <div className="contents">
          {todos.length ? (
            <div>
              {todos.map((item) => {
                return (
                  <TodoCard
                    title={item.title}
                    content={item.content}
                    key={item.id}
                    removeTodo={() => {
                      removeTodo(item.id);
                    }}
                  />
                );
              })}
            </div>
          ) : (
            <p>You no have tasks</p>
          )}
        </div>
        <div className="footer">
          <button onClick={toggleModal} className="addTasks">
            <b>New Task</b>
          </button>
          {modal && (
            <Modal toggleModal={toggleModal} handleCreateTask={setData}></Modal>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
