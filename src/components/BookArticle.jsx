import { Books } from "../Model";
import {HomeButton} from "./HomeButton";
import '../CSS/styleSheets/Article.css';
import { useParams } from "react-router-dom";
import medationsImage from '../img/meditations.jpg';
import {Link} from "react-router-dom"
import { useNavigate } from "react-router-dom";

export const BookArticle = ({bookprop}) => {
  console.log("Something")
let {id : routeId} = useParams() || {};
let id = routeId || bookprop.id
let book = Books.find(element => element.id === Number(id))
const navigate = useNavigate();
return<>
<div className="container">
  <div className="rectangle1">
    <h1 className="title">{book.Title}</h1>
    <h2 className="subtitle">{book.SubTitle}</h2>
  </div>
  <div className="container2">
  <img src={medationsImage} className="image"/>
  <div className="container3">
  <div className="row">
  <div>
    <p className="author">Author:{book.Author}</p>
    <p className="publisher">Publisher:Publisher</p>
  </div>
  <div>
    <p className="genre">Genre:Genre</p>
    <p className="subject">Subject:Subject</p>
  </div>
  <div>
    <p className="rating">Rating:5</p>
    </div>
  </div>
  <div className="rectangle3">
    <p className="description">{book.Description}</p>
    </div>
    </div>
  </div>







</div>

{bookprop ? null : <button onClick={ () => navigate(-1)}>Back</button>}
</>
} 