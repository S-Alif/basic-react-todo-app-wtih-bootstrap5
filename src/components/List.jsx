/* eslint-disable react/prop-types */
import { useState } from "react";

import { BsCheckLg, BsXLg, BsTrashFill } from "react-icons/bs";


const List = ({todo, deleteTask, toggleDone, toggleUndone}) => {

  const [marked, setMarked] = useState(todo.done)

  let marking = () => {
    setMarked("true")
  } 

  let unMark = () => {
    setMarked("false")
  }


  let confirm_delete = (id) => {
    return(
      <div
        className="modal fade"
        id={`${id}`}
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
                Confirm task deletion
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <p className="text-start">Do you want to delete the task ?</p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
                onClick={() => deleteTask(id)}
              >
                DELETE
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  return (
    <div className="col-lg-3 col-md-4 col-sm-6 mt-4">
      <div className={marked=="true" ? "todo-content p-lg-3 p-2 rounded border border-2 border-success" : "todo-content p-lg-3 p-2 rounded"}>
        <figure>
          <blockquote className="blockquote">
        <p className="fw-medium text-start">{todo.todo}</p>
          </blockquote>
          <figcaption className="blockquote-footer text-end pt-3">
            Deadline : {todo.deadline}
          </figcaption>
        </figure>

        <div className="check-btn text-end pt-3">
          <button className={marked == "true" ? "d-none" : "btn btn-outline-success btn-sm rounded shadow me-1"} onClick={() => { toggleDone(todo.id); marking()}}><BsCheckLg /></button>
          <button className={marked == "true" ? "btn btn-outline-primary btn-sm rounded shadow me-1" : "d-none"} onClick={() => { toggleUndone(todo.id); unMark() }}><BsXLg /></button>
          <button className="btn btn-outline-danger btn-sm rounded shadow" data-bs-toggle="modal" data-bs-target={`#${todo.id}`}><BsTrashFill /></button>
        </div>

        {
          confirm_delete(todo.id)
        }
      </div>
    </div>
  );
};

export default List;