import React, { useState } from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Link } from "react-router-dom";
ChartJS.register(ArcElement, Tooltip, Legend);

const ExpenseDashboard = () => {
  const [expenses, setExpenses] = useState([]);
  const [total, setTotal] = useState(0);
  const [monthly, setMonthly] = useState(0);
  const [pocket, setPocket] = useState(0);
  const [showReports, setShowReports] = useState(false);

  const [newExpense, setNewExpense] = useState({
    name: "",
    amount: "",
    category: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewExpense((prev) => ({ ...prev, [name]: value }));
  };

  const addExpense = (e) => {
    e.preventDefault();
    const amount = parseFloat(newExpense.amount);
    if (!amount || amount <= 0) return;

    setExpenses((prev) => [...prev, newExpense]);
    setTotal((prev) => prev + amount);

    if (newExpense.category === "Monthly") {
      setMonthly((prev) => prev + amount);
    } else if (newExpense.category === "Pocket") {
      setPocket((prev) => prev + amount);
    }

    setNewExpense({ name: "", amount: "", category: "" });
  };

  const expenseData = {
    labels: ["Monthly Expense", "Pocket Expense"],
    datasets: [
      {
        data: [monthly, pocket],
        backgroundColor: ["#3b82f6", "#facc15"],
        hoverBackgroundColor: ["#2563eb", "#eab308"],
      },
    ],
  };

  return (
    <div>
      <Link to="/">
      <button className="w-22 m-2 px-4 py-4 bg-emerald-400 rounded">Logout</button></Link>
    <div className="max-w-6xl mx-auto p-6 bg-gradient-to-r from-blue-100 to-yellow-100 rounded-lg shadow-lg space-y-6">
      <h1 className="text-3xl font-bold text-center text-gray-800">
        Expense Dashboard
      </h1>

      {/* Expense Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold text-gray-600">Total Expense</h2>
          <p className="text-2xl font-bold text-gray-800">₹{total}</p>
        </div>
        <div className="bg-blue-100 p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold text-blue-600">
            Monthly Expense
          </h2>
          <p className="text-2xl font-bold text-blue-800">₹{monthly}</p>
        </div>
        <div className="bg-yellow-100 p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold text-yellow-600">
            Pocket Expense
          </h2>
          <p className="text-2xl font-bold text-yellow-800">₹{pocket}</p>
        </div>
      </div>

      {/* Pie Chart */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold text-gray-600 text-center mb-4">
          Expense Breakdown
        </h2>
        <Pie data={expenseData} />
      </div>

      {/* Add Expense Form */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold text-gray-600 mb-4">
          Add Expense
        </h2>
        <form className="space-y-4" onSubmit={addExpense}>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Expense Name
            </label>
            <input
              type="text"
              name="name"
              value={newExpense.name}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Amount
            </label>
            <input
              type="number"
              name="amount"
              value={newExpense.amount}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Category
            </label>
            <select
              name="category"
              value={newExpense.category}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              required
            >
              <option value="">Select</option>
              <option value="Monthly">Monthly</option>
              <option value="Pocket">Pocket</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg shadow-md hover:bg-blue-600"
          >
            Add Expense
          </button>
        </form>
      </div>

      {/* Generate Reports Section */}
      <div>
        <button
          onClick={() => setShowReports((prev) => !prev)}
          className="w-full bg-green-500 text-white py-2 rounded-lg shadow-md hover:bg-green-600"
        >
          {showReports ? "Hide Reports" : "View Reports"}
        </button>
        {showReports && (
          <div className="bg-white p-6 mt-4 rounded-lg shadow-md space-y-4">
            <h2 className="text-lg font-semibold text-gray-600">
              Expense Reports
            </h2>
            {expenses.length > 0 ? (
              <ul className="divide-y divide-gray-300">
                {expenses.map((expense, index) => (
                  <li key={index} className="py-2 flex justify-between">
                    <span className="font-medium">{expense.name}</span>
                    <span className="text-gray-600">₹{expense.amount}</span>
                    <span className="text-gray-400">{expense.category}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500">No expenses added yet.</p>
            )}
          </div>
        )}
      </div>
    </div>
    </div>
  );
};

export default ExpenseDashboard;
