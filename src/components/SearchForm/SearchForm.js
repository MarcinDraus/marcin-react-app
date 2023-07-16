
import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { searchString } from '../../redux/store';
import { useEffect } from 'react';


const SearchForm = () => {
  const dispatch = useDispatch();
  const [titleSearch, setTitleSearch] = useState('');

  useEffect(() => {
    dispatch(searchString(titleSearch));
  }, [titleSearch, dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submit clicked');
    console.log('Title Search:', titleSearch);
    console.log('Title Search:', titleSearch);
    dispatch(searchString(titleSearch));
    setTitleSearch('');
    
  };


  return (
    <form className={styles.searchForm} onSubmit={handleSubmit}>
      <TextInput value={titleSearch} onChange={(e) => {setTitleSearch(e.target.value);
    console.log(titleSearch, 'titleSearch');  
    }}
       
      placeholder="Search..." />
      <Button>
        <span className="fa fa-search" />
      </Button>
    </form>
  );
};

export default SearchForm;