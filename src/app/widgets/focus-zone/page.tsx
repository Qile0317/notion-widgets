"use client";

import React, { useState } from "react";
import { useApplyTheme } from "@/lib/hooks/useApplyTheme";

export default function FocusZone() {
  useApplyTheme();

  const [notes, setNotes] = useState("");
  const [title, setTitle] = useState("");

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
            backgroundColor: "var(--color-button)",
            color: "var(--color-text)",
          }}
          onClick={() => {
            setNotes("");
            setTitle("");
          }}
          onMouseDown={(e) => e.currentTarget.style.backgroundColor = "var(--color-button-pressed)"}
          onMouseUp={(e) => e.currentTarget.style.backgroundColor = "var(--color-button)"}
        >
          Clear
        </button>
        <button
          className="px-3 py-1 text-sm font-medium rounded-lg shadow-md focus:outline-none focus:ring-2"
          style={{
            backgroundColor: "var(--color-button)",
            color: "var(--color-text)",
          }}
          onClick={() =>
            navigator.clipboard.writeText(`Title: ${title}\n\n${notes}`)
          }
          onMouseDown={(e) => e.currentTarget.style.backgroundColor = "var(--color-button-pressed)"}
          onMouseUp={(e) => e.currentTarget.style.backgroundColor = "var(--color-button)"}
        >
          Copy
        </button>
      </div>
    </div>
  );
}
