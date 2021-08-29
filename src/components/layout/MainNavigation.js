import {Link} from 'react-router-dom';
import classes from './MainNavigation.module.css';

function MainNavigation(){
    return (
    <header className={classes.header}>
        <div className={classes.logo}>Audrey Abigail</div>
        <nav>
            <ul>
                <li>
                    <Link to='/'>About</Link>
                </li>
                <li>
                    <Link to='/contact'>Contact Me</Link>
                </li>
            </ul>
        </nav>
    </header>
    );
}

export default MainNavigation;