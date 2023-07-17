
import styles from './Card.module.scss';
import  clsx  from  'clsx';
import { toggleFavorite } from '../../redux/store';
import { useDispatch } from 'react-redux';

const Card = ({ title, id, isFavorite }) => {
    const dispatch = useDispatch();
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(toggleFavorite, 'toggleFavorite');
      dispatch(toggleFavorite(id));
     
    };
  
    return (
      <li className={styles.card}>
        {title}
        <button onClick={handleSubmit} className={clsx(styles.button, isFavorite && styles.isActive)}>
          <i className="fa fa-star-o" />
        </button>
      </li>
    );
  };
  
  export default Card;
  



// const Card = props =>{
//     const dispatch = useDispatch('');

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         dispatch(toggleFavorite(props.id));
//     };    

//     return (
//         <li className={styles.card}>{props.title}
//         <button onClick={handleSubmit} className={clsx(styles.button, props.isFavorite && styles.isActive)}>
//         <i className="fa fa-star-o" />
//       </button>
//         </li>
//     )
// };
//     export default Card;
