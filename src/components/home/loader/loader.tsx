import { Component } from 'react';

import s from './loader.module.css';

class Loader extends Component {
  render() {
    return (
      <div className={s.container}>
        <div className={s.spinnerContainer}>
          <div className={s.loadingSpinner} />
        </div>
      </div>
    );
  }
}

export default Loader;
