import Rating from "react-rating";
import {Link} from "react-router-dom";
import  axios  from "axios";
import { useState } from "react";
export const BookRow = ({prop}) => {
const deleteBook = () => {
    axios.delete(`http://localhost:5199/books/${prop.id}`);
}
//Sort via rating, credit ståle.
//Kankje table.
// make a table of books without description, or just a part of it. Then link individual books to their own page
//with full description.
let id = prop.id;
const [editMode, setEditMode] = useState(false);
const changeEditMode = () => {
let toSwapTo = !editMode
if (editMode === true){
    handleSubmit();
}
setEditMode(toSwapTo); 
}
const handleSubmit = () => {
const book = {
    Title: TableTitle.value,
    SubTitle:TableSubTitle.value,
    Author: TableAuthor.value,
    Publisher: TablePublisher.value,
    Genre: TableGenre.value,
    Subject: TableSubject.value,
    Description: TableDescription.value,
    Rating: TableRating.value,
}
console.log(book)
axios.put(`http://localhost:5199/api/Books/${prop.id}`,book)
window.location.reload();

}

return <><tr id={prop.id}>
<td>{editMode ? <input  id="TableTitle" type="text" defaultValue={prop.title}></input> : <Link to={`/BookArticle/${id}`}>{prop.title}</Link>}</td>
<td>{editMode ? <input  id="TableSubTitle"  type="text" defaultValue={prop.subTitle}></input>: prop.subTitle}</td>
<td >{editMode ? <input id="TableAuthor" type="text" defaultValue={prop.author}></input> : prop.author}</td>
<td >{editMode ? <input id="TablePublisher" type="text" defaultValue={prop.publisher}></input> : prop.publisher}</td>
<td >{editMode ? <input  id="TableGenre" type="text" defaultValue={prop.genre}></input> : prop.genre}</td>
<td >{editMode ? <input  id="TableSubject" type="text" defaultValue={prop.subject}></input> : prop.subject}</td>
{/* <td>{prop.Description}</td> */}
<td >{editMode ? <input id="TableRating" type="number" defaultValue={prop.rating}></input> : prop.rating}</td>
<td><button onClick={changeEditMode}>Edit</button></td>
<td><button onClick={deleteBook}>Delete</button></td>
</tr>
{editMode ? <><tr>
        <th colSpan={"9"}>Description</th>
    </tr><tr>
            <td colSpan={"9"}>
                <textarea id="TableDescription" type="text" defaultValue={prop.description}></textarea>
            </td>
        </tr></> : null}
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