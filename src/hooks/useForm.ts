import React, { useState } from 'react';

const useForm = <T>(initialValues: T) => {
    const [values, setValues] = useState(initialValues);

    return [
        values,
        (e: React.ChangeEvent<HTMLInputElement>) => {
            setValues({
                ...values,
                [e.currentTarget.name]: e.currentTarget.value
            });
        }
    ];
};

export default useForm;
