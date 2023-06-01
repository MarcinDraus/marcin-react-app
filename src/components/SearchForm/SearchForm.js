// eslint-disable-next-line
import styles from './SearchForm.module.scss';

const SearchForm = () => {
    return (
        <form className={styles.searchForm}>
            <input type="text" className={styles.input}/>
            <button type="search" className={styles.button} >Search</button>
        </form>
    );
}

  export default SearchForm;