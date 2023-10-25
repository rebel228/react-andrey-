import { Component } from 'react';

import s from './error-btn.module.css';

interface State {
  throwError: boolean;
}

class RepairBtn extends Component<object, State> {
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
        Click here to repair the apps
      </button>
    );
  }
}

export default RepairBtn;
