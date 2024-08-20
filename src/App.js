import React, { useState } from 'react';

function App() {
  const [num, setNum] = useState(0);
  const [history, setHistory] = useState([0]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const increment = () => {
    if (num < 150) {
      const newNum = num + 1;
      updateHistory(newNum);
    }
  };

  const decrement = () => {
    if (num > 0) {
      const newNum = num - 1;
      updateHistory(newNum);
    }
  };

  const updateHistory = (newNum) => {
    const newHistory = history.slice(0, currentIndex + 1);
    setHistory([...newHistory, newNum]);
    setCurrentIndex(currentIndex + 1);
    setNum(newNum);
  };

  const undo = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setNum(history[currentIndex - 1]);
    }
  };

  const redo = () => {
    if (currentIndex < history.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setNum(history[currentIndex + 1]);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 to-blue-300">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-6 text-center">Jarurat Care</h1>
        
       
        <div className="mb-6 text-center">
          <span className="text-3xl font-bold text-gray-800 border border-gray-300 rounded-full px-6 py-4 bg-gray-100 shadow-lg">
            {num}
          </span>
        </div>
        
        
        <div className="w-full max-w-lg bg-gray-200 rounded-full h-8 mb-6 overflow-hidden">
          <div
            style={{ width: `${(num / 150) * 100}%` }}
            className={`bg-gradient-to-r from-green-400 to-blue-500 h-full rounded-full transition-all duration-500 ease-in-out`}
          ></div>
        </div>
        
     
        <div className="flex justify-center space-x-4 mb-6">
          <a
            onClick={decrement}
            className="group relative inline-block text-sm font-medium text-white focus:outline-none focus:ring cursor-pointer"
          >
            <span className="absolute inset-0 border border-red-600 group-active:border-red-500"></span>
            <span
              className="block border border-red-600 bg-red-600 px-12 py-3 transition-transform active:border-red-500 active:bg-red-500 group-hover:-translate-x-1 group-hover:-translate-y-1"
            >
              -1
            </span>
          </a>
          <a
            onClick={increment}
            className="group relative inline-block text-sm font-medium text-white focus:outline-none focus:ring cursor-pointer"
          >
            <span className="absolute inset-0 border border-green-600 group-active:border-green-500"></span>
            <span
              className="block border border-green-600 bg-green-600 px-12 py-3 transition-transform active:border-green-500 active:bg-green-500 group-hover:-translate-x-1 group-hover:-translate-y-1"
            >
              +1
            </span>
          </a>
        </div>
        
        
        <div className="flex justify-center space-x-4">
          <a
            onClick={undo}
            className="group relative inline-block text-sm font-medium text-white focus:outline-none focus:ring cursor-pointer"
          >
            <span className="absolute inset-0 border border-yellow-500 group-active:border-yellow-400"></span>
            <span
              className="block border border-yellow-500 bg-yellow-500 px-12 py-3 transition-transform active:border-yellow-400 active:bg-yellow-400 group-hover:-translate-x-1 group-hover:-translate-y-1"
            >
              Undo
            </span>
          </a>
          <a
            onClick={redo}
            className="group relative inline-block text-sm font-medium text-white focus:outline-none focus:ring cursor-pointer"
          >
            <span className="absolute inset-0 border border-blue-600 group-active:border-blue-500"></span>
            <span
              className="block border border-blue-600 bg-blue-600 px-12 py-3 transition-transform active:border-blue-500 active:bg-blue-500 group-hover:-translate-x-1 group-hover:-translate-y-1"
            >
              Redo
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
