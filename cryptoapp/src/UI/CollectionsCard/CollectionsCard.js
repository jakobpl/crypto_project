import React from 'react';
import classes from './CollectionsCard.module.css';

const CollectionsCard = (props) => {
  return (
    <div className={classes.card}>
      <div className={classes.img_container}>
        <img src={props.imgUrl} alt='nft' className={classes.card_img} />
      </div>
      <div className={classes.nft_info}>
        <p className={classes.artwork_name}>{props.title}</p>
        <em className={classes.author}>{props.author}</em>
      </div>
    </div>
  );
};

export default CollectionsCard;
