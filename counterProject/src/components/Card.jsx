import React, { useState, useEffect } from "react";

const Card = () => {
  const [count, setCount] = useState(() => {
    const savedCount = localStorage.getItem("counts");
    const num = Number(savedCount);
    return isNaN(num) ? 0 : num;
  });

  useEffect(() => {
    localStorage.setItem("counts", count);
  }, [count]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-sm">
        <h1 className="text-2xl font-bold text-center mb-6">
          Advanced Counter
        </h1>

        {/* Counter Display */}
        <div className="text-center text-5xl font-semibold text-blue-600 mb-6">
          {count}
        </div>

        {/* Buttons */}
        <div className="flex justify-between gap-4">
          <button
            className="flex-1 bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg"
            onClick={() => setCount(count - 1)}
          >
            -
          </button>

          <button
            className="flex-1 bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg"
            onClick={() => setCount(count + 1)}
          >
            +
          </button>
        </div>

        {/* Reset */}
        <button
          className="mt-4 w-full bg-gray-700 hover:bg-gray-800 text-white py-2 rounded-lg"
          onClick={() => setCount(0)}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Card;
