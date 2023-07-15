
import styles from './CardForm.module.scss';
import { useState } from 'react';
import Button from './../Button/Button';
import TextInput from './../TextInput/TextInput';
import { useDispatch } from 'react-redux';
import { addCard } from '../../redux/store';

const CardForm = ({ columnId }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addCard({ columnId, title }));
    setTitle('');
  };

  return (
    <form className={styles.cardForm} onSubmit={handleSubmit}>
      <TextInput value={title} onChange={(e) => setTitle(e.target.value)} />
      <Button type="submit">Add card</Button>
    </form>
  );
};

export default CardForm;

// import styles from './CardForm.module.scss';
// import { useState } from 'react';
// import Button from './../Button/Button';
// import TextInput from './../TextInput/TextInput';
// import { useDispatch } from 'react-redux';
// import { addCard } from '../../redux/store';//kreator

// const CardForm = ({ columnId }) => {
//   const dispatch = useDispatch();
//   const [title, setTitle] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     dispatch(addCard({ columnId, title }));
//     setTitle('');
//   };

//   return (
//     <form className={styles.cardForm} onSubmit={handleSubmit}>
//       <TextInput value={title} onChange={(e) => setTitle(e.target.value)} />
//       <Button type="submit">Add card</Button>
//     </form>
//   );
// };

// export default CardForm;

