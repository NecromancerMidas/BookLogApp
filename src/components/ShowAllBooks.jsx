import {Books} from '../Model';
import { BookArticle } from './BookArticle';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useEffect,useState } from 'react';





export const ShowAllBooks = () => {
    async function GetBooks() {
        return axios.get('http://localhost:5199/api/books')
        .then(response => {
            return response.data
        }).catch( error => {
            console.log(error);
        })
        }

    const [books,setBooks] = useState();

    useEffect(() => {
        const fetchData = async () => {
            const data = await GetBooks();
            console.log(data);
            setBooks(data);
        };
        fetchData();
    },[]);

    useEffect(() => {
        console.log(books);

    },[books])

return <>
{!books ?  <div>Loading...</div> : 
books.map((prop=> (<BookArticle key={prop.id} bookprop={prop}></BookArticle>)))}
<Link to="/">Home</Link>
</>





}