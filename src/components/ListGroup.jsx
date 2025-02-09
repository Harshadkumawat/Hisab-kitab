import React from "react";
import ListItem from "./ListItem";

const ListGroup = ({ transactions, removeTransaction, editTransaction }) => {
  if (transactions.length === 0) {
    return <h1 className="my-5 text-center text-2xl">No Transactions Yet...</h1>;
  }

  return (
    <ul className="my-3 space-y-4">
      {transactions.map((transaction) => (
        <ListItem
          key={transaction.id}
          transaction={transaction}
          removeTransaction={removeTransaction}
          editTransaction={editTransaction}
        />
      ))}
    </ul>
  );
};

export default ListGroup;
