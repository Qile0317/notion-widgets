"use client";
import React, { useState, useEffect } from "react";

export default function PomodoroTimerPage() {
  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (!isRunning) return;
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, [isRunning]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-gray-800">
      <h1 className="text-4xl font-bold mb-8 text-gray-900">Pomodoro Timer</h1>
      <h2 className="text-6xl font-mono mb-6">
        {minutes}:{seconds.toString().padStart(2, "0")}
      </h2>
      <div className="flex space-x-4">
        <button
          onClick={() => setIsRunning(!isRunning)}
          className={`px-6 py-3 text-lg font-medium rounded-lg shadow-md transition 
          ${
            isRunning
              ? "bg-red-500 text-white hover:bg-red-600"
              : "bg-green-500 text-white hover:bg-green-600"
          }`}
        >
          {isRunning ? "Pause" : "Start"}
        </button>
        <button
          onClick={() => setTimeLeft(25 * 60)}
          className="px-6 py-3 text-lg font-medium rounded-lg bg-gray-500 text-white shadow-md hover:bg-gray-600 transition"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
