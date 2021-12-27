import React, { useState } from "react";
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";


const NewExpense = (props) => {
    const [openInputForm, setOpenInputForm] = useState(false);
    const saveExpenseData = (enteredExpenseData) => {
        const expenseData = { ...enteredExpenseData, id: Math.random().toString() };
        props.onAddExpenseHandler(expenseData);
        setOpenInputForm(false);
    }
    const onInputFormHandler = () => {
        setOpenInputForm(true);
    }
    const stopInputForm = () => {
        setOpenInputForm(false);
    }
    return (
        <div className="new-expense">
            {!openInputForm && <button onClick={onInputFormHandler}>Add Expense</button>}
            {openInputForm && < ExpenseForm onSaveExpenseData={saveExpenseData} onCancel={stopInputForm} />}
        </div>
    );
};

export default NewExpense;