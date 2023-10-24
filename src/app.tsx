import { Component } from 'react';

import ErrorBoundary from '@/components/error-boundary/error-boundary';
import Home from '@/components/home/home';

import FallbackUI from './components/error-boundary/fallback-ui';

class App extends Component {
  render() {
    return (
      <>
        <ErrorBoundary fallback={<FallbackUI />}>
          <Home />
        </ErrorBoundary>
      </>
    );
  }
}

export default App;
