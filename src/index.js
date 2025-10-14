// src/index.js
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function AllMeetups() {
  return <h1>All Meetups</h1>;
}
function NewMeetup() {
  return <h1>New Meetup</h1>;
}

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> | <Link to="/new-meetup">New</Link>
      </nav>
      <Routes>
        <Route path="/" element={<AllMeetups />} />
        <Route path="/new-meetup" element={<NewMeetup />} />
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
