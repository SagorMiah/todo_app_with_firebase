import react, { useState, useEffect } from "react";
import "./App.css";
import { Button, FormControl, Input, InputLabel } from "@material-ui/core";
import Todo from "./Todo";
import db from "./firebase";
import firebase from "firebase";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = (event) => {
    event.preventDefault();
    db.collection("todos").add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };

  useEffect(() => {
    db.collection("todos")
      .orderBy("timestamp", "desc")
      .onSnapshot((sanpshot) => {
        setTodos(
          sanpshot.docs.map((doc) => ({ id: doc.id, todo: doc.data().todo }))
        );
      });
  }, []);
  return (
    <>
      <h1>React + Firebase Todo App</h1>
      <form action="">
        <FormControl>
          <InputLabel>✅ Write your Todo</InputLabel>
          <Input
            value={input}
            onChange={(event) => setInput(event.target.value)}
            type="text"
          />
        </FormControl>
        <Button
          type="submit"
          onClick={addTodo}
          variant="contained"
          disabled={!input}
          color="primary"
        >
          Add Todo
        </Button>
      </form>

      <ul>
        {todos.map((todo) => (
          <Todo todo={todo} />
        ))}
      </ul>
    </>
  );
}

export default App;
