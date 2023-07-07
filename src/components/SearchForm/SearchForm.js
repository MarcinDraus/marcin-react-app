
import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { searchString } from '../../redux/store';

const SearchForm = () => {
  const dispatch = useDispatch();

  const [titleSearch, setTitleSearch] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(searchString({ type: 'UPDATE_SEARCHSTRING', payload: titleSearch }));
    setTitleSearch('');
  };

  return (
    <form className={styles.searchForm} onSubmit={handleSubmit}>
      <TextInput value={titleSearch} onChange={(e) => setTitleSearch(e.target.value)} placeholder="Search..." />
      <Button>
        <span className="fa fa-search" />
      </Button>
    </form>
  );
};

export default SearchForm;