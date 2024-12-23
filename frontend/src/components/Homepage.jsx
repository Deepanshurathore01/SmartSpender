import { useState } from "react";
import boyimg from "../assets/young-boy.png";
import { Link } from "react-router-dom";

function Homepage() {
  return (
    <div className="relative min-h-screen bg-gray-900 text-white font-sans">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full bg-gray-900 bg-opacity-75 py-4 px-8 flex justify-between items-center z-20 shadow-md">
        
        <div className="text-3xl font-bold text-white">
          Smart<span className="text-teal-400">Spender</span>
        </div>
        <Link to="/login">
        <button className="py-2 px-6 border-2 border-white rounded-lg hover:bg-teal-400 hover:text-white transition duration-300">
          Login
        </button></Link>
      </header>

      {/* Main Section */}
      <main className="flex flex-col items-center justify-center h-screen text-center px-4">
        <div
          className="animate-fade-in-down mb-10"
          style={{ animationDuration: "1.5s" }}
        >
          <img
            src={boyimg}
            alt="Expense Management"
            className="w-92 max-w-md mx-auto rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
          />
        </div>
        <h1
          className="text-5xl font-bold mb-4 animate-fade-in"
          style={{ animationDuration: "2s" }}
        >
          Manage Your Expenses Smarter
        </h1>
        <p
          className="text-xl mb-6 max-w-2xl mx-auto animate-fade-in"
          style={{ animationDuration: "2.5s" }}
        >
          Take control of your finances with SmartSpender. Organize your income,
          track your expenses, and achieve your savings goals effortlessly.
        </p>
        <a
          href="/signup"
          className="bg-teal-400 text-white py-2 px-6 rounded-lg text-xl text-bold shadow-md hover:bg-teal-500 transition duration-300 animate-bounce"
          style={{ animationDuration: "1.5s" }}
        >
          Explore More
        </a>
      </main>
    </div>
  );
}

export default Homepage;
