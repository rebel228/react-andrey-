import s from './card.module.css';
import React from 'react';
import { Product } from '../../../types/api-types';

interface Props {
  product: Product;
}

const Card: React.FC<Props> = ({ product }: Props) => {
  return (
    <li className={s.container}>
      <div className={s.cardImgBlock}>
        <img className={s.cardImg} src={product.images[0]} alt="" />
      </div>
      <div className={s.details}>
        <div className={s.title}>{product.title}</div>
        <div className={s.bigger}>${product.price}</div>
        <div>Discount - {product.discountPercentage.toFixed()}%</div>
        <div>Brand: {product.brand}</div>
        <div>Category: {product.category}</div>
        <div>Rating: {product.rating}</div>
        <div className={s.id}>id: {product.id}</div>
      </div>
    </li>
  );
};

export default Card;
