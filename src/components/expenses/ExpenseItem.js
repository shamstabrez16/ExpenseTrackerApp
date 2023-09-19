import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpesneDate";
import Card from "../ui/Card";

const ExpenseItem = ({ expense }) => {

  return (
    <Card className="expense-item">
    <ExpenseDate date={expense.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{expense.title}</h2>
        <div className="expense-item__price">${expense.amount}</div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
