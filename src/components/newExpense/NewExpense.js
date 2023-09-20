import React ,{useState}from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [isEditing, setIsEditing]=useState(false);

  
  const saveExpenseDataHandler = (expenseEntertedData) => {
    const expenseData = {
      ...expenseEntertedData,
      id: Math.random().toString()
    };
    props.onAddExpenseData(expenseData);
    setIsEditing(false);
  };
  const StartEditingHandler =()=>{
    setIsEditing(true);
  }
  const StopEditingHandler =()=>{
    setIsEditing(false);
  }
  return (
    <div className="new-expense">
      {!isEditing && <button onClick={StartEditingHandler}>Add new Expense</button>}
      {isEditing && <ExpenseForm onSaveExpenseData ={saveExpenseDataHandler} onCancel = {StopEditingHandler}></ExpenseForm>}
    </div>
  );
};

export default NewExpense;
