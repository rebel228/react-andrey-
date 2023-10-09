import React from 'react';
import s from './loader.module.css';

interface Props {}

interface State {}

export default class Loader extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      product: undefined,
    };
  }

  render() {
    return (
      <div className={s.container}>
        <div className={s.spinnerContainer}>
          <div className={s.loadingSpinner}>123</div>
        </div>
      </div>
    );
  }
}
