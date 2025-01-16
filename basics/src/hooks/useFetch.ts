import { useEffect, useState } from 'react';
import { UseFetchOptionTypes, FetchState } from '../@types/useFetch';

const useFetch = <T>(options: UseFetchOptionTypes) => {
  const { url, method = 'GET' } = options;
  const [data, setData] = useState<FetchState<T>>({
    loading: true,
    data: [] as T,
    error: null,
  });

  useEffect(() => {
    const abortController = new AbortController();

    const fetchData = async () => {
      try {
        const response = await fetch(url, {
          method,
          signal: abortController.signal,
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error: ${response.status}`);
        }

        const result = await response.json();
        setData({ loading: false, data: result, error: null });
      } catch (error) {
        if (error instanceof Error) {
          if (error.name === 'AbortError') {
            console.log(error.message);
          } else {
            console.error('Error fetching data:', error);
            setData({ loading: false, data: [] as T, error: error.message });
          }
        } else {
          console.error('Error:', error);
          setData({ loading: false, data: [] as T, error: 'An unknown error occured' });
        }
      }
    };

    if (url) fetchData();

    // clean up
    return () => {
      abortController.abort();
    }
  },[url, method]);

  return { data: data.data, loading: data.loading, error: null, retry: () => {}};
};

// const useFetch_ld = <T>(options: UseFetchOptionTypes) => {
//   const { url, method = 'GET' } = options;
//   const [data, setData] = useState<FetchState<T>>({
//     loading: true,
//     data: [] as T,
//     error: null,
//   });
//   const abortControllerRef = useRef<AbortController>(null);

//   const fetchData = useCallback(async () => {
//     if (abortControllerRef.current) {
//       abortControllerRef.current.abort();
//     }

//     abortControllerRef.current = new AbortController();
//     const signal = abortControllerRef.current?.signal;

//     try {
//       if (signal.aborted) return;

//       const res = await fetch(url, {
//         method,
//         signal,
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       });

//       // Check if request was aborted during fetch
//       if (signal.aborted) {
//         return;
//       }

//       if (!res.ok) {
//         throw new Error(`HTTP error! status: ${res.status}`)
//       };

//       const data = await res.json();

//       setData({
//         loading: false,
//         data,
//         error: null,
//       });
//     } catch (err: unknown) {
//       console.error('Error fetching data:', err);
//       setData({
//         loading: false,
//         data: [] as T,
//         error: err.message,
//       });
//     }
//   }, [url, method]);

//   useEffect(() => {
//     fetchData();

//     return () => {
//       if (abortControllerRef.current) {
//         abortControllerRef.current.abort();
//       }
//     };
//   }, [fetchData]);

//   // retry
//   const retry = useCallback(() => {
//     fetchData();
//   }, [fetchData]);

//   return { ...data, retry };
// };

export default useFetch;
