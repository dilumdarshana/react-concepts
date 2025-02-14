import { useState } from 'react';
import { Button } from '@/components/ui/button';

interface SamplePropTyes {
  name?: string;
}

function Sample({ name }: SamplePropTyes) {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2 className="text-2xl font-bold">Sample Page</h2>
      <p className="py-5 whitespace-nowrap">Hello {name}!!!</p>
      <p className="py-5 whitespace-nowrap" data-testid="counter-value">Count: {count}</p>
      <Button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
        onClick={() => setCount(count + 1)}
      >Increment</Button>
    </div>
  )
}

export default Sample;
