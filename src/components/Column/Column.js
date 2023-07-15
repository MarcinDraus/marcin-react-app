

import styles from './Column.module.scss';
import Card from './../Card/Card';
import CardForm from './../CardForm/CardForm';
import { useSelector } from 'react-redux';
import { getFilteredCards } from '../../redux/store';

const Column = (props) => {
  console.log(props, 'props');
  // eslint-disable-next-line no-unused-vars
  //const searchString = useSelector((state) => state.searchString);


 

    const cards = useSelector(state => getFilteredCards(state, props.id));

  //console.log('Column render');
  /*Przekażemy jej cały stan (a więc zarówno cards, jak i searchString) oraz id kolumny, a więc to, na co a funkcja właśnie oczekiwała, a w rezultacie zwróci nam ona tylko te karty, które nas interesują*/

  // const cards = useSelector((state) =>
  //   state.cards.filter((card) => card.columnId === props.id && card.title.toLowerCase().includes(searchString.toLowerCase()))
  // );

  return (
    <article className={styles.column}>
      <h2 className={styles.title}>
        <span className={styles.icon + ' fa fa-' + props.icon} />
        {props.title}
      </h2>
      <ul className={styles.cards}>
      

        
        {cards.map(card => {
          console.log(card, 'card');
          return <Card key={card.id} title={card.title} />;
        })}
      </ul>
      <CardForm columnId={props.id} />
    </article>
  );
};

export default Column;

