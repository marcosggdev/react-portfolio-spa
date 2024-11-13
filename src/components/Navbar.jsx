//import nav from '../data/nav.json';
import nav from '../data/nav.json';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

require('../assets/css/Navbar.css');

export default function Nav () {
   
    const location = useLocation();

    const navEntries = nav.map((entry) => 
        <li key={entry.id}>
            <Link to={entry.route}>{entry.name}</Link>
            <div className={'current-indicator' + ((location.pathname===entry.route) ? ' current' : '')}></div>
        </li>
    );
    
    return(
        <nav className='nav'>
            <div className='logo'>
                <h2 className='title'>&lt;marcosggdev /&gt;</h2>
            </div>
            <ul>
                {navEntries}
                <div className='current-container'></div>
            </ul>
        </nav>
    );
}