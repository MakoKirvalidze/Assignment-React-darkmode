import React from 'react';

export function ThemeToggle({ theme, toggleTheme }) {
  return (
    <button onClick={toggleTheme}>
      Toggle Theme (Current: {theme})
    </button>
  );
}