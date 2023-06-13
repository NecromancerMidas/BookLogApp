import {HomeButton} from "./HomeButton";
import '../CSS/styleSheets/Article.css';
import { useParams } from "react-router-dom";
import medationsImage from '../img/meditations.jpg';
import {Link} from "react-router-dom"
import { useNavigate } from "react-router-dom";
import { BooksContext, BooksProvider } from "./BooksContext.jsx";
import React,{useContext} from "react"
import axios from "axios";
import {BookArticleConditionalWrapper} from "./BookArticleConditionalWrapper.jsx";
import { serverURL } from "../config";

const BookArticle = ({bookprop}) => {
let {id : routeId} = useParams() || {};
let id = routeId || bookprop.id
console.log(bookprop)
const {books,fetchData} = useContext(BooksContext);
if (!books) return <div>loading...</div>
console.log(books)
let book = !bookprop ? books.find(element => element.id === id) : bookprop
console.log(book)
const navigate = useNavigate();
return  <>
<div className="container">
  <div className="rectangle1">
    <h1 className="title">{book.title}</h1>
    <h2 className="subtitle">{book.subTitle}</h2>
  </div>
  <div className="container2">
  <img src={`${serverURL}${book.image}`} className="image"/>
  <div className="container3">
  <div className="row">
  <div>
    <p className="author">Author:{book.author}</p>
    <p className="publisher">Publisher:{book.publisher}</p>
  </div>
  <div>
    <p className="genre">Genre:{book.genre}</p>
    <p className="subject">Subject:{book.subject}</p>
  </div>
  <div>
   
    <p className="rating">Rating:{book.rating}</p>
    </div>
  </div>
  <div className="rectangle3">
    <pre className="description">{book.description}</pre>
    </div>
    </div>
  </div>







</div>

{bookprop ? null : <button onClick={ () => navigate(-1)}>Back</button>}
</>
} 
const WrappedBookArticle = (props) => {
  return BookArticleConditionalWrapper(BookArticle, !props.bookprop)(props);
}
export default WrappedBookArticle;