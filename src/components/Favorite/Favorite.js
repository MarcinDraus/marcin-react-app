
import React from 'react';
import { useSelector } from 'react-redux';
import { getFavoriteLists } from '../../redux/store';
import Card from '../Card/Card';
import styles from './Favorite.module.scss';
import PageTitle from "../PageTitle/PageTitle";

const Favorite = () => {
  const favoriteLists = useSelector(getFavoriteLists);

  return (
    <>
    <div className={styles.article}>
    <PageTitle>FAVORITE</PageTitle>
    <div className={styles.column}>   
      <ul className={styles.cards}>
        {favoriteLists.map(list => 
          <Card key={list.id} title={list.title} isFavorite={list.isFavorite} id={list.id} />
          
        )}
        
      </ul>
    </div>
    </div>
    </>
  );
};

export default Favorite;

