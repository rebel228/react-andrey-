import React from 'react';

import { Product } from '../../types/api-types';
import Card from './card/card';
import s from './cards.module.css';

interface Props {
  products: Product[] | undefined;
}

export default class Cards extends React.Component<Props> {
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
