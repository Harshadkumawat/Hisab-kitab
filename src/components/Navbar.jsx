import React from "react";

const Navbar = ({ toggleTheme, theme }) => {
  return (
    <nav className={theme === "light" ? "bg-green-600" : "bg-gray-800 p-4"}>
      <div className="container mx-auto flex justify-between items-center">
        <span className="text-white text-xl font-bold">KhataBook</span>
        <button
          onClick={toggleTheme}
          className="text-white bg-gray-700 px-4 py-2 rounded"
        >
          {theme === "light" ? "Dark Mode" : "Light Mode"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

