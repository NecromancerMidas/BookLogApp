import Rating from "react-rating";
import { Books } from "../Model";
export const ListDisplay = () => {

//Sort via rating, credit ståle.
const bookList = Books.map((Book) => 
<ul><Book key={Book.id} 
title={Book.Title} 
SubTitle={Book.SubTitle} 
Author={Book.Author}
Publisher={Book.Publisher}
Genre={Book.Genre}
Subject = {Book.Subject}
Descriptions={Book.Description}
Rating={Book.Rating}></Book></ul>








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


)
return bookList;
;















}