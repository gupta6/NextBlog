import MainNav from './main-nav';

function Layout (props) {
    return <>
        <MainNav/>
        {props.children}
    </>
} 

export default Layout;