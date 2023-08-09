import React from "react";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import "./TodoCard.css";

function TodoCard(props) {
  console.log(props);
  return (
    <div className="TodoCard">
      <div className="left">
        <div className="TodoCard-Title">
          <div>
            <b>{props.title}</b>
          </div>
        </div>
        <div className="TodoCard-Summary">
          <p>{props.content}</p>
        </div>
      </div>
      <div className="right">
        <div className="icon-delete" onClick={props.removeTodo}>
          <DeleteForeverIcon />
        </div>
      </div>
    </div>
  );
}

export default TodoCard;
