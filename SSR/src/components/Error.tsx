import { useEffect, useState } from 'react';

export interface ErrorProps {
  statusCode?: number;
}

const Error = ({ statusCode }: ErrorProps) => {
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) return null;

  return (
    <div>
      <h1>Route not found</h1>
      <code>Error {statusCode}</code>
    </div>
  )
};

export default Error;
