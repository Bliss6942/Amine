import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';

function App() {
  const [theme, setTheme] = useState(false);
  {theme === 'light' ? 'light-theme' : 'dark-theme'}
  return (
    <>
      <Header tema={theme} setTema={setTheme}/>
    </>
  );
}

export default App;