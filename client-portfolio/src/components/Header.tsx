import { Navbar, Nav, Container} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { LanguageDropdown } from './LanguageDropdown';
import { ThemeToggle } from './ThemeToggle';

export const Header = () => {
    return (
      <header>
        <Navbar className='bg-primary'>
          <Container>
            <Navbar.Brand href='#/home' className='text-light'> BrandTitle </Navbar.Brand>
            <Nav className="mr-auto">
              <Link  className='nav-link text-light' to='/home'>Home </Link>
              <Link  className='nav-link text-light' to='/portfolio'>Portfolio </Link>
              <Link  className='nav-link text-light' to='/contact'>Contacts </Link>
            </Nav>
            <LanguageDropdown className='ml-3' onClick={() => alert()}/>
            <ThemeToggle className='ml-3'/>
          </Container>
        </Navbar>    
      </header>
    );
}