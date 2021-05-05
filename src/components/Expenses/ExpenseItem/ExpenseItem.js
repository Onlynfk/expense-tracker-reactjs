import React, {useState} from 'react';
import './ExpenseItem.css';
import Card from '../../UI/Card';
import ExpenseDate from '../ExpenseDate/ExpenseDate';


const ExpenseItem = (props) =>{
// function check handler
    const [title, setTitle] = useState(props.title);
    console.log("ExpenseItem re-evaluated", )
    // let title = props.title;

    const clickHandler =() =>{
        setTitle("Updated!");
        console.log(title);
    };

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
          <button onClick={clickHandler}> Change title</button>
        </Card>
        </li>
    );

}

export default ExpenseItem;