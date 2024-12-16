"use client";
import { useState } from "react";
import { ClipboardIcon, CheckIcon } from "@heroicons/react/24/outline";

interface CopyButtonProps {
  href: string;
  disappearDuration?: number;
  small?: boolean;
  bgColor?: string;
}

const CopyButton: React.FC<CopyButtonProps> = ({ href, disappearDuration = 2000, small = true, bgColor = "bg-blue-500" }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const url = new URL(href, window.location.origin);
    url.search = window.location.search; // Preserve URL parameters
    navigator.clipboard.writeText(url.href).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), disappearDuration);
    });
  };

  return (
    <button
      onClick={handleCopy}
      className={`flex items-center ${small ? "p-1 w-8 h-8 justify-center" : "p-2"} ${bgColor} text-white rounded hover:bg-blue-600`}
    >
      {copied ? (
        <CheckIcon className="h-5 w-5" />
      ) : (
        <ClipboardIcon className="h-5 w-5" />
      )}
      {!small && <span className="ml-2">{copied ? "Copied!" : "Copy"}</span>}
    </button>
  );
};

export default CopyButton;