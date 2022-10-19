import React, { useState } from 'react';
import './Expenses.css';
import Card from './Card';
import ExpenseFilter from './ExpenseFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

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
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses}/>
      </Card>
    </div>
  )
}

export default Expenses;