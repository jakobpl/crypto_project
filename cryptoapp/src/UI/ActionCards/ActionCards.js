import React from 'react';
import classes from './ActionCards.module.css';
const ActionCards = (props) => {
  return (
    <div className={classes.card}>
      <span className={classes.icon_badge}> {props.cardIcon}</span>
      <p className={classes.card_detail}>{props.cardDetail}</p>
      <p className={classes.card_text}>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem.
      </p>
    </div>
  );
};

export default ActionCards;
