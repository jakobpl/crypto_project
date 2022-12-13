import React, { Fragment } from 'react';
import classes from './Explore.module.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import PopularItemsCard from '../../UI/PopularItemsCard/PopularItemsCard';
import { popularItems } from '../../assets/ZZ__DUMMY_DATA';
const Explore = () => {
  const shuffle = (array) => {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
    return array;
  };

  // Used like so
  return (
    <Fragment>
      <Header headerIsSticky={true} />
      <main className={classes.main}>
        <aside className={classes.aside}>
          <form className={classes.form}>
            <ul className={classes['form-options__container']}>
              <h3 className={classes['form-section__title']}>
                Select Categories
              </h3>
              <li className={classes['form-item']}>
                <input type='checkbox' id='option_art' />
                <label htmlFor='option_art'>Art</label>
              </li>
              <li className={classes['form-item']}>
                <input type='checkbox' id='option_music' />
                <label htmlFor='option_music'>Music</label>
              </li>
              <li className={classes['form-item']}>
                <input type='checkbox' id='option_domainNames' />
                <label htmlFor='option_domainNames'>Domain Names</label>
              </li>
              <li className={classes['form-item']}>
                <input type='checkbox' id='option_virtualWorld' />
                <label htmlFor='option_virtualWorld'>Virtual World</label>
              </li>
              <li className={classes['form-item']}>
                <input type='checkbox' id='option_tradingCards' />
                <label htmlFor='option_tradingCards'>Trading Cards</label>
              </li>
              <li className={classes['form-item']}>
                <input type='checkbox' id='option_collectibles' />
                <label htmlFor='option_collectibles'>Collectibles</label>
              </li>
              <li className={classes['form-item']}>
                <input type='checkbox' id='option_sports' />
                <label htmlFor='option_sports'>Sports</label>
              </li>
              <li className={classes['form-item']}>
                <input type='checkbox' id='option_utility' />
                <label htmlFor='option_utility'>Utility</label>
              </li>
            </ul>
            <ul className={classes['form-options__container']}>
              <h3 className={classes['form-section__title']}>Collections</h3>
              <li className={classes['form-item']}>
                <input type='checkbox' id='option_abstraction' />
                <label htmlFor='option_abstraction'>Abstraction</label>
              </li>
              <li className={classes['form-item']}>
                <input type='checkbox' id='option_patternlicious' />
                <label htmlFor='option_patternlicious'>Patternlicious</label>
              </li>
              <li className={classes['form-item']}>
                <input type='checkbox' id='option_sketchify' />
                <label htmlFor='option_sketchify'>Sketchify</label>
              </li>
              <li className={classes['form-item']}>
                <input type='checkbox' id='option_cartoonism' />
                <label htmlFor='option_cartoonism'>Cartoonism</label>
              </li>
              <li className={classes['form-item']}>
                <input type='checkbox' id='option_virtuland' />
                <label htmlFor='option_virtuland'>Virtuland</label>
              </li>
              <li className={classes['form-item']}>
                <input type='checkbox' id='option_papercut' />
                <label htmlFor='option_papercut'>Papercut</label>
              </li>
            </ul>
            <ul className={classes['form-options__container']}>
              <h3 className={classes['form-section__title']}>Status</h3>
              <li className={classes['form-item']}>
                <input type='checkbox' id='option_buyNow' />
                <label htmlFor='option_buyNow'>Buy Now</label>
              </li>
              <li className={classes['form-item']}>
                <input type='checkbox' id='option_onAuction' />
                <label htmlFor='option_onAuction'>On Auction</label>
              </li>
              <li className={classes['form-item']}>
                <input type='checkbox' id='option_hasOffers' />
                <label htmlFor='option_hasOffers'>Has Offers</label>
              </li>
            </ul>
            <ul className={classes['form-options__container']}>
              <h3 className={classes['form-section__title']}>Items Type</h3>
              <li className={classes['form-item']}>
                <input type='checkbox' id='option_singleItems' />
                <label htmlFor='option_singleItems'>Single Items</label>
              </li>
              <li className={classes['form-item']}>
                <input type='checkbox' id='option_bundles' />
                <label htmlFor='option_bundles'>Bundles</label>
              </li>
            </ul>
          </form>
        </aside>
        <section className={classes.section}>
          {shuffle(popularItems.slice()).map((item) => (
            <PopularItemsCard
              profileImg={item.profileImg}
              nftImg={item.nftImg}
              title={item.title}
              price={item.price}
              likeCount={item.likeCount}
              key={item.id}
            />
          ))}
        </section>
      </main>
      <Footer />
    </Fragment>
  );
};

export default Explore;
