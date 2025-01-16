import { useState } from 'react';

export default function useForm<T>(initialValues: T): [
    T,
    (e: React.ChangeEvent<HTMLInputElement>) => void
] {
    const [values, setValues] = useState(initialValues);

    return [
        values,
        (e: React.ChangeEvent<HTMLInputElement>) => {
            setValues({
                ...values,
                [e.target.name]: e.target.value
            });
        }
    ];
};
