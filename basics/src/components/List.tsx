import { useDeferredValue, useEffect, useMemo } from 'react';

const List = ({ input }: { input: string }) => {
  const deferredValue = useDeferredValue(input);
  const SIZE = 20000;
  
  const list = useMemo(() => {
    const list = [];
    for (let i = 0; i < SIZE; i++) {
      list.push(<div key={i}>{deferredValue}</div>);
    }
  
    return list;
  }, [deferredValue]);

  useEffect(() => {
    console.log('xxx', input, deferredValue);
  }, [input, deferredValue]); // only re-run effect if input or deferredValue changes

  return list;
};

export default List;
