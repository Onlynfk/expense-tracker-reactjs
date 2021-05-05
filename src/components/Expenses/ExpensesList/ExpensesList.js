import ExpenseItem from '../ExpenseItem/ExpenseItem';
import './ExpensesList.css';

const ExpensesList = (props) => {
    let expenseContent =  <p className="expenses-list__fallback"> No expenses here yet, add one 😊 </p>;

    if (props.items.length ===  0 ){
        return expenseContent;
     }
    return <ul className="expenses-list">
      {
            props.items.map((expense) => (
                <ExpenseItem 
                key={expense.id}
                title={expense.title} 
                amount={expense.amount}
                date = {expense.date}
                />))
      }
         </ul>

}
export default ExpensesList;