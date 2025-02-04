import { Suspense } from 'react';
import UserList from '../components/UserList';

function UseQuery() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <UserList />
    </Suspense>
  )
}

export default UseQuery;
