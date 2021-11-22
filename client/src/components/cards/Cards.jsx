import React from 'react';
import Card from '../card/Card.jsx';
import styles from './Cards.module.css';

export default function Cards({ cities, onClose }) {

  if (cities.length !== 0) {
    return (
      <div className={styles.cardsContainer}>
        {
          cities.map(c => {
            let key = c.id + Math.random()
            return <Card
              max={c.max}
              min={c.min}
              name={c.name}
              img={c.img}
              onClose={() => onClose(c.id)}
              id={c.id}
              key={key}
            />
          }

          )
        }
      </div>
    );
  } else {
    return (
      <div className={styles.searchContainer}>
        <h3 className={styles.search}>Buscá la ubicación que desees desde la barra de busqueda</h3>
      </div>
    );
  }
};