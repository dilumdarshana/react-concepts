import { useEffect } from 'react';
import useStore from './store/useStore';
import ShowCounter from './components/ShowCounter';
import ShowTheme from './components/ShowTheme';
import SetCounter from './components/SetCounter';
import TodoList from './components/TodoList';
import './App.css';

function App() {
  const theme = useStore((s) => s.theme);

  // Sync theme to <html> data attribute so CSS variables respond
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <>
      <h1>Zustand Concepts</h1>
      <div className="grid">
        <ShowCounter />
        <ShowTheme />
        <SetCounter />
        <TodoList />
      </div>
    </>
  )
}

export default App
