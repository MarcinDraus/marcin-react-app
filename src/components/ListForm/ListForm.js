import { useState } from "react";
import { useDispatch } from "react-redux";
import { addListForm } from "../../redux/store";
import styles from "./ListForm.module.scss";
import TextInput from "../TextInput/TextInput";
import Button from "../Button/Button";

const ListForm = () => {
 
  const dispatch = useDispatch();
  const[title, setTitle] = useState('');
  const[description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addListForm({title, description}))
    setTitle('');
    setDescription('');
  }
  return (
    <form onSubmit={handleSubmit} className={styles.columnForm}>
    <span className={styles.fieldName}>Title:</span>
    <TextInput value={title} onChange={(e) => setTitle(e.target.value)} className={styles.input} />
    <span className={styles.fieldName}>Description:</span>
    <TextInput value={description} onChange={(e) => setDescription(e.target.value)} className={styles.input} />
    <Button>Add List</Button>
  </form>
  )
};
export default ListForm;
