import Rating from "react-rating"
import { useState } from "react"
import styles from '../CSS/styleSheets/BookForm.module.css'

export const BookForm = () => {
const [values, setValues] = useState({Title: '' ,subTitle: '', Author: '', 
Publisher: '', Genre: '', Subject: '', Description:'', Rating:3,Image: null})
const handleInputChange = (e) => {
    if (e.target.files) {
        setValues({...values, [e.target.id]:e.target.files[0]})
    };
    setValues({...values, 
        [e.target.id]:e.target.value});
}
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(values);
        console.log(values.Image);
    }
return  <form className={styles.form} onSubmit={handleSubmit}>
<h1>Add Book</h1>
<label htmlFor="Title">Title</label>
<input type="text" id="Title" className={styles.textInput} placeholder="Meditations" onChange={handleInputChange}></input>
<label htmlFor="subTitle">Sub Title</label>
<input type="text" id="subTitle" className={styles.textInput} placeholder="Marcus Aurelius" onChange={handleInputChange}></input>
<label htmlFor="Author">Author</label>
<input type="text" id="Author" className={styles.textInput} placeholder="Gregory Hays" onChange={handleInputChange}></input>
<label htmlFor="Publisher">Publisher</label>
<input type="text" id="Publisher" className={styles.textInput} placeholder="Modern Library" onChange={handleInputChange}></input>
<label htmlFor="Genre">Genre</label>
<input type="text" id="Genre" className={styles.textInput} placeholder="Philosophy" onChange={handleInputChange}></input>
<label htmlFor="Subject">Subject</label>
<input type="text" id="Subject" className={styles.textInput} placeholder="Stoicism" onChange={handleInputChange}></input>
<label htmlFor="Description">Description</label>
<textarea type="text" id="Description" className={styles.textInput} placeholder="Good fucking book." onChange={handleInputChange}></textarea>
<label htmlFor="Rating">Rating out of 5</label>
<input id="Rating" type="number" max="5" min="0" value={values.Rating} className={styles.numberInput} onChange={handleInputChange}></input>
<label htmlFor="Image">Image</label>
<input id="Image" type="file" className={styles.fileInput} onChange={handleInputChange} accept=".jpg,.png,.bmp"></input>
<input type="submit" className={styles.submitButton}></input>
</form>
;



}