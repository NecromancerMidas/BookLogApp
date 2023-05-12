import Rating from "react-rating"

export const BookForm = () => {

return <form className="form">

<h1>BookList</h1>
<label className="label" htmlFor="Name">Title</label>
<input type="text" id="Name" className="textInput" placeholder="Meditations"></input>
<label className="label" htmlFor="subTitle">Sub Title</label>
<input type="text" id="subTitle" className="textInput" placeholder="Marcus Aurelius"></input>
<label className="label" htmlFor="Author">Author</label>
<input type="text" id="Author" className="textInput" placeholder="Gregory Hays"></input>
<label className="label" htmlFor="Publisher">Publisher</label>
<input type="text" id="Publisher" className="textInput" placeholder="Modern Library"></input>
<label className="label" htmlFor="Genre"></label>
<input type="text" id="Genre" className="textInput" placeholder="Philosophy"></input>
<label className="label" htmlFor="Subject">Subject</label>
<input type="text" id="Subject" className="textInput" placeholder="Stoicism"></input>
<label className="label" htmlFor="Description">Description</label>
<textarea type="text" id="Description" className="textInput" placeholder="Good fucking book."></textarea>
<label className="label" htmlFor="Rating">Rating</label>
<Rating id="Rating" initialRating={"3"}></Rating>




</form>



}