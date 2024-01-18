import { createContext, useState, FC } from 'react';
import { ChildProps } from '../@types/common.td';
import { CounterContextType } from '../@types/counterContext.td';

const CounterContext = createContext<CounterContextType | null>(null);

export const CounterProvider: FC<ChildProps> = ({ children }) => {
    const [counter, setCounter] = useState<number>(0);

    const values = {
        counter,
        setCounter: (counter: number) => setCounter(counter)
    }

    return <CounterContext.Provider value={values}>{children}</CounterContext.Provider>
}

export default CounterContext;
