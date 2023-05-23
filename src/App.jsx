import { useState } from 'react'
import {Home} from './components/Home'
import { BookArticle } from './components/BookArticle'
import { AddBookPage } from './components/AddBookPage'
import { Books } from './Model'
import './CSS/styleSheets/App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ShowAllBooks } from './components/ShowAllBooks'
function App() {
  
  return (
<Router>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/BookArticle/:id" element={<BookArticle/>}/>
    <Route path="/AddBookPage" element={<AddBookPage/>}/>
    <Route path="/ShowAllBooks" element={<ShowAllBooks/>}></Route>
  </Routes>
</Router>

  );
 
  /* return (
    <>
    <BookTable></BookTable>
     <BookForm/>
    </>
  ) */

}

export default App
