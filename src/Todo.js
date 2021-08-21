import React, { useState } from "react";
import { List, ListItem, ListItemText, Button, Modal } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import db from "./firebase";

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const Todo = (props) => {
  const classes = useStyles();
  const [open, setOpen] = useState();
  const [input, setInput] = useState();
  const updateTodo = (e) => {
    setOpen(false);
  };
  return (
    <>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        className={classes.paper}
      >
        <div>
          <h1>This is a Modal</h1>
          <input
            type="text"
            value={props.todo.todo}
            onChange={(e) => setInput(e.target.value)}
          />
          <button onClick={updateTodo}>UPDATE</button>
        </div>
      </Modal>
      <List>
        <ListItem>
          <ListItemText
            primary={props.todo.todo}
            secondary="Todo with Firebase 🏩"
          />
        </ListItem>
        <button onClick={() => setOpen(true)}>Edit</button>
        <Button
          onClick={(event) =>
            db.collection("todos").doc(props.todo.id).delete()
          }
        >
          DELETE
        </Button>
      </List>
    </>
  );
};

export default Todo;
