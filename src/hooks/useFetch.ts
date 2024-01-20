import { useState, useEffect } from 'react';

interface OptionTypes {
    url: string;
    method: string;
}

interface ApiResponse {
    loading: boolean;
    data: [];
}

const useFetch = (options: OptionTypes): ApiResponse => {
    const { url, method } = options;
    const [data, setData] = useState<ApiResponse>({ loading: false, data: [] });

    const getData = async (url: string) => {
        try {
            const res = await fetch(url, { method });
            const data = await res.json();

            setData({ loading: false, data });
        } catch (e) {
            console.log('e', e);
            setData({ loading: false, data: [] });
        }
    };

    useEffect(() => {
        getData(url);
    }, []);

    return data;
};

export default useFetch;
