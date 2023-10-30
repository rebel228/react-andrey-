import { Component } from 'react';

import Card from '@/components/home/cards/card/card';
import { Product } from '@/modules/api-types';

import s from './cards.module.css';

interface Props {
  products: Product[] | undefined;
}

export default class Cards extends Component<Props> {
  render() {
    return (
      <ul className={s.container}>
        {this.props.products &&
          this.props.products?.length > 0 &&
          this.props?.products.map((product, index) => <Card key={index} product={product} />)}
      </ul>
    );
  }
}
