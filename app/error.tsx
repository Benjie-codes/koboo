"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Application error:", error);
  }, [error]);

  return (
    <div className="koboo-shell min-h-screen">
      <div className="space-y-6 py-10">
        <h1 className="font-display text-2xl text-[color:var(--koboo-ink)]">
          Something went wrong
        </h1>
        <p className="text-sm text-[color:var(--koboo-muted)]">
          The app hit an error. Details below (check the browser console for more).
        </p>
        <pre className="max-w-full overflow-auto rounded-lg border border-black/10 bg-[color:var(--koboo-surface)] p-4 text-xs text-[color:var(--koboo-ink)]">
          {error.message}
        </pre>
        {error.digest && (
          <p className="text-xs text-[color:var(--koboo-muted)]">Digest: {error.digest}</p>
        )}
        <button
          type="button"
          onClick={reset}
          className="koboo-button-primary"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
