import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import classes from './Home.module.css';
import Footer from '../../components/Footer/Footer';
import CollectionsCard from '../../UI/CollectionsCard/CollectionsCard';
import PopularItemsCard from '../../UI/PopularItemsCard/PopularItemsCard';
import Seller from '../../UI/Seller/Seller';
import ActionCards from '../../UI/ActionCards/ActionCards';
import { NavLink } from 'react-router-dom';
import { topTenSellers } from '../../assets/ZZ__DUMMY_DATA';
import { popularItems } from '../../assets/ZZ__DUMMY_DATA';
import img1 from '../../assets/dummy_nft.jpg';
import img2 from '../../assets/nft_display2.jpg';
import img3 from '../../assets/nft_display3.jpg';
const walletIcon = <ion-icon name='wallet-outline'></ion-icon>;
const uploadIcon = <ion-icon name='cloud-upload-outline'></ion-icon>;
const sellIcon = <ion-icon name='pricetags-outline'></ion-icon>;
const Home = () => {
  const [headerSticky, setHeaderSticky] = useState(false);

  window.addEventListener('scroll', () => {
    window.scrollY === 0 ? setHeaderSticky(false) : setHeaderSticky(true);
  });
  // probably not a best practice, double check on this ^

  return (
    <main className={classes.hero}>
      <Header headerIsSticky={headerSticky} />

      <div className={classes['hero-content']}>
        <h1 className={classes['hero-h1']}>
          Create, sell or collect digital items.
        </h1>
        <p className={classes['hero-message']}>
          Easiest place to buy and sell cryptocurrency. <br />
          Sign up and get started today.
        </p>
        <div className={`${classes.actions} flex align-center`}>
          <button className={`${classes.btn} ${classes['btn-explore']}`}>
            <NavLink className={classes['btn--explore']} to='/explore'>
              <span>Explore</span>
            </NavLink>
            {/* come back aand fix this later-- having the navlink in btn is a temp fix 
            css styling is at the very bottom of Home.module.css*/}
          </button>
          <button className={`${classes.btn} ${classes['btn-create']}`}>
            Create
          </button>
        </div>
      </div>

      <section className={`${classes.collections} flex align-center`}>
        <h2 className={classes['section-title']}>Hot Collections</h2>
        <div className={`${classes.carousel} flex align-center`}>
          <CollectionsCard
            imgUrl={img1}
            author='Robert Greene'
            title='galaxy'
          />
          <CollectionsCard
            imgUrl={img2}
            author='Patrick Bet-David'
            title='colorful smoke'
          />
          <CollectionsCard
            imgUrl={img3}
            author='Charles Schwab'
            title='cartoon village'
          />
        </div>
      </section>
      <section
        className={`${classes['popular-items']} flex align-center justify-center`}
      >
        <h2 className={classes['section-title']}>Popular Items</h2>
        <ul className={`${classes['card-container']} grid-3`}>
          {popularItems.slice(0, 6).map((item) => (
            <PopularItemsCard
              profileImg={item.profileImg}
              nftImg={item.nftImg}
              title={item.title}
              price={item.price}
              likeCount={item.likeCount}
              key={item.id}
            />
          ))}
        </ul>
      </section>
      <section className={classes['top-sellers']}>
        <h2 className={classes['section-title']}>Top Sellers</h2>
        <ul className={`${classes['seller-container']} flex align-center`}>
          {topTenSellers.map((seller) => (
            <Seller
              name={seller.name}
              balance={seller.balance}
              img={seller.img}
              key={seller.id}
            />
          ))}
        </ul>
      </section>
      <section className={`${classes.create} flex align-center`}>
        <h2 className={classes['section-title']}>Create and sell your NFTs</h2>
        <div className={`${classes['card-container']} grid-3`}>
          <ActionCards cardIcon={walletIcon} cardDetail='Set up your wallet' />
          <ActionCards cardIcon={uploadIcon} cardDetail='Add your NFTs' />
          <ActionCards cardIcon={sellIcon} cardDetail='Sell your NFTs' />
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Home;

/* 
[] - popular ites
[] - top sellers
[] - Create and sell  your nfts
*/

// <ion-icon name="wallet-outline"></ion-icon>
//<ion-icon name="cloud-upload-outline"></ion-icon>
//<ion-icon name="pricetags-outline"></ion-icon>
