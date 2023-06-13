import {Link} from 'react-router-dom';
import styles from '../CSS/styleSheets/Home.module.css'

export const Home = () => {

return <nav className='nav'>


    <Link to="/"><button type='button'>Home</button></Link>

    
    <Link to="/BookTable"><button type='button'>Edit Books</button></Link>

    <Link to="/AddBookPage"><button type='button'>Add Books</button></Link>

    <Link to="/ShowAllBooks"><button type='button'>Show All Books</button></Link>








</nav>











}