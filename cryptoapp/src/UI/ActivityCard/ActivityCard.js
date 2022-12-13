import React from 'react';
import classes from './ActivityCard.module.css';
const ActivityCard = (props) => {
  const createActionPhrase = (action) => {
    switch (action) {
      case 'follow':
        return 'started following ';
      case 'sale':
        return 'sold an NFT to ';
      case 'offer':
        return 'made an offer to ';
      case 'like':
        return 'liked an NFT by ';
      default:
        break;
    }
  };

  const createActionIcon = (action) => {
    switch (action) {
      case 'follow':
        return <ion-icon name='checkmark-outline'></ion-icon>;
      case 'sale':
        return <ion-icon name='basket-outline'></ion-icon>;
      case 'offer':
        return <ion-icon name='documents-outline'></ion-icon>;
      case 'like':
        return <ion-icon name='heart-outline'></ion-icon>;
      default:
        break;
    }
  };

  const randomDate = (start, end) =>
    new Date(
      start.getTime() + Math.random() * (end.getTime() - start.getTime())
    );
  return (
    <div className={classes.card}>
      <div className={classes.activity}>
        <div className={classes['img-container']}>
          <img
            src={props.profileImg}
            alt='profile picture'
            className={classes.img}
          />
        </div>
        <div className={classes['activity-details']}>
          <strong className={classes.name}>{props.name}</strong>
          <p className={classes.action}>
            {createActionPhrase(props.action)}
            <span className={classes['name-secondary']}>{props.recipient}</span>
          </p>
          <time className={classes.date}>{props.date}</time>
          {/* will go back and implement teh datetime attribute later, just styling for now */}
        </div>
      </div>
      <span className={classes.icon}>{createActionIcon(props.action)}</span>
    </div>
  );
};

export default ActivityCard;

/* <ion-icon name="checkmark-outline"></ion-icon> follow

<ion-icon name="heart-outline"></ion-icon> like
<ion-icon name="basket-outline"></ion-icon>  sell
<ion-icon name="documents-outline"></ion-icon> offer
*/
