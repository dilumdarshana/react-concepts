import { useEffect, useState } from 'react';
import { UseFetchOptionTypes, FetchState } from '../@types/useFetch.td';

const useFetch = <T>(options: UseFetchOptionTypes) => {
  const { url, method } = options;
  const [data, setData] = useState<FetchState<T>>({ loading: true, data: [] as T });

  const fetchData = async () => {
    try {
      const res = await fetch(url, { method });
      const data = await res.json();

      setData({ loading: false, data });
    } catch (err) {
      console.error('Error fetching data:', err);
      setData({ loading: false, data: [] as T });
    }
  };

  useEffect(() => {
    fetchData();
  }, [url, method]);

  return data;
};

export default useFetch;
