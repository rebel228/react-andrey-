import { Component } from 'react';

import { Product } from '@/types/api-types';

import s from './card.module.css';

interface Props {
  product: Product;
}

export default class Cards extends Component<Props> {
  render() {
    return (
      <li className={s.container}>
        <div className={s.cardImgBlock}>
          <img alt="" className={s.cardImg} src={this.props.product.images[0]} />
        </div>
        <div className={s.details}>
          <div className={s.title}>{this.props.product.title}</div>
          <div className={s.bigger}>${this.props.product.price}</div>
          <div>Discount - {this.props.product.discountPercentage.toFixed()}%</div>
          <div>Brand: {this.props.product.brand}</div>
          <div>Category: {this.props.product.category}</div>
          <div>Rating: {this.props.product.rating}</div>
          <div className={s.id}>id: {this.props.product.id}</div>
        </div>
      </li>
    );
  }
}
