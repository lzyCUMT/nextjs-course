import React from "react";
import Todo from "./components/Todo";

export default function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo text="Learn React" />
      <Todo text="Master React" />
      <Todo text="Explore the full React course" />
    </div>
  );
}
