import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import Form from "./components/Form";
import ListGroup from "./components/ListGroup";

const App = () => {
  const [transactions, setTransactions] = useState([]);
  const [edit, setEdit] = useState({
    transaction: {},
    isEdit: false,
  });
  const [theme, setTheme] = useState("light");

  // Toggle Theme
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  // Add Transaction
  const addTransaction = (text, amount) => {
    setTransactions([
      { id: crypto.randomUUID(), text, amount },
      ...transactions,
    ]);
  };

  // Remove Transaction
  const removeTransaction = (id) => {
    setTransactions(
      transactions.filter((transaction) => transaction.id !== id)
    );
  };

  // Edit Transaction
  const editTransaction = (transaction) => {
    setEdit({ transaction: transaction, isEdit: true });
  };

  // Updated Transaction
  const updateTransaction = (updatedTransaction) => {
    setTransactions(
      transactions.map((transaction) =>
        transaction.id === updatedTransaction.id
          ? updatedTransaction
          : transaction
      )
    );
    setEdit({ transaction: {}, isEdit: false });
  };

  return (
    <div className={theme === "light" ? "light-theme" : "dark-theme"}>
      <Navbar toggleTheme={toggleTheme} theme={theme} />
      <div className="container mx-auto p-5">
        <Dashboard transactions={transactions} />
        <Form
          addTransaction={addTransaction}
          edit={edit}
          updateTransaction={updateTransaction}
        />
        <ListGroup
          transactions={transactions}
          removeTransaction={removeTransaction}
          editTransaction={editTransaction}
        />
      </div>
    </div>
  );
};

export default App;
