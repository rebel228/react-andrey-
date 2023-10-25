import { Component } from 'react';

import s from './error-btn.module.css';

class ErrorBtn extends Component {
  constructor(props: never) {
    super(props);
    this.handleError = this.handleError.bind(this);
  }

  handleError() {
    throw new Error('An error has occurred!');
  }

  render() {
    return (
      <button className={s.container} onClick={this.handleError}>
        ⚠️ Throw Error ⚠️
      </button>
    );
  }
}

export default ErrorBtn;
