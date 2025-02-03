import useStore from '../store/useStore';
import '../App.css';

const ShowCounter = () => {
  const { count } = useStore();

  return (
    <div className="component">
      <h2>Show Counter</h2>
      <p>Counter: {count}</p>
    </div>
  )
}

export default ShowCounter;
