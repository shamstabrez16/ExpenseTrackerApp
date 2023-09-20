import React, { useState } from "react";
import Card from "../ui/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "../newExpense/ExpensesFilter";
import ExpensesList from "../newExpense/ExpensesList";
import ExpensesChart from "../newExpense/ExpensesChart";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const yearChangeHandler = (data) => {
    setFilteredYear(data);
  };
  /// Filter items based on the target year
  const filteredItems = props.items.filter((item) => {
    return item.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onYearChange={yearChangeHandler}
      />
      <ExpensesChart expenses={filteredItems}></ExpensesChart>
    <ExpensesList items= {filteredItems}/>
    </Card>
  );
};
export default Expenses;
