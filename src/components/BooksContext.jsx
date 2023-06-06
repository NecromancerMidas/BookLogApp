import axios from "axios";
import React, {useState,createContext,useEffect,useContext} from "react";

export const BooksContext = createContext()
async function GetBooks() {
    return axios.get('http://localhost:5199/api/books')
    .then(response => {
        return response.data
    }).catch( error => {
        console.log(error);
    })
    }
export const BooksProvider = ({children}) => {
const [books,setBooks] = useState(null);


    const fetchData = async () => {
        const data = await GetBooks();
        console.log(data);
        setBooks(data);
    };


useEffect(() => {
    console.log(books);
    fetchData();

},[])
return (<BooksContext.Provider value={{books,fetchData}}>
    {children}
</BooksContext.Provider>)
};