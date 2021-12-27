import React, { useState } from "react";
import './Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('2020');

    const SelectedYearHandler = (selectedYear) => {
        setFilteredYear(selectedYear);

    };
    const filteredExpenses = props.items.filter((item) => {
        return item.date.getFullYear().toString() === filteredYear;
    }
    );



    return (
        <Card className="expenses">

            <ExpensesFilter defaultYear={filteredYear} onSelectedYear={SelectedYearHandler} />
            <ExpensesChart expenses={filteredExpenses} />
            <ExpensesList items={filteredExpenses} />

        </Card>

    );

}


export default Expenses;




