import {Link} from 'react-router-dom';


export const Home = () => {

return <nav className='nav'>
<ul>
<li>

    <Link to="/">Home</Link>
</li>
<li>
    <Link to="/BookArticle">Book Article</Link>
</li>
<li>
    <Link to="/AddBookPage">Add Books</Link>
</li>
<li>
    <Link to="/ShowAllBooks">Show All Books</Link>
</li>
</ul>
<li>Bambi is Cool</li>








</nav>











}