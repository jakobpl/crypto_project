import React, { Fragment, useState } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import ActivityCard from '../../UI/ActivityCard/ActivityCard';
import classes from './Activity.module.css';
import { activityData } from '../../assets/ZZ__DUMMY_DATA';
const Activity = () => {
  const [filter, setFilter] = useState('unfiltered');
  const changeFilterHandler = (passedFilter) => {
    setFilter(passedFilter);
  };
  const unfilteredActivities = activityData.map((action) => (
    <ActivityCard
      key={action.id}
      name={action.name}
      profileImg={action.profileImg}
      action={action.action}
      recipient={action.recipient}
      date={action.date}
    />
  ));
  const activitiesFollowings = activityData.map(
    (action) =>
      action.action === 'follow' && (
        <ActivityCard
          key={action.id}
          name={action.name}
          profileImg={action.profileImg}
          action={action.action}
          recipient={action.recipient}
          date={action.date}
        />
      )
  );
  const activitiesLikes = activityData.map(
    (action) =>
      action.action === 'like' && (
        <ActivityCard
          key={action.id}
          name={action.name}
          profileImg={action.profileImg}
          action={action.action}
          recipient={action.recipient}
          date={action.date}
        />
      )
  );
  const activitiesSales = activityData.map(
    (action) =>
      action.action === 'sale' && (
        <ActivityCard
          key={action.id}
          name={action.name}
          profileImg={action.profileImg}
          action={action.action}
          recipient={action.recipient}
          date={action.date}
        />
      )
  );
  const activitiesOffers = activityData.map(
    (action) =>
      action.action === 'offer' && (
        <ActivityCard
          key={action.id}
          name={action.name}
          profileImg={action.profileImg}
          action={action.action}
          recipient={action.recipient}
          date={action.date}
        />
      )
  );

  const filterActivities = (filter) => {
    switch (filter) {
      case 'follow':
        return activitiesFollowings;
      case 'sales':
        return activitiesSales;
      case 'offers':
        return activitiesOffers;
      case 'likes':
        return activitiesLikes;
      default:
        return unfilteredActivities;
    }
  };

  return (
    <Fragment>
      <Header headerIsSticky={true} />
      <main className={classes.main}>
        <section className={`${classes['activity-container']} flex`}>
          <ul className={classes['recent-actions']}>
            {filterActivities(filter)}
          </ul>
        </section>
        <aside>
          <div classes={classes['filter']}>
            <div
              className={`${classes['filter-actions']} flex align-center justify-space`}
            >
              <span className={classes['filter-label']}>Filter</span>
              <button
                onClick={() => changeFilterHandler('unfiltered')}
                className={classes['btn-reset__filters']}
              >
                Reset
              </button>
            </div>
            <div className={classes['filter-option__container']}>
              <button
                onClick={() => changeFilterHandler('follow')}
                className={`${classes['filter-option']} flex align-center`}
              >
                <span
                  className={`${classes['filter-icon__container']} grid-center`}
                >
                  <ion-icon name='checkmark-outline'></ion-icon>
                </span>
                <span className={classes['filter-option__title']}>
                  Followings
                </span>
              </button>
              <button
                onClick={() => changeFilterHandler('likes')}
                className={`${classes['filter-option']} flex align-center`}
              >
                <span
                  className={`${classes['filter-icon__container']} grid-center`}
                >
                  <ion-icon name='heart'></ion-icon>
                </span>
                <span className={classes['filter-option__title']}>Likes</span>
              </button>
              <button
                onClick={() => changeFilterHandler('sales')}
                className={`${classes['filter-option']} flex align-center`}
              >
                <span
                  className={`${classes['filter-icon__container']} grid-center`}
                >
                  <ion-icon name='basket-outline'></ion-icon>
                </span>
                <span className={classes['filter-option__title']}>Sales</span>
              </button>
              <button
                onClick={() => changeFilterHandler('offers')}
                className={`${classes['filter-option']} flex align-center`}
              >
                <span
                  className={`${classes['filter-icon__container']} grid-center`}
                >
                  <ion-icon name='documents-outline'></ion-icon>
                </span>
                <span className={classes['filter-option__title']}>Offers</span>
              </button>
            </div>
          </div>
        </aside>
      </main>
      <Footer />
    </Fragment>
  );
};

export default Activity;

/* <ion-icon name="checkmark-outline"></ion-icon> follow

<ion-icon name="heart-outline"></ion-icon> like
<ion-icon name="basket-outline"></ion-icon>  sell
<ion-icon name="documents-outline"></ion-icon> offer
*/
