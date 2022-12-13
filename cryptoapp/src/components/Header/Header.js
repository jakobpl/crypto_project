import React, { useState } from 'react';
import classes from './Header.module.css';
import { NavLink } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import NFT from '../../assets/NFT_logo.png';

//link, search bar ============================== home, explore, activity Connect Wallet
const Header = (props) => {
  const [menuDisplayed, setMenuIsDisplayed] = useState(false);
  const displayMobileMenu = () => {
    setMenuIsDisplayed(!menuDisplayed);
  };
  const { headerIsSticky } = props;
  const menuBtnClass = menuDisplayed
    ? `${classes['nav-ul']} ${classes['menu-active']}`
    : `${classes['nav-ul']}`;

  const headerClasses = !headerIsSticky
    ? `${classes.header}`
    : `${classes.header} ${classes['header-sticky']}`;
  return (
    <header className={headerClasses}>
      <div className='container flex align-center justify-space'>
        <NavLink to='/' exact className={classes['header-main-link']}>
          <span>NFT Marketplace</span>
          <img src={NFT} alt='NFT logo' className={classes['header-logo']} />
        </NavLink>

        <nav className={classes.nav}>
          <ul className={menuBtnClass}>
            {/* all these a tags will be changed to NavLinks later w react router */}
            <li>
              <NavLink to='/' className={classes['nav-link']}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to='/explore' className={classes['nav-link']}>
                Explore
              </NavLink>
            </li>
            <li>
              <NavLink to='/activity' className={classes['nav-link']}>
                Activity
              </NavLink>
            </li>
            <li>
              <button className={classes.btn}>Connect Wallet</button>
            </li>
          </ul>
          <div className={classes['menu-btn']} onClick={displayMobileMenu}>
            <ion-icon name='menu-outline'></ion-icon>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
