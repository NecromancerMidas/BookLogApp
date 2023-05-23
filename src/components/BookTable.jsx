import { BookRow } from "./BookRow";
import { Books } from "../Model";
import styles from '../CSS/styleSheets/BookTable.module.css';
console.log(styles.BookTable);
export const BookTable = () => {
return <table className={styles.BookTable}>
<thead>
<tr>
    <th>Title</th>
    <th>Sub-title</th>
    <th>Author</th>
    <th>Publisher</th>
    <th>Genre</th>
    <th>Subject</th>
    <th>Rating</th>
</tr>
</thead>
<tbody>
{Books.map((prop=> (<BookRow key={prop.id} prop={prop}></BookRow>)))}
</tbody>



</table>




}