import { Product } from '../../types/api-types';
import React from 'react';
import s from './cards.module.css';
import Card from './card/card';

interface Props {
  products: Product[] | undefined;
}

const Cards: React.FC<Props> = ({ products }: Props) => {
  return (
    <ul className={s.container}>
      {products &&
        products?.length > 0 &&
        products.map((product, index) => <Card key={index} product={product} />)}
    </ul>
  );
};

export default Cards;
