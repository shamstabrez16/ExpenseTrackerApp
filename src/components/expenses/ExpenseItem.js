import React, {useState} from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpesneDate";
import Card from "../ui/Card";

const ExpenseItem = ({ expense }) => {
  const [title, setTitle ]  =useState(expense.title);

  const clickHandler=()=>{
    setTitle("updated!");
 
    console.log(title);
  }

  return (
    <Card className="expense-item">
    <ExpenseDate date={expense.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${expense.amount}</div>
        <button onClick={clickHandler}  >
        Click me
    </button>
      </div>
    </Card>
  );
};

export default ExpenseItem;
