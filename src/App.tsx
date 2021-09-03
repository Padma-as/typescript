import React from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators, State } from "./state";
import { bindActionCreators } from "redux";

function App() {
  const dispatch = useDispatch();
  const { depositMoney, withdrawMoney, bankrupt } = bindActionCreators(
    actionCreators,
    dispatch
  );
  const amount = useSelector((state: State) => state.bank);
  return (
    <div className="App">
      <h1>{amount}</h1>
      <button onClick={() => depositMoney(5000000)}>DEPOSIT</button>
      <button onClick={() => withdrawMoney(2000)}>WITHDRAW</button>
      <button onClick={() => bankrupt()}>BANKRUPT</button>
    </div>
  );
}

export default App;
