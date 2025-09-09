import { Suspense } from 'react';
import { createFileRoute } from '@tanstack/react-router';
import UserList from '../components/UserList';

export const Route = createFileRoute('/useSuspenseQuery')({
  component: UseQuery,
});

function UseQuery() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <UserList />
    </Suspense>
  )
}

export default UseQuery;
