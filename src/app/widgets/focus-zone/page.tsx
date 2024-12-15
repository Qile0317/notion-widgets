"use client";

import React, { useState } from "react";

export default function EphemeralNotesPage() {
  const [notes, setNotes] = useState("");
  const [title, setTitle] = useState("Untitled Notes");

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 py-12 px-6">
      {/* Page Title */}
      <input
        className="w-full max-w-2xl text-2xl font-bold mb-4 p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Title your notes..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      {/* Notes Area */}
      <textarea
        className="w-full max-w-2xl h-[70vh] p-4 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Write your ephemeral notes here. They'll disappear after this session."
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
      />

      {/* Temporary Actions */}
      <div className="mt-6 flex space-x-4">
        <button
          className="px-6 py-3 text-lg font-medium bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300"
          onClick={() => {
            setNotes("");
            setTitle("Untitled Notes");
          }}
        >
          Clear Notes
        </button>
        <button
          className="px-6 py-3 text-lg font-medium bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
          onClick={() => navigator.clipboard.writeText(`Title: ${title}\n\n${notes}`)}
        >
          Copy Notes to Clipboard
        </button>
      </div>
    </div>
  );
}
