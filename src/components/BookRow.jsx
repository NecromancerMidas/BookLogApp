import Rating from "react-rating";
import {Link} from "react-router-dom";
import  axios  from "axios";
import { useEffect, useState } from "react";
import { serverURL } from "../config";
export const BookRow = ({prop}) => {
const deleteBook = () => {
    axios.delete(`http://localhost:5199/api/Books/${prop.id}`);
}

useEffect(() => {
if(image) {
    
}

})
//Sort via rating, credit ståle.
//Kankje table.
// make a table of books without description, or just a part of it. Then link individual books to their own page
//with full description.
let id = prop.id;
const [editMode, setEditMode] = useState(false);
const changeEditMode = () => {
if (editMode === true){
    console.log(editMode)
    handleSubmit();

}
setEditMode(e => !e); 
}
const handleSubmit = async () => {
    const imageToSend = new FormData();
    imageToSend.append("image",image);
      const imagePath = await axios.post("http://localhost:5199/api/Books/upload", imageToSend, {headers: {'Content-Type': 'multipart/form-data'}});
const book = {
    Title: title,
    SubTitle: subTitle,
    Author: author,
    Publisher: publisher,
    Genre: genre,
    Subject: subject,
    Description: description,
    Rating: rating,
    Image : imagePath.data.path,
}
console.log(book)

await axios.put(`http://localhost:5199/api/Books/${prop.id}`,book)

}
const [title, setTitle] = useState(prop.title);
const [subTitle, setSubTitle] = useState(prop.subTitle);
const [author, setAuthor] = useState(prop.author);
const [publisher, setPublisher] = useState(prop.publisher);
const [genre, setGenre] = useState(prop.genre);
const [subject, setSubject] = useState(prop.subject);
const [description, setDescription] = useState(prop.description);
const [rating, setRating] = useState(prop.rating);
const [image, setImage] = useState(prop.image);
// you are fucking retarded.
// Edit: YOU ARE REALLY RETARDED. Use USESTATES!
return <><tr id={prop.id}>
    <td>{editMode ? <input id={`TableTitle ${prop.id}`} onChange={e => setTitle(e.target.value)} type="text" defaultValue={title}></input> : <Link to={`/BookArticle/${id}`}>{title}</Link>}</td>
<td>{editMode ? <input id={`TableSubTitle ${prop.id}`} onChange={e => setSubTitle(e.target.value)} type="text" defaultValue={subTitle}></input>: subTitle}</td>
<td>{editMode ? <input id={`TableAuthor ${prop.id}`} onChange={e => setAuthor(e.target.value)} type="text" defaultValue={author}></input> : author}</td>
<td>{editMode ? <input id={`TablePublisher ${prop.id}`} onChange={e => setPublisher(e.target.value)} type="text" defaultValue={publisher}></input> : publisher}</td>
<td>{editMode ? <input id={`TableGenre ${prop.id}`} onChange={e => setGenre(e.target.value)} type="text" defaultValue={genre}></input> : genre}</td>
<td>{editMode ? <input id={`TableSubject ${prop.id}`} onChange={e => setSubject(e.target.value)} type="text" defaultValue={subject}></input> : subject}</td>
<td>{editMode ? <input id={`TableRating ${prop.id}`} onChange={e => setRating(e.target.value)} type="number" defaultValue={rating}></input> : rating}</td>
<td><button onClick={changeEditMode}>Edit</button></td>
<td><button onClick={deleteBook}>Delete</button></td>
</tr>
{editMode ? <><tr>
        <th colSpan={"9"}>Description</th>
    </tr><tr>
            <td colSpan={"9"}>
                <textarea id="TableDescription" onChange={e => setDescription(e.target.value)} type="text" defaultValue={description}></textarea>
            </td>
        </tr></> : null}
        {editMode ? <><tr>
            <th colSpan={"9"}>Image</th></tr>
            <tr><td colSpan={"9"}>
                <img src={`${serverURL}${prop.image}`} style={{width:"200px",height:"307.986px"}}/>
                <input type="file" accept=".jpg,.png,.bmp" onChange={e => setImage(e.target.files[0])}></input></td></tr>
            </> : null}
</>
/* <ul><Book key={Book.id} 
title={Book.Title} 
SubTitle={Book.SubTitle} 
Author={Book.Author}
Publisher={Book.Publisher}
Genre={Book.Genre}
Subject = {Book.Subject}
Descriptions={Book.Description}
Rating={Book.Rating}></Book></ul>
 */
/* <ol key={Book.id}>
<li key={Book.Title}>{Book.Title}</li>
<li key={(Book.SubTitle + Book.id)}>{Book.SubTitle}</li>
<li key={(Book.Author + Book.id)}>{Book.Author}</li>
<li key={(Book.Publisher + Book.id)}>{Book.Publisher}</li>
<li key={(Book.Genre + Book.id)}>{Book.Genre}</li>
<li key={(Book.Subject + Book.id)}>{Book.Subject}</li>
<li key={(Book.Description + Book.id)}>{Book.Description}</li>
<li key={(Book.Rating + Book.id)}><Rating readonly quiet initialRating={Book.Rating}></Rating></li>

</ol> */

}