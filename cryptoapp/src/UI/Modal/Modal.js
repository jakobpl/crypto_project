import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import classes from './Modal.module.css';
const portalEl = document.getElementById('overlays');

const Backdrop = (props) => {
  return (
    <div className={classes.backdrop} onClick={props.onClick}>
      {props.children}
    </div>
  );
};
const ModalOverlay = (props) => {
  const { cardInfo } = props;
  return (
    <Backdrop className={classes.modal} onClick={props.onHideModal}>
      <div className={classes.content}>
        <h1 className={classes['nft-title']}>{cardInfo.title}</h1>
        <div className={classes['img-container']}>
          <img className={classes.img} src={cardInfo.nftImg} />
        </div>
        <p className={classes.price}>{`${cardInfo.price} BTC`}</p>
        <div className={classes.actions}>
          <button className={classes['btn-cancel']} onClick={props.onHideModal}>
            cancel
          </button>
          <button className={classes['btn-purchase']}>purchase</button>
        </div>
      </div>
    </Backdrop>
  );
};

const Modal = (props) => {
  return (
    <Fragment>
      {/* {ReactDOM.createPortal(
        <Backdrop onHideModal={props.onHideModal} />,
        portalEl
      )} */}
      {ReactDOM.createPortal(
        <ModalOverlay cardInfo={props.cardInfo} onHideModal={props.onHideModal}>
          {props.children}
        </ModalOverlay>,
        portalEl
      )}
    </Fragment>
  );
};

export default Modal;
