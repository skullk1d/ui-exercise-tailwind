import React from "react";
import logo from "./logo.svg";
import Form from "./components/Form";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container w-[350px] lg:w-[650px]">
        <h1 className="text-3xl font-semibold">One-time Loan Payment</h1>
        <h3 className="mb-[30px]">
          Fill out the form below to complete your payment.
        </h3>
        <Form />
      </div>
    </div>
  );
}

export default App;
