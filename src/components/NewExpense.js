import React, { useState } from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
    const [initialState, setInitialState] = useState(true);

    const [newForm, setNewForm] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData);
    }

    const newFormHandler = () => {
        setInitialState(true);
        setNewForm(false);
    }

    const initialStateHandler = () => {
        setInitialState(false);
        setNewForm(true);
    }

    return <div className="new-expense">
        {initialState && <button onClick={initialStateHandler}>Add New Expense</button>}
        {newForm && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} newFormCheck={newFormHandler}/>}
    </div>
}

export default NewExpense;