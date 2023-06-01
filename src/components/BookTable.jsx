import { BookRow } from "./BookRow";
//import { Books } from "../Model";
import {BooksContext,BooksProvider} from "./BooksContext.jsx"
import React,{useContext} from "react";
import styles from '../CSS/styleSheets/BookTable.module.css';
console.log(styles.BookTable);
export const BookTable = () => {
const {books,fetchData} = useContext(BooksContext);
if (!books) return <div>loading...</div>
return (<table className={styles.BookTable}>
<thead>
<tr>
    <th>Title</th>
    <th>Sub Title</th>
    <th>Author</th>
    <th>Publisher</th>
    <th>Genre</th>
    <th>Subject</th>
    <th>Rating</th>
    <th>Edit</th>
    <th>Delete</th>
</tr>
</thead>
<tbody>

    
{books.map((prop=> (<BookRow key={prop.id} prop={prop}></BookRow>)))}

</tbody>



</table>

)
}