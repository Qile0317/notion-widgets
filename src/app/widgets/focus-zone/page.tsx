"use client";
import React, { useState } from "react";

export default function FocusZone() {
  const [notes, setNotes] = useState("");
  const [title, setTitle] = useState("");

  return (
    <div className="h-full flex flex-col items-center justify-center p-4">
      <input
        className="w-full max-w-2xl text-sm font-bold mb-2 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
        placeholder="Title your notes..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        className="w-full max-w-2xl h-40 p-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
        placeholder="Write your ephemeral notes here. They will be cleared after this section so feel free to jot down anything."
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
      />

      <div className="mt-2 flex space-x-2">
        <button
          className="px-3 py-1 text-sm font-medium bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300"
          onClick={() => {
            setNotes("");
            setTitle("Untitled Notes");
          }}
        >
          Clear
        </button>
        <button
          className="px-3 py-1 text-sm font-medium bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
          onClick={() => navigator.clipboard.writeText(`Title: ${title}\n\n${notes}`)}
        >
          Copy
        </button>
      </div>
    </div>
  );
}