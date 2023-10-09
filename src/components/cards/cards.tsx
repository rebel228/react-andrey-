import { Product } from '../../types/api-types';
import React from 'react';
import s from './cards.module.css';
import Card from './card/card';
import Loader from '../loader/loader';

interface Props {
  products: Product[] | undefined;
  isLoading: boolean;
}

export default class Cards extends React.Component<Props> {
  constructor(props: Record<string, never>) {
    super(props);

    this.state = {
      isLoading: true,
    };
  }

  componentDidMount() {
    this.setState({ isLoading: false });
  }

  render() {
    return (
      <>
        {this.state.isLoading ? (
          <Loader />
        ) : (
          <ul className={s.container}>
            {this.props.products &&
              this.props.products?.length > 0 &&
              this.props?.products.map((product, index) => <Card key={index} product={product} />)}
          </ul>
        )}
      </>
    );
  }
}
