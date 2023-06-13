import { useState } from 'react'
import {Home} from './components/Home'
import  BookArticle from './components/BookArticle'
import { AddBookPage } from './components/AddBookPage'
import { Books } from './Model'
import { BookForm } from './components/bookForm'
import { BookTable } from './components/BookTable'
import './CSS/styleSheets/App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ShowAllBooks } from './components/ShowAllBooks'
import { BooksProvider } from './components/BooksContext'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
function App() {
  
  return (
    <BooksProvider>
<Router>
  <Header/>
  <Home/>
  <Routes>
    <Route path="/" element={<ShowAllBooks/>}/>
    <Route path="/BookTable" element={<BookTable/>}/>
    <Route path="/AddBookPage" element={<BookForm/>}/>
    <Route path="/ShowAllBooks" element={<ShowAllBooks/>}></Route>
    <Route path="/BookArticle/:id" element={<BookArticle/>}/>
  </Routes>
  <Footer/>
</Router>
</BooksProvider>

  );
 
  /* return (
    <>
    <BookTable></BookTable>
     <BookForm/>
    </>
  ) */

}

export default App
