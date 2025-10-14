function Todo(props) {
  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="action">
        <span>A Span</span>
        <button className="btn">Delete</button>
      </div>
    </div>
  );
}

export default Todo;
