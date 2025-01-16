import { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback: ReactNode;
}

interface State {
  error: Error | null;
  hasError: boolean;
}

class MyErrorBoundary extends Component<Props, State> {
  state = {
    error: null,
    hasError: false,
  };

  static getDerivedStateFromError(error: Error) {
    // Update state so next render shows fallback UI.
    return { error, hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    // Log the error to an error reporting service
    // logErrorToMyService(error, info);
    console.log('Error', error);
    console.log('Info', info);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return this.props.fallback;
    }
    return this.props.children;
  }
}

export default MyErrorBoundary;
