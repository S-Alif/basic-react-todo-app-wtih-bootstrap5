/* eslint-disable react/prop-types */

import { useState } from "react";


const Content = ({addTodo}) => {

  const [todo, setTodo] = useState("")
  const [deadline, setDeadline] = useState("")

  let submitTodo = (e) => {
    e.preventDefault()

    if(!todo) return

    let newTodo = {todo, deadline, id: Date.now(), done:false}
    
    addTodo(newTodo)
    setDeadline("")
    setTodo("")
  }

  return (
    <>
      <section className="form-container mt-5 bg-body-tertiary">
        <div className="container">
          <div className="content pt-5 pb-5">

            <form action="" onSubmit={submitTodo}>
              <div className="row">
                <div className="col-lg-12">
                  <input type="text" name="todo" className="form-control fw-bolder text-center" value={todo} placeholder="enter todos" onChange={(e) => setTodo(e.target.value)} required />
                </div>
                <div className="col-lg-12 col-md-12 mt-4">
                  <div className="input-group">
                    <div className="input-group-text text-capitalize bg-danger text-light">deadline</div>
                    <input type="date" name="deadline" id="deadline" className="form-control fw-bolder text-center" value={deadline} placeholder="deadline" onChange={(e) => setDeadline(e.target.value)} required />
                  </div>
                </div>
                <div className="col-lg-12 text-center">
                  <button className="btn btn-lg btn-success text-capitalize mt-4 pe-5 ps-5">submit</button>
                </div>
              </div>
            </form>

          </div>
        </div>
      </section>
    </>
  );
};

export default Content;