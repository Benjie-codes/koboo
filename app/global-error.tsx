"use client";

import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Global application error:", error);
  }, [error]);

  return (
    <html lang="en">
      <body style={{ fontFamily: "system-ui, sans-serif", padding: "2rem", maxWidth: "40rem", margin: "0 auto", color: "#1a1a1a", background: "#fafaf8" }}>
        <h1 style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>Something went wrong</h1>
        <p style={{ fontSize: "0.875rem", color: "#666", marginBottom: "1rem" }}>
          The app hit an error. Check the browser console for details.
        </p>
        <pre style={{ overflow: "auto", padding: "1rem", background: "#f0f0ee", borderRadius: "0.5rem", fontSize: "0.75rem", marginBottom: "1rem" }}>
          {error.message}
        </pre>
        {error.digest && (
          <p style={{ fontSize: "0.75rem", color: "#666", marginBottom: "1rem" }}>Digest: {error.digest}</p>
        )}
        <button
          type="button"
          onClick={reset}
          style={{ padding: "0.5rem 1rem", background: "#1a1a1a", color: "#fafaf8", border: "none", borderRadius: "9999px", fontSize: "0.875rem", cursor: "pointer", textTransform: "uppercase", letterSpacing: "0.1em" }}
        >
          Try again
        </button>
      </body>
    </html>
  );
}
