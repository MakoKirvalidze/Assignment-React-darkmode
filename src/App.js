import React from 'react';
import { useLocalStorage } from './useLocalStorage';
import { useWindowSize } from './useWindowSize';
import { ThemeToggle } from './ThemeToggle';
import './App.css';

function App() {
  const [theme, setTheme] = useLocalStorage('theme', 'light');
  const { width } = useWindowSize();

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  const isMobile = width < 768; 
  const currentTheme = isMobile ? 'light' : theme;

  return (
    <div className={`App ${currentTheme}`}>
      <h1>React Dark Mode App</h1>
      {!isMobile && <ThemeToggle theme={currentTheme} toggleTheme={toggleTheme} />}
    </div>
  );
}

export default App;