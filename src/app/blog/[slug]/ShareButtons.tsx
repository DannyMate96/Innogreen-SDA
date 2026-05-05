"use client";

import { useState } from "react";
import { IoCopyOutline, IoCheckmarkOutline } from "react-icons/io5";

export default function ShareButtons() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const shareOnFacebook = () => {
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`,
      "_blank"
    );
  };

  const shareOnLinkedIn = () => {
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`,
      "_blank"
    );
  };

  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
      <span className="text-sm font-semibold text-brand-slate">Share this article:</span>
      <div className="flex gap-3">
        <button
          onClick={handleCopy}
          className="inline-flex items-center gap-2 rounded-lg border border-brand-border px-4 py-2 text-sm text-brand-gray hover:bg-brand-bg-alt transition-colors"
        >
          {copied ? (
            <>
              <IoCheckmarkOutline className="h-4 w-4 text-brand-teal" />
              Copied!
            </>
          ) : (
            <>
              <IoCopyOutline className="h-4 w-4" />
              Copy link
            </>
          )}
        </button>
        <button
          onClick={shareOnFacebook}
          className="rounded-lg bg-[#1877F2] px-4 py-2 text-sm font-medium text-white hover:bg-[#166fe5] transition-colors"
        >
          Facebook
        </button>
        <button
          onClick={shareOnLinkedIn}
          className="rounded-lg bg-[#0A66C2] px-4 py-2 text-sm font-medium text-white hover:bg-[#095ba8] transition-colors"
        >
          LinkedIn
        </button>
      </div>
    </div>
  );
}
