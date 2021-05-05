import './ExpenseItem.css';
import Card from '../../UI/Card';
import ExpenseDate from '../ExpenseDate/ExpenseDate';


const ExpenseItem = (props) =>{
// function check handler
    console.log("ExpenseItem re-evaluated", )
    // let title = props.title;

  

    return ( 
        <li>
        <Card className="expense-item ">
          <ExpenseDate date = {props.date}/>
          <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">
              ${props.amount}
          </div>
          </div>
        </Card>
        </li>
    );

}

export default ExpenseItem;