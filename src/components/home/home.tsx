import s from './home.module.css';
import React from 'react';
import { getProducts } from '../../modules/getProducts';
import { Products } from '../../types/api-types';
import { setLsString, getLsString } from '../../modules/helpers/localStorage';
import Cards from '../cards/cards';
import Search from '../search/search';
import Loader from '../loader/loader';

interface State {
  products: Products;
  inputValue: string;
  isLoading: boolean;
}

class Home extends React.Component<Record<never, never>, State> {
  constructor(props: Record<string, never>) {
    super(props);

    this.state = {
      products: undefined,
      inputValue: getLsString('cardsFilterInput17'),
      isLoading: true,
    };
  }

  updateProducts = () => {
    getProducts(this.state.inputValue).then((apiData) => {
      this.setState({ products: apiData.products, isLoading: false });
    });
  };

  componentDidMount() {
    this.updateProducts();
  }

  componentWillUnmount() {
    setLsString('cardsFilterInput17', this.state.inputValue);
  }

  onChangeHandler = (e: { target: { value: string } }) => {
    const inputValue = e.target.value.trim();
    this.setState({ inputValue });
  };

  onSearchClick = () => {
    this.setState({ isLoading: true });
    setLsString('cardsFilterInput17', this.state.inputValue);
    this.updateProducts();
  };

  render() {
    return (
      <main className={s.container}>
        <Search
          onSearchClick={this.onSearchClick}
          onChangeHandler={this.onChangeHandler}
          inputValue={this.state.inputValue}
        />
        {this.state.isLoading ? <Loader /> : <Cards products={this.state.products} />}
      </main>
    );
  }
}

export default Home;
