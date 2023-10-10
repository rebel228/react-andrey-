import s from './search.module.css';
import React from 'react';

interface Props {
  inputValue: string;
  onSearchClick: () => void;
  onChangeHandler: (e: { target: { value: string } }) => void;
}

export default class Search extends React.Component<Props> {
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
