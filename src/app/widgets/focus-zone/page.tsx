"use client";

import React, { useState } from "react";

export default function EphemeralNotesPage() {
  const [notes, setNotes] = useState("");
  const [title, setTitle] = useState("Untitled Notes");

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      {/* Page Title */}
      <input
        style={{
          width: "100%",
          fontSize: "24px",
          fontWeight: "bold",
          marginBottom: "10px",
          padding: "10px",
          border: "1px solid #ddd",
          borderRadius: "5px",
        }}
        placeholder="Title your notes..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      {/* Notes Area */}
      <textarea
        style={{
          width: "100%",
          height: "70vh",
          padding: "10px",
          fontSize: "16px",
          border: "1px solid #ddd",
          borderRadius: "5px",
        }}
        placeholder="Write your ephemeral notes here. They'll disappear after this session."
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
      />

      {/* Temporary Actions */}
      <div style={{ marginTop: "10px", textAlign: "center" }}>
        <button
          style={{
            margin: "0 10px",
            padding: "10px 20px",
            fontSize: "16px",
            background: "#f44336",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
          onClick={() => {
            setNotes("");
            setTitle("Untitled Notes");
          }}
        >
          Clear Notes
        </button>
        <button
          style={{
            margin: "0 10px",
            padding: "10px 20px",
            fontSize: "16px",
            background: "#2196f3",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
          onClick={() => navigator.clipboard.writeText(`Title: ${title}\n\n${notes}`)}
        >
          Copy Notes to Clipboard
        </button>
      </div>
    </div>
  );
}
