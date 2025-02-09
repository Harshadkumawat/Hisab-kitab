import React from "react";

const ListItem = ({ transaction, removeTransaction, editTransaction }) => {
  return (
    <li
      className={
        transaction.amount > 0
          ? "bg-blue-500 text-white p-4 rounded"
          : "bg-gray-500 text-white p-4 rounded"
      }
    >
      <p>{transaction.text}</p>
      <h1 className="text-2xl font-bold">{transaction.amount}</h1>
      <span className="float-right">
        <button
          className="bg-yellow-500 text-white text-sm px-2 py-1 mx-1 rounded"
          onClick={() => editTransaction(transaction)}
        >
          Edit
        </button>
        <button
          className="bg-red-500 text-white text-sm px-2 py-1 mx-1 rounded"
          onClick={() => removeTransaction(transaction.id)}
        >
          Delete
        </button>
      </span>
    </li>
  );
};

export default ListItem;
