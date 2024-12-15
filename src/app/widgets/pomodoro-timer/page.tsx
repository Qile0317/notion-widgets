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
    <div className="h-full flex flex-col items-center justify-center">
      <h2 className="text-4xl font-mono mb-4">
        {minutes}:{seconds.toString().padStart(2, "0")}
      </h2>
      <div className="flex space-x-2">
        <button
          onClick={() => setIsRunning(!isRunning)}
          className={`px-4 py-2 text-sm font-medium rounded-lg shadow-md transition 
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
          className="px-4 py-2 text-sm font-medium rounded-lg bg-gray-500 text-white shadow-md hover:bg-gray-600 transition"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
