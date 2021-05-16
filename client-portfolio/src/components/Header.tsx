import { Navbar, NavLink, Nav} from 'react-bootstrap';

export const Header = () => {
    return (
      <header>
        <Navbar className='bg-primary'>
          <Navbar.Brand href='#home' className='text-light'> BrandTitle </Navbar.Brand>
          <Nav className="mr-auto">
            <NavLink href='#home' className='text-light'> Home </NavLink>
            <NavLink href='#link' className='text-light'> Link </NavLink>
          </Nav>
        </Navbar>    
      </header>
    );
}