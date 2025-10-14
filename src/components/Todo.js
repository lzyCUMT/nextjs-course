import { useState } from "react";
import Modal from "../components/Modal";
import Backdrop from "../components/Backdrop";

function Todo(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  function deleteHandler() {
    setModalIsOpen(true);
  }

  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="action">
        <span>A Span</span>
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
      {modalIsOpen && (
        <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} />
      )}
      {modalIsOpen && <Backdrop onClick={closeModalHandler} />}
      <Modal />
      <Backdrop />
    </div>
  );
}

export default Todo;
