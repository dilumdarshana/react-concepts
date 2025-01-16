export interface UseFetchOptionTypes {
  url: string;
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
}

export interface FetchState<T> {
  loading: boolean;
  data: T;
  error: string | null;
}
