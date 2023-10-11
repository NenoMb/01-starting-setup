import './NewExpense.css'
import ExpenseForm from './ExpenseForm.js';
import React, {useState} from 'react';

const NewExpense = (props) => {

  const [isEditing, setIsEdditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    console.log(expenseData);
    props.onAddExpense(expenseData);
    setIsEdditing(false);
  }

  const startEddingHandler = () => {
    setIsEdditing(true);
  }

  const stopEddingHandler = () => {
    setIsEdditing(false);
  }


  return (
    <div className="new-expense">
      {!isEditing && <button onClick={startEddingHandler}>Add New Expense</button>}
      {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} stopEddingHandler={stopEddingHandler}  />}
    </div>
  );
};

export default NewExpense;
