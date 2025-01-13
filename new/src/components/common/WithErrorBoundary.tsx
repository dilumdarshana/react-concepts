import { JSX } from 'react';
import MyErrorBoundary from '../ErrorBoundary';
import ErrorFallback from './ErrorFallback';

// Record<never, never> represent the empty props
const WithErrorBoundary = <P extends object = Record<never, never>>(Component: React.ComponentType<P>) =>
  (props: P): JSX.Element => (
    <MyErrorBoundary fallback={<ErrorFallback />}>
      <Component {...props} />
    </MyErrorBoundary>
  );

export default WithErrorBoundary;
