import React, { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpesneDate";

const ExpenseItem = ({ expense }) => {
  let title = expense.title;
  useState(expense.title);
  const clickHandler =()=>{
    title="updated !";
    console.log("updated !")
  } 

  return (
    <div className="expense-item">
    <ExpenseDate date={expense.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${expense.amount}</div>
        
      </div>
    </div>
  );
};

export default ExpenseItem;
