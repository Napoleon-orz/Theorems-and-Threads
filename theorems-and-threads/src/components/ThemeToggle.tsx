"use client";

import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [dark, setDark] = useState<boolean | null>(null);

  // After the page loads, check which theme is currently active
  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  function toggle() {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {}
  }

  return (
    <button
      onClick={toggle}
      aria-label="Switch between light and dark mode"
      className="h-9 w-9 rounded-full text-lg text-muted transition-colors hover:text-ink"
    >
      {dark === null ? "" : dark ? "☀" : "☾"}
    </button>
  );
}
