import { Navbar, NavLink, Nav} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ThemeToggle } from './ThemeToggle/ThemeToggle';

export const Header = () => {
    return (
      <header>
        <Navbar className='bg-primary'>
          <Navbar.Brand href='/home' className='text-light'> BrandTitle </Navbar.Brand>
          <Nav className="mr-auto">
            <NavLink> <Link  className='text-light' to='/home'>Home </Link> </NavLink>
            <NavLink> <Link  className='text-light' to='/portfolio'>Portfolio </Link> </NavLink>
          </Nav>
          <ThemeToggle/>
        </Navbar>    
      </header>
    );
}