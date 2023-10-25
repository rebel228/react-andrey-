import { Component, ErrorInfo, ReactNode } from 'react';

import FallbackUI from '@/components/error-boundary/fallback-ui';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  errorInfo: ErrorInfo | null;
  error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = { hasError: false, errorInfo: null, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    console.error(error);

    return { error: null, errorInfo: null, hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error(error, errorInfo);

    this.setState({
      error: error,
      errorInfo: errorInfo,
      hasError: true,
    });
  }

  render() {
    if (this.state.hasError) {
      {
        console.log(this.state.hasError);
      }
      return <FallbackUI />;
    }
    {
      console.log(this.state.hasError);
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
