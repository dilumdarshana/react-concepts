// Demonstrates that a granular selector isolates re-renders.
// This component only subscribes to `theme` — toggling the count
// will NOT cause it to re-render.
import useStore from '../store/useStore';
import '../App.css';

const ShowTheme = () => {
  const theme = useStore((s) => s.theme);

  return (
    <div className="component">
      <h2>Show Theme (theme only)</h2>
      <p>Theme: {theme}</p>
      <p className="hint">Only re-renders when theme changes</p>
    </div>
  )
}

export default ShowTheme;
