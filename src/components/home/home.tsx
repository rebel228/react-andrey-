import { Component } from 'react';

import Cards from '@/components/home/cards/cards';
import ErrorBtn from '@/components/home/error-btn/error-btn';
import Loader from '@/components/home/loader/loader';
import Search from '@/components/home/search/search';
import { getProducts } from '@/modules/getProducts';
import { getLsString, setLsString } from '@/modules/helpers/localStorage';
import { Products } from '@/types/api-types';

import s from './home.module.css';

interface State {
  products: Products;
  inputValue: string;
  isLoading: boolean;
}

class Home extends Component<never, State> {
  constructor(props: never) {
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
        <ErrorBtn />
        <Search
          inputValue={this.state.inputValue}
          onChangeHandler={this.onChangeHandler}
          onSearchClick={this.onSearchClick}
        />
        {this.state.isLoading ? <Loader /> : <Cards products={this.state.products} />}
      </main>
    );
  }
}

export default Home;
