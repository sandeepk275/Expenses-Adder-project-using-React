import React, { useState } from 'react';
import './ExpenseItem.css';
import './ExpenseDate';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card'
function ExpenseItem(props) {
    const [title, setTitle] = useState(props.title);
    const clickHandler = () => {
        setTitle("updated");
        // console.log(title);
    }

    return (
        <li>
            <Card className="expense-item">
                <ExpenseDate date={props.date} />
                <div className="expense-item__description">
                    <h2 className="expense-item h2">{title}</h2>
                    <div className="expense-item__price">Rs. {props.amount}</div>
                </div>
                <button onClick={clickHandler}>change title</button>
            </Card>
        </li>
    );
}
export default ExpenseItem;