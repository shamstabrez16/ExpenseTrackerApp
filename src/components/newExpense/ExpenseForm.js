import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  //   const [userInput ,setUserInput] = useState({
  //     enteredTitle:'',
  //     enteredAmount:' ',
  //     enteredDate:' '
  //   })
  // setUserInput((prevState)=>{
  //     return {...prevState, enteredTitle: event.target.value}
  // })
  // console.log(userInput.enteredTitle);

  //   const titleChangeHandler = (event) => {
  //     console.log(enteredTitle);
  //     setEnteredTitle(event.target.value);

  //   };

  //   const amountChangeHandler = (event) => {
  //     setEnteredAmount(event.target.value);
  //   };

  //   const dateChangeHandler = (event) => {
  //     setEnteredDate(event.target.value);
  //   };

  const inputChangehandler = (identifier, value) => {
    if (identifier === "Title") {
      setEnteredTitle(value);
    } else if (identifier === "Amount") {
      setEnteredAmount(value);
    } else {
      setEnteredDate(value);
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(expenseData);
    setEnteredAmount("");
    setEnteredTitle("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title </label>
          <input
            type="text"
            value={enteredTitle}
            onChange={(event) =>
              inputChangehandler("Title", event.target.value)
            }
          />
        </div>
        <div className="new-expense__control">
          <label>Amount </label>
          <input
            type="number"
            value={enteredAmount}
            step="0.01"
            onChange={(event) =>
              inputChangehandler("Amount", event.target.value)
            }
          />
        </div>
        <div className="new-expense__control">
          <label>Date </label>
          <input
            type="date"
            value={enteredDate}
            min={"2019-01-01"}
            max={"2023-12-31"}
            onChange={(event) => inputChangehandler("Date", event.target.value)}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
