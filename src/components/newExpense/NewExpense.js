import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (expenseEntertedData) => {
    const expenseData = {
      ... expenseEntertedData,
      id: Math.random().toString()
    };
    props.onAddExpenseData(expenseData);

  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData ={saveExpenseDataHandler}></ExpenseForm>
    </div>
  );
};

export default NewExpense;
