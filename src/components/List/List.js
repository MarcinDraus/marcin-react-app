import styles from './List.module.scss';
import Column from './../Column/Column';
import ColumnForm from './../ColumnForm/ColumnForm';
import { useState } from 'react';
import shortid from 'shortid';
//import Card from './../Card/Card';

const List = () => {
    const [columns, setColumns] = useState([
      {
        id: 1,
        title: 'Books',
        icon: 'book',
        cards: [
          { id: 1, title: 'This is Going to Hurt' },
          { id: 2, title: 'Interpreter of Maladies' }
        ]
      },
      {
        id: 2,
        title: 'Movies',
        icon: 'film',
        cards: [
          { id: 1, title: 'Harry Potter' },
          { id: 2, title: 'Star Wars' }
        ]
      },
      {
        id: 3,
        title: 'Games',
        icon: 'gamepad',
        cards: [
          { id: 1, title: 'The Witcher' },
          { id: 2, title: 'Skyrim' }
        ]
      }
    ]);
      // eslint-disable-next-line no-lone-blocks
      {/* zwraca tablicę, gdzie pierwszy element to referencja do wartości stanu, a druga to referencja do funkcji do jego modyfikacji. Dzięki użyciu destrukturyzacji, od razu przypisujemy te referencje do stałych – columns i setColumns*/}
    const addColumn = newColumn => {
        setColumns([...columns, { id: shortid(), title: newColumn.title, icon: newColumn.icon, cards: [] }]);
    };
    
	return (
		<div className={styles.list}>
			<header className={styles.header}>
				<h2 className={styles.title}>Things to do<span>soon!</span></h2>
			</header>
			<p className={styles.description}>Interesting things I want to check out</p>
			<section className={styles.columns}>
        {columns.map(column => <Column key={column.id} id={column.id} title={column.title} icon={column.icon} cards={column.cards} />)}
        {/*W pliku Column.js znajduje się definicja komponentu Column, który renderuje strukturę HTML dla pojedynczej kolumny. Ten komponent jest wykorzystywany w pliku List.js do renderowania wielu kolumn na podstawie danych z tablicy columns. W tym pliku, komponent Column jest zdefiniowany i renderuje strukturę HTML dla pojedynczej kolumny. Właściwości title i icon są używane do wyświetlania odpowiednich danych wewnątrz komponentu.Atrybut key ma być w założeniu po prostu unikalną wartością, po której React będzie w stanie łatwiej identyfikować elementy w tablicy.*/}
       
			</section>
			<ColumnForm action={addColumn} />
		</div>
	);
};

export default List;