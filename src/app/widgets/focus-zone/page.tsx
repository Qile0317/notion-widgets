"use client";

import React, { useState, useEffect } from "react";
import { applyTheme } from "@/lib/theme";

export default function FocusZone() {
  const [notes, setNotes] = useState("");
  const [title, setTitle] = useState("");

  // Optionally apply theme based on query parameters
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const theme = urlParams.get("theme") || "light"; // Default to light theme
    applyTheme(theme);
  }, []);

  return (
    <div className="h-full flex flex-col items-center justify-center p-4">
      <input
        className="w-full max-w-2xl text-sm font-bold mb-2 p-2 border rounded-lg focus:outline-none focus:ring-2"
        style={{
          backgroundColor: "var(--color-bg)",
          color: "var(--color-text)",
          borderColor: "var(--color-accent)",
        }}
        placeholder="Title your notes..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        className="w-full max-w-2xl h-40 p-2 text-sm border rounded-lg focus:outline-none focus:ring-2"
        style={{
          backgroundColor: "var(--color-bg)",
          color: "var(--color-text)",
          borderColor: "var(--color-accent)",
        }}
        placeholder="Write your ephemeral notes here. They will be cleared after this section so feel free to jot down anything."
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
      />

      <div className="mt-2 flex space-x-2">
        <button
          className="px-3 py-1 text-sm font-medium rounded-lg shadow-md focus:outline-none focus:ring-2"
          style={{
            backgroundColor: "var(--color-accent)",
            color: "var(--color-text-dark)",
          }}
          onClick={() => {
            setNotes("");
            setTitle("");
          }}
        >
          Clear
        </button>
        <button
          className="px-3 py-1 text-sm font-medium rounded-lg shadow-md focus:outline-none focus:ring-2"
          style={{
            backgroundColor: "var(--color-accent)",
            color: "var(--color-text-dark)",
          }}
          onClick={() =>
            navigator.clipboard.writeText(`Title: ${title}\n\n${notes}`)
          }
        >
          Copy
        </button>
      </div>
    </div>
  );
}
