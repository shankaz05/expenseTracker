import React, { useState } from 'react';

function ExpenseTracker() {
  const [transactions, setTransactions] = useState([]);
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");

  const handleAddTransaction = () => {
    if (!description || !amount) {
      alert("Please enter both description and amount");
      return;
    }
    const newTransaction = {
      description,
      amount: parseFloat(amount),
    };
    setTransactions([...transactions, newTransaction]);
    setDescription("");
    setAmount("");
  };

  const calculateBalance = () => {
    return transactions.reduce((acc, transaction) => acc + transaction.amount, 0);
  };

  return (
    <div className='expense-box'>
        <h2>Expense Tracker</h2>
      
        <div>
            <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter description"
            />
      
            <input
            type="text"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount"
            />
      
            <button onClick={handleAddTransaction}>Add Transaction</button>
      
      </div>

      {/* Display Balance */}
      <h3>Amount Spent: ${calculateBalance().toFixed(2)}</h3>
        <div className='history'>
            <h4>Transaction History:</h4>
             <ul>
                {transactions.map((transaction, index) => (
                    <li key={index}>
                    {transaction.description}: ${transaction.amount.toFixed(2)}
                    </li>
                ))}
            </ul>
        </div>
      
      
    </div>
  );
}

export default ExpenseTracker;
