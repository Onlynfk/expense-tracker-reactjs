import React, { useState } from 'react'
import ExpensesList from "./ExpensesList/ExpensesList";
import ExpenseFilter from "./ExpensesFilter/ExpensesFilter";
import Card from "../UI/Card";
import './Expenses.css';

const Expenses = (props) => {
  const [filteredYear,setFilteredYear] = useState('2021');
  //const [showfiltered, setshowfiltered] = useState({});


  const filterChangeHandler = selectedYear => {
   setFilteredYear(selectedYear);
  }
  const filteredExpenses = props.items.filter(expense =>{
    return expense.date.getFullYear().toString() === filteredYear;
  });
  
 
  
    return (
      <Card className="expenses">
      <div>
          <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
      </div>
        <ExpensesList  items={filteredExpenses}/>
      </Card>
    );

}

export default Expenses;