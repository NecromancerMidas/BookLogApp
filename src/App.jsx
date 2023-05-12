import { useState } from 'react'
import { BookForm } from './components/bookForm'
import { Book } from './components/Book'
import { Books } from './Model'
function App() {
  

  return (
    <>
    <Book prop={Books[0]}></Book>
     <BookForm/>
    </>
  )
}

export default App
