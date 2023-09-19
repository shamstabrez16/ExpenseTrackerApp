import Card from "../ui/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

const Expenses= (props) => {
return(
    <Card className="expenses">
    <ExpenseItem
      expense={props.items[0]}
    ></ExpenseItem>
    <ExpenseItem
      expense={props.items[1]}
    ></ExpenseItem>
    <ExpenseItem
       expense={props.items[2]}
    ></ExpenseItem>
    <ExpenseItem
       expense={props.items[3]}
    ></ExpenseItem>
  </Card>
);
}
export default Expenses;