import React from "react";
import "./ExpenseDate.css";

const ExpenseDate = ({date}) => {
  let month = date.toLocaleDateString("en-us", { month: "long" });
  let ldate = date.toLocaleDateString("en-us", {
    day: "numeric",
  });
  let year = date.toLocaleDateString("en-us", { year: "numeric" });

  return (
    <div className="expense-date">
      <div className="expense-date__month,">{month}</div>
      <div className="expense-date__day">{ldate}</div>
      <div className="expense-date__year">{year}</div>
    </div>
  );
};

export default ExpenseDate;
