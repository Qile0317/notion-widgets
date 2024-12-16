"use client";

import React, { useState, useEffect } from "react";
import { applyTheme } from "@/lib/theme";

export default function PomodoroTimer() {
  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [isRunning, setIsRunning] = useState(false);

  // Apply theme dynamically based on query parameter
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const theme = urlParams.get("theme") || "light"; // Default to light theme
    applyTheme(theme);
  }, []);

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
    <div className="h-full flex flex-col items-center justify-center">
      <h2
        className="text-4xl font-mono mb-4"
        style={{ color: "var(--color-text)" }}
      >
        {minutes}:{seconds.toString().padStart(2, "0")}
      </h2>
      <div className="flex space-x-2">
        <button
          onClick={() => setIsRunning(!isRunning)}
          className="px-4 py-2 text-sm font-medium rounded-lg shadow-md transition"
          style={{
            backgroundColor: isRunning ? "var(--color-accent)" : "var(--color-bg)",
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
            backgroundColor: "var(--color-accent)",
            color: "var(--color-text-dark)",
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}
