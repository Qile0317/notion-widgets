"use client";

import React, { useState, useEffect } from "react";
import { useApplyTheme } from "@/lib/hooks/useApplyTheme";

export default function PomodoroTimer() {
  useApplyTheme();

  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [isRunning, setIsRunning] = useState(false);

  // Timer logic
  useEffect(() => {
    if (!isRunning) return;
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, [isRunning]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  const handleReset = () => {
    setTimeLeft(25 * 60);
    setIsRunning(false); // Ensure the timer does not start on reset
  };

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="text-center">
        <h2
          className="text-4xl font-mono mb-4"
          style={{ color: "var(--color-text)" }}
        >
          {minutes}:{seconds.toString().padStart(2, "0")}
        </h2>
        <div className="flex justify-center space-x-2">
          <button
            onClick={() => setIsRunning(!isRunning)}
            className="px-4 py-2 text-sm font-medium rounded-lg shadow-md transition"
            style={{
              backgroundColor: isRunning ? "var(--color-button-pressed)" : "var(--color-button)",
              color: isRunning ? "var(--color-text-dark)" : "var(--color-text)",
              border: `1px solid var(--color-accent)`,
            }}
          >
            {isRunning ? "Pause" : "Start"}
          </button>
          <button
            onClick={handleReset}
            className="px-4 py-2 text-sm font-medium rounded-lg shadow-md transition"
            style={{
              backgroundColor: "var(--color-button)",
              color: "var(--color-text-dark)",
              border: `1px solid var(--color-accent)`,
            }}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}
