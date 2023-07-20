
import styles from './Card.module.scss';
import  clsx  from  'clsx';
import { toggleFavorite } from '../../redux/cardsRedux';
import { useDispatch } from 'react-redux';
import { removeCard } from '../../redux/cardsRedux';

const Card = ({ title, id, isFavorite }) => {
    const dispatch = useDispatch();
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(toggleFavorite, 'toggleFavorite');
      dispatch(toggleFavorite(id));
    };
    const handleRemover = (e) => {
        e.preventDefault();
        dispatch(removeCard(id));
    }
    return (
      <li className={styles.card}>
        {title}
        <button onClick={handleSubmit} className={clsx(styles.button, isFavorite && styles.isActive)}>
          <i className="fa fa-star-o" />
        </button>
        <button onClick={handleRemover} className={styles.button}><i className={'fa fa-trash'} /></button>
      </li>
    );
  };
  
  export default Card;
  