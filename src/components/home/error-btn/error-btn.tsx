import { Component } from 'react';

import s from './error-btn.module.css';

interface State {
  throwError: boolean;
}

class ErrorBtn extends Component<object, State> {
  constructor(props: object) {
    super(props);
    this.state = { throwError: false };
  }

  render() {
    if (this.state.throwError) {
      throw new Error('Triggered an error!');
    }

    return (
      <button className={s.container} onClick={() => this.setState({ throwError: true })}>
        Trigger Error
      </button>
    );
  }
}

export default ErrorBtn;
