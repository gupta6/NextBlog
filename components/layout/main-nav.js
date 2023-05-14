import Link from 'next/link';

import Logo from './logo';
import classes from './main-nav.module.css';

function MainNav() {
    return <header className={classes.header}>
        <Link href='/'>
            <Logo />
            {/* If we pass anything except plain text. Link will not render a anchor tag for us. In order to do that we have to 
            bring our own anchor tag. We don't need to add ref to anchor tag. Link will do that for us. It will pass ref declared
            on link to direct child of link which is a anchor tag.  
            This is not required in new versions of next.
            */}
        </Link>
        
        <nav>
            <ul>
                <li><Link href='/posts'>Posts</Link></li>
                <li><Link href='/contact'>Contact</Link></li>
            </ul>
        </nav>
    </header>
}

export default MainNav;