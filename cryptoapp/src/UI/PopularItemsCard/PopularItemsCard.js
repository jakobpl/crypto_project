import React, { useState } from 'react';
import classes from './PopularItemsCard.module.css';
import Modal from '../Modal/Modal';
const PopularItemsCard = (props) => {
  const [modalIsShown, setModalIsShown] = useState(false);
  const showModalHandler = () => {
    setModalIsShown(true);
  };
  const hideModalhandler = () => {
    setModalIsShown(false);
  };

  return (
    <li className={classes.card}>
      {modalIsShown && (
        <Modal cardInfo={props} onHideModal={hideModalhandler} />
      )}
      <div>
        <div className={classes.card_header}>
          <img
            src={props.profileImg}
            alt='uncle tate'
            className={classes.profile_img}
          />
        </div>
        <div className={classes.img_container}>
          <img src={props.nftImg} />
        </div>
      </div>

      <div className={classes.nft_info}>
        <p className={classes.title}>{props.title}</p>
        <p className={classes.price}>{props.price} BTC</p>
        <div className={classes.actions}>
          <button className={classes.btn_buy_now} onClick={showModalHandler}>
            Buy Now
          </button>
          <div className={classes.fav_container}>
            <span className={classes.favorite_icon}>
              <ion-icon name='heart'></ion-icon>
            </span>
            <span className={classes.fav_count}>{props.likeCount}</span>
          </div>
        </div>
      </div>
    </li>
  );
};

export default PopularItemsCard;

//card > img > title, price, (buy now + like <3)
