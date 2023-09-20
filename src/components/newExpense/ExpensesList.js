import React from "react";
import ExpenseItem from "../expenses/ExpenseItem";
import "./ExpensesList"

const ExpensesList =(props)=>{
  
 if(props.items.length === 0){
  return(<div > <h2 className="expenses-list__fallback">No expenses found. </h2></div>)
}

return( <div>
    <ul className="expenses-list">
{props.items.map((filteredItem)=>  <ExpenseItem key={filteredItem.id} expense={filteredItem} />)}
    </ul>
</div>);
};

export default ExpensesList;