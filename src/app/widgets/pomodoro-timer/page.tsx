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
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Pomodoro Timer</h1>
      <h2>
        {minutes}:{seconds.toString().padStart(2, "0")}
      </h2>
      <button onClick={() => setIsRunning(!isRunning)}>
        {isRunning ? "Pause" : "Start"}
      </button>
      <button onClick={() => setTimeLeft(25 * 60)}>Reset</button>
    </div>
  );
}
