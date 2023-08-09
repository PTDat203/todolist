import React, { useEffect, useState } from "react";
import "./Modal.css";
import ReactDOM from "react-dom";
import { v4 as uuidv4 } from "uuid";

function Modal(props) {
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [error, setError] = useState({ title: false, summary: false });
  function handleError() {
    setError(() => {
      return {
        title: !title,
        summary: !summary,
      };
    });
  }
  useEffect(() => {
    console.log(error);
  }, [error]);
  return ReactDOM.createPortal(
    <div className="container_modal">
      <div className="modal">
        <div className="overlay"></div>
        <div className="modal-content">
          <div className="modal-content-header">New Task</div>
          <div className="modal-content-title">
            <div className="modal-content-title-top">
              <b>Title</b>
              <span> *</span>
            </div>
            <div className="modal-content-title-bottom">
              <input
                type="text"
                className="input_task"
                placeholder="Task Title"
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
                style={
                  error.title
                    ? {
                        borderColor: `red`,
                      }
                    : {}
                }
              />
            </div>
          </div>
          <div className="modal-content-summary">
            <div className="modal-content-summary-top">
              <b>Summary</b>
              <span> *</span>
            </div>
            <div className="modal-content-summary-bottom">
              <input
                type="text"
                className="input_task"
                placeholder="Task Summary"
                value={summary}
                onChange={(e) => {
                  setSummary(e.target.value);
                }}
                style={
                  error.summary
                    ? {
                        borderColor: `red`,
                      }
                    : {}
                }
              />
            </div>
          </div>
          <div className="modal-content-footer">
            <button onClick={props.toggleModal} className="cancel-modal">
              <b>Cancel</b>
            </button>
            <button
              className="create-modal"
              onClick={() => {
                handleError();
                if (title && summary) {
                  props.handleCreateTask({
                    title,
                    content: summary,
                    id: uuidv4(),
                  });
                  props.toggleModal();
                }
              }}
            >
              <b>Create Task</b>
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}

export default Modal;
