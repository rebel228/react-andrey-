import s from './search.module.css';
import React from 'react';
import { Product } from '../../types/api-types';

interface Props {
  inputValue: string;
  searchState: string;
  onSearchClick: () => void;
  onChangeHandler: (e: { target: { value: string } }) => void;
}

interface State {
  product: Product | undefined;
}

export default class Search extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      product: undefined,
    };
  }

  render() {
    return (
      <div className={s.container}>
        <input
          type="text"
          className={s.searchInput}
          placeholder={'Search for product name'}
          onChange={this.props.onChangeHandler}
          value={this.props.inputValue}
        />
        <button className={s.searchBtn} onClick={this.props.onSearchClick}>
          search
        </button>
      </div>
    );
  }
}
