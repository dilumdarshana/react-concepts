/**
 * Make delay proccesing extensive functions
 */
import { useState, useTransition } from 'react';

const count = 20000;

const Transition = () => {
  const [input, setInput] = useState('');
  const [list, setList] = useState<string[]>([]);
  const [isPending, startTransition] = useTransition();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.currentTarget.value);

    startTransition(() => {
      const l: string[] = [];
      for (let i = 0; i < count; i++) {
        const value = e.currentTarget.value;
        l.push(value);
      }
      setList(l);
    })
  }

  return (
    <div className="app-separator">
      <input type="text" value={input} onChange={handleChange} placeholder="Type Something..." />
      {isPending ? 'Pending...' :
        list.map((l, index) => {
          return (<div key={index}>{l}</div>)
        })
      }
    </div>
  );
}

export default Transition;
