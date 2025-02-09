import React from "react";

const Dashboard = ({ transactions, theme }) => {
  const income = transactions
    .filter((transaction) => transaction.amount > 0)
    .reduce((p, c) => p + c.amount, 0);

  const expense = transactions
    .filter((transaction) => transaction.amount < 0)
    .reduce((p, c) => p + c.amount, 0);

  const balance = transactions.reduce((p, c) => p + c.amount, 0);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className={`p-6 rounded-lg ${theme === "light" ? "bg-green-500" : "bg-green-800"}`}>
        <h1 className="text-2xl text-white">Income</h1>
        <h1 className="text-4xl text-white">{income}</h1>
      </div>
      <div className={`p-6 rounded-lg ${theme === "light" ? "bg-red-500" : "bg-red-800"}`}>
        <h1 className="text-2xl text-white">Expense</h1>
        <h1 className="text-4xl text-white">{expense}</h1>
      </div>
      <div className={`p-6 rounded-lg ${theme === "light" ? "bg-yellow-500" : "bg-yellow-800"}`}>
        <h1 className="text-2xl text-white">Balance</h1>
        <h1 className="text-4xl text-white">{balance}</h1>
      </div>
    </div>
  );
};

export default Dashboard;
