import { Navbar, Nav} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ThemeToggle } from './ThemeToggle/ThemeToggle';

export const Header = () => {
    return (
      <header>
        <Navbar className='bg-primary'>
          <Navbar.Brand href='#/home' className='text-light'> BrandTitle </Navbar.Brand>
          <Nav className="mr-auto">
            <Link  className='nav-link text-light' to='/home'>Home </Link>
            <Link  className='nav-link text-light' to='/portfolio'>Portfolio </Link>
            <Link  className='nav-link text-light' to='/contact'>Contact </Link>
          </Nav>
          <ThemeToggle/>
        </Navbar>    
      </header>
    );
}