import s from './home.module.css';
import React from 'react';
import { getProducts } from '../../modules/getProducts';
import { Products } from '../../types/api-types';
import { setLsString, getLsString } from '../../modules/helpers/localStorage';
import Cards from '../cards/cards';
import Search from '../search/search';

interface State {
  products: Products;
  inputValue: string;
}

class Home extends React.Component<Record<never, never>, State> {
  constructor(props: Record<string, never>) {
    super(props);

    this.state = {
      products: undefined,
      inputValue: getLsString('cardsFilterInput17'),
    };
  }

  componentDidMount() {
    getProducts(this.state.inputValue).then((apiData) => {
      this.setState({ products: apiData.products });
    });
  }

  componentWillUnmount() {
    setLsString('cardsFilterInput17', this.state.inputValue);
  }

  onChangeHandler = (e: { target: { value: string } }) => {
    const inputValue = e.target.value.trim();
    this.setState({ inputValue });
  };

  onSearchClick = () => {
    setLsString('cardsFilterInput17', this.state.inputValue);

    getProducts(this.state.inputValue).then((apiData) => {
      this.setState({ products: apiData.products });
    });
  };

  render() {
    return (
      <main className={s.container}>
        <Search searchState={this.state.inputValue} onSearchClick={onSearchClick} />
        <div className={s.searchContainer}>
          <input
            type="text"
            className={s.searchInput}
            placeholder={'Search for product name'}
            onChange={this.onChangeHandler}
            value={this.state.inputValue}
          />
          <button className={s.searchBtn} onClick={this.onSearchClick}>
            search
          </button>
        </div>
        <Cards products={this.state.products} />
      </main>
    );
  }
}

export default Home;
