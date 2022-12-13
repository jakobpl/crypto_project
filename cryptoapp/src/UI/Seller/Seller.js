import React from 'react';
import classes from './Seller.module.css';
import tate from '../../assets/tate.jpg';
const Seller = (props) => {
  return (
    <li className={classes.seller}>
      <div className={classes.img_container}>
        <img src={props.img} className={classes.img} />
      </div>
      <div className={classes.seller_info}>
        <strong className={classes.name}>{props.name}</strong>
        <span className={classes.price}>{props.balance} BTC</span>
      </div>
    </li>
  );
};

export default Seller;
