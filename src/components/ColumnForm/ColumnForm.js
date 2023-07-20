
import styles from './ColumnForm.module.scss';
import { useState } from 'react';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import { useDispatch } from 'react-redux';
import { addColumn } from '../../redux/columnRedux';

const ColumnForm = ({ listId }) => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [icon, setIcon] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addColumn({ listId, title, icon }));
    setTitle('');
    setIcon('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.columnForm}>
      <span className={styles.fieldName}>Title:</span>
      <TextInput value={title} onChange={(e) => setTitle(e.target.value)} className={styles.input} />
      <span className={styles.fieldName}>Icon:</span>
      <TextInput value={icon} onChange={(e) => setIcon(e.target.value)} className={styles.input} />
      <Button>Add column</Button>
    </form>
  );
};

export default ColumnForm;
