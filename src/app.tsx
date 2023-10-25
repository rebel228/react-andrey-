import { Component } from 'react';

import ErrorBoundary from '@/components/error-boundary/error-boundary';
import Home from '@/components/home/home';

class App extends Component {
  render() {
    return (
      <ErrorBoundary>
        <Home />
      </ErrorBoundary>
    );
  }
}

export default App;
