import React, { useEffect, useState } from "react";

const Form = ({ addTransaction, edit, updateTransaction }) => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // If not in edit mode, add a new transaction, else update the existing one
    !edit.isEdit
      ? addTransaction(text, parseInt(amount))
      : updateTransaction({
          id: edit.transaction ? edit.transaction.id : null, // Check if transaction exists
          text,
          amount: parseInt(amount),
        });

    // Clear the form fields after submit
    setText("");
    setAmount("");
  };

  useEffect(() => {
    if (edit && edit.transaction) {
      setText(edit.transaction.text || "");
      setAmount(edit.transaction.amount || "");
    }
  }, [edit]);

  return (
    <form className="my-3" onSubmit={handleSubmit}>
      <input
        type="text"
        className="w-full border border-gray-300 rounded-md p-2 my-2"
        placeholder="Enter Transaction"
        value={text}
        onChange={(e) => setText(e.target.value)}
        required
      />
      <input
        type="number"
        className="w-full border border-gray-300 rounded-md p-2 my-2"
        placeholder="Enter Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
      />
      <button className="w-full bg-green-500 text-white py-2 rounded-md">
        Save Transaction
      </button>
    </form>
  );
};

export default Form;
