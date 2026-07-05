import { useCounter } from '@/stores/counter';

function Counter() {
  const count = useCounter(state => state.count);
  const { increment, decrement, reset } = useCounter();

  return (
    <section className="flex flex-col items-start gap-4">
      <h1 className="text-3xl font-bold">Counter</h1>
      <p className="text-5xl font-mono tabular-nums">{count}</p>
      <div className="flex gap-2">
        <button onClick={decrement} className="rounded border px-4 py-1 hover:bg-gray-100">-</button>
        <button onClick={increment} className="rounded border px-4 py-1 hover:bg-gray-100">+</button>
        <button onClick={reset} className="rounded border px-4 py-1 hover:bg-gray-100 text-sm">Reset</button>
      </div>
    </section>
  );
}

export default Counter;
