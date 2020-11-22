import React, { useContext, useState } from 'react';
import { TransactionContext } from './transContext';


function Child() {

  //let {transactions,addTransaction} = useContext(TransactionContext);

  const { transactions, addTransaction } = useContext(TransactionContext);

  let [newDesc, setDesc] = useState("");
  let [newAmount, setAmount] = useState(0);

  const handleAddition = (event) => {
    event.preventDefault(); 
    console.log(newDesc, newAmount);
    addTransaction({
      amount:newAmount,
      desc:newDesc
    }) 
  }

  return (
    <div className="container">
      <h1 className="text-center">Expense Tracker</h1>

      <h3>Your Balance <br /> $260.00</h3>

      <div className="expense-container">
        <h3>INCOME <br /> $500.00</h3>
        <h3>EXPENSE <br /> $240.00 </h3>
      </div>


      <h3>History</h3><hr />

      <ul className="transaction-list">
        {transactions.map((transObj, ind) => {
          return (<li key={ind}>
            <span>${transObj.desc}</span>
            <span>${transObj.amount}</span> 
          </li>
          )
        })}
      </ul>

      <h3>Add new Transactions</h3>
      <hr />

      <form className="transaction-form" onSubmit={handleAddition}>
        <lable>
          Enter Description
      </lable> <br />
        <input type="Text" onChange={(ev) => setDesc(ev.target.value)} required />

        <br />

        <lable>
          Enter Expense
      </lable> <br />
        <input type="number" onChange={(ev) => setAmount(ev.target.value)} required />
        <br />
        <input type="submit" value="Add Transaction">

        </input>
      </form>



    </div>
  );
}

export default Child;
