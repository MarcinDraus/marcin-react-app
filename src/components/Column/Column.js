import styles from './Column.module.scss';
import Card from './../Card/Card';
import CardForm from './../CardForm/CardForm';
import { useSelector } from 'react-redux';

const Column = props => {
  console.log(props, 'props');
  
  // eslint-disable-next-line no-unused-vars
  const cards = useSelector(state => state.cards.filter(card => card.columnId === props.id));
  
  return (
    <article className={styles.column}>
      <h2 className={styles.title}>
        <span className={styles.icon + ' fa fa-' + props.icon} />
        {props.title}
      </h2>
      <ul className={styles.cards}>
        {/* {cards.map
           (card => 
          <Card key={card.id} title={card.title} />
           )
        } */}
        {cards.map(card => {
          console.log(card, 'card');
          return <Card key={card.id} title={card.title} />
        })}

      </ul>
      <CardForm columnId={props.id} addCard={props.addCard} />
    </article>
  );
};

export default Column;
