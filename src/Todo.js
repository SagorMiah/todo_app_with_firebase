import React, { useState } from "react";
import {
  List,
  ListItem,
  ListItemText,
  Modal,
  Button,
  FormControl,
  InputLabel,
  Input,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import db from "./firebase";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import EditIcon from "@material-ui/icons/Edit";
import UpdateIcon from "@material-ui/icons/Update";

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    height: 200,
    backgroundColor: theme.palette.background.white,
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
    db.collection("todos").doc(props.todo.id).set(
      {
        todo: input,
      },
      { merge: true }
    );
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
          <FormControl>
            <InputLabel>✅ Write your Update Todo</InputLabel>
            <Input
              type="text"
              value={input}
              placeholder={props.todo.todo}
              onChange={(e) => setInput(e.target.value)}
            />
          </FormControl>
          <Button onClick={updateTodo} variant="contained" color="primary">
            <UpdateIcon />
          </Button>
        </div>
      </Modal>
      <List>
        <ListItem>
          <ListItemText
            primary={props.todo.todo}
            secondary="Todo with Firebase 🏩"
          />
        </ListItem>
        <Button
          variant="contained"
          color="primary"
          onClick={() => setOpen(true)}
        >
          <EditIcon />
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={(event) =>
            db.collection("todos").doc(props.todo.id).delete()
          }
        >
          <DeleteForeverIcon />
        </Button>
      </List>
    </>
  );
};

export default Todo;
