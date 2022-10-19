import React, { useState } from 'react';
import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from './Card';
import ExpenseFilter from './ExpenseFilter';
import ExpensesList from './ExpensesList';

function Expenses (props) {  
  const [year, setYear] = useState('2020');  
  const filterYearHandler = (selectedYear) => {
    setYear(selectedYear);
  }

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === year;
  })

  return (
    <div>
      <Card className='expenses'>
        <ExpenseFilter yearChangeHandler={filterYearHandler} selectedYear={year} />
        {/* {filteredExpenses.length === 0 && <p>No expense found.</p>}
        {filteredExpenses.map((expense) => 
          (<ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date}/>
        ))} */}
        <ExpensesList items={filteredExpenses}/>
      </Card>
    </div>
  )
}

export default Expenses;