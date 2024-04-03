import React from "react";
import logo from "./logo.svg";
import Form from "./components/Form";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>One-time Loan Payment</h1>
      <h3>Fill out the form below to complete your payment.</h3>
      <Form />
    </div>
  );
}

export default App;
