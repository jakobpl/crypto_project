import React from 'react';
import classes from './Footer.module.css';
const Footer = () => {
  return (
    <footer className={classes.footer}>
      <section className={classes['footer-resources']}>
        <div className={classes['footer-section']}>
          <p className={classes['section-title']}>Marketplace</p>
          <ul className={classes['section-ul']}>
            <li>
              <a href='#' className={classes['footer-link']}>
                All NFTs
              </a>
            </li>
            <li>
              <a href='#' className={classes['footer-link']}>
                Art
              </a>
            </li>
            <li>
              <a href='#' className={classes['footer-link']}>
                Music
              </a>
            </li>
            <li>
              <a href='#' className={classes['footer-link']}>
                Domain Names
              </a>
            </li>
            <li>
              <a href='#' className={classes['footer-link']}>
                Virtual World
              </a>
            </li>
            <li>
              <a href='#' className={classes['footer-link']}>
                Collectibles
              </a>
            </li>
          </ul>
        </div>
        <div className={classes['footer-section']}>
          <p className={classes['section-title']}>Resources</p>

          <ul className={classes['section-ul']}>
            <li>
              <a href='#' className={classes['footer-link']}>
                Help Center
              </a>
            </li>
            <li>
              <a href='#' className={classes['footer-link']}>
                Partners
              </a>
            </li>
            <li>
              <a href='#' className={classes['footer-link']}>
                Suggestions
              </a>
            </li>
            <li>
              <a href='#' className={classes['footer-link']}>
                Discord
              </a>
            </li>
            <li>
              <a href='#' className={classes['footer-link']}>
                Docs
              </a>
            </li>
            <li>
              <a href='#' className={classes['footer-link']}>
                Newsletter{' '}
              </a>
            </li>
          </ul>
        </div>
        <div className={classes['footersection']}>
          <p className={classes['section-title']}>Community</p>

          <ul className={classes['section-ul']}>
            <li>
              <a href='#' className={classes['footer-link']}>
                Community
              </a>
            </li>
            <li>
              <a href='#' className={classes['footer-link']}>
                Documentation
              </a>
            </li>
            <li>
              <a href='#' className={classes['footer-link']}>
                Brand Assets
              </a>
            </li>
            <li>
              <a href='#' className={classes['footer-link']}>
                Blog
              </a>
            </li>
            <li>
              <a href='#' className={classes['footer-link']}>
                Forum
              </a>
            </li>
            <li>
              <a href='#' className={classes['footer-link']}>
                Mailing List
              </a>
            </li>
          </ul>
        </div>
        <div className={`${classes['footer-section']} ${classes.newsletter}`}>
          <p className={classes['section-title']}>Newsletter</p>
          <p className={classes['newsletter-description']}>
            Signup for our newsletter to get the latest news in your inbox.
          </p>
          <form className={classes['email-input__container']}>
            <input
              type='email'
              className={classes['email-signup']}
              placeholder='enter your email'
            ></input>
            <button className={classes['icon-badge']}>
              <ion-icon
                className='icon_right__arrow'
                name='arrow-forward-outline'
              ></ion-icon>
            </button>
          </form>
          <p>Your email is safe with us. We don't spam.</p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
