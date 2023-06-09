import Rating from "react-rating"
import { useEffect, useState ,useContext} from "react"
import styles from '../CSS/styleSheets/BookForm.module.css'
import axios from "axios"
import { render } from "react-dom"
import { BooksContext,BooksProvider } from "./BooksContext"
export const BookForm = () => {
const {books, fetchData} = useContext(BooksContext)
const [values, setValues] = useState({Title: '' ,subTitle: '', Author: '', 
Publisher: '', Genre: '', Subject: '', Description:'', Rating:3,Image: null})
const handleInputChange = (e) => {
    if (e.target.files) {
        setValues({...values, [e.target.id]:e.target.files[0]})
    };
    setValues({...values, 
        [e.target.id]:e.target.value});q
}
   
    const handleSubmit = async (e) => {
        e.preventDefault();
      const imageToSend = new FormData();
      imageToSend.append("image",form.Image.files[0]);
      console.log(imageToSend)
        const imagePath = await axios.post("http://localhost:5199/api/Books/upload", imageToSend, {headers: {'Content-Type': 'multipart/form-data'}});
        const book = {
        Title:form.Title.value,
        SubTitle:form.subTitle.value,
        Author: form.Author.value,
        Publisher: form.Publisher.value,
        Genre: form.Genre.value,
        Subject: form.Subject.value,
        Description: form.Description.value,
        Image : imagePath.data.path,
        Rating: form.Rating.value,
    }
        console.log(values);
        console.log(form.Title.value)
        console.log(values.Image);
        console.log(book.values);
        axios.post('http://localhost:5199/api/Books',book,);
    }
return  <form id="form" className={styles.form} onSubmit={handleSubmit}>
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