import React, { useState } from 'react'
import ExpenseItem from "./ExpenseItem/ExpenseItem";
import ExpenseFilter from "./ExpensesFilter/ExpensesFilter";
import Card from "../UI/Card";
import './Expenses.css';

const Expenses = (props) => {
  const [filteredYear,setFilteredYear] = useState('2021')

  const filterChangeHandler = selectedYear => {
   setFilteredYear(selectedYear);
    // console.log('Expense.js');
    // console.log(selectedYear);
  }

    return (
      <Card className="expenses">
      <div>
          <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
      </div>
          {props.items.map(
            expense => 
            <ExpenseItem 
            title={expense.title} 
            amount={expense.amount}
            date = {expense.date}
            />)}
      </Card>
    );

}

export default Expenses;