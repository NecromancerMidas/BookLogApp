import Rating from "react-rating";
import {Link} from "react-router-dom";
export const BookRow = ({prop}) => {
const click = () => {
    console.log("clickk");
}
//Sort via rating, credit ståle.
//Kankje table.
// make a table of books without description, or just a part of it. Then link individual books to their own page
//with full description.
let id = prop.id;

return <tr id={prop.id}>
<td><Link to={`/BookArticle/${id}`}>{prop.Title}</Link></td>
<td>{prop.SubTitle}</td>
<td>{prop.Author}</td>
<td>{prop.Publisher}</td>
<td>{prop.Genre}</td>
<td>{prop.Subject}</td>
{/* <td>{prop.Description}</td> */}
<td>{prop.Rating}</td>
</tr>
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