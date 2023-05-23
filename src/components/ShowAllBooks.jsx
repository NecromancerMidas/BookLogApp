import {Books} from '../Model';
import { BookArticle } from './BookArticle';
import { Link } from 'react-router-dom';


export const ShowAllBooks = () => {

return <>
{Books.map((prop=> (<BookArticle key={prop.id} bookprop={prop}></BookArticle>)))}
<Link to="/">Home</Link>
</>





}