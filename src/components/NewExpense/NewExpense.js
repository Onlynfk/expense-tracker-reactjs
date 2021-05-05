import React, {useState} from "react";
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense =  (props) =>{
    const [isEditing, setisEditing] = useState(false);

    const saveExpenseHandler = (enteredExpenseData) =>{
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
        setisEditing(false);

    }
    
    const startEditingHandler = () => {
        setisEditing(true);
    };
    const stopEditingHandler = () => {
        setisEditing(false);
    };
    return (
        
        <div className="new-expense">  
        {!isEditing && <button onClick={startEditingHandler}> Add Expense</button>}
        {isEditing &&  <ExpenseForm onSaveExpenseData={saveExpenseHandler}  onCancel={stopEditingHandler}/>}  
        </div>
        
    )
;}

export default NewExpense;