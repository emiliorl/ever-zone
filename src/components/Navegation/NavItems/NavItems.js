import classes from './NavItems.module.css'
import NavItem from './NavItem/NavItem';

const navItems = (props) =>
{
    return(
        <ul className={classes.NavItems}>
            <NavItem link="/">Dashboard</NavItem>
            <NavItem link="/about">About</NavItem>
            <NavItem link="/products">Products</NavItem>
        </ul>
    )
}

export default navItems;