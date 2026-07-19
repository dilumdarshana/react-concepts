// Demonstrates granular selector — only subscribes to `count`.
// This component will NOT re-render when `theme` or `todos` change.
import useStore from '../store/useStore';
import '../App.css';

const ShowCounter = () => {
  // Selector picks exactly one value — minimal re-renders
  const count = useStore((s) => s.count);

  return (
    <div className="component">
      <h2>Show Counter (count only)</h2>
      <p>Counter: {count}</p>
    </div>
  )
}

export default ShowCounter;
