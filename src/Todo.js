import React from "react";
import { List, ListItem, ListItemText, Button } from "@material-ui/core";
import db from "./firebase";

const Todo = (props) => {
  return (
    <>
      <List>
        <ListItem>
          <ListItemText
            primary={props.todo.todo}
            secondary="Todo with Firebase 🏩"
          />
        </ListItem>
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
