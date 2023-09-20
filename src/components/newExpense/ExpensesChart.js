import React from "react";
import Chart from "../chart/Chart";

function ExpensesChart (props) {
    console.log("from ExpensesChart");
    console.log(props.expenses);
    const charData =[
        {label : 'Jan',value : 0},
        {label : 'Feb',value : 0},
        {label : 'Mar',value : 0},
        {label : 'Apr',value : 0},
        {label : 'May',value : 0},
        {label : 'June',value : 0},
        {label : 'Jul',value : 0},
        {label : 'Aug',value : 0},
        {label : 'Sep',value : 0},
        {label : 'Oct',value : 0},
        {label : 'Nov',value : 0},
        {label : 'Dec',value : 0},
    ];

    for (const expense of props.expenses) {
        console.log(expense.amount);
        const month = expense.date.getMonth();
        console.log(month);
        charData[month].value += expense.amount; // Convert to number using parseFloat
    }

    return (
        <div>
            <Chart dataPoints={charData} />
        </div>
    );
}

export default ExpensesChart;
