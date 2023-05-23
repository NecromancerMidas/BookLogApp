import { BookTable } from "./BookTable"
import {BookForm } from "./bookForm"



export const AddBookPage = () => {
return <div style={{display:"flex",flexDirection:"column"}}>
<div style={{alignSelf:"center"}}><BookTable></BookTable></div>
<div><BookForm></BookForm></div>
</div>





}