import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
function Navapp()
{
              const cart =useSelector(state=>state.cart)  
    return(
        <>
      <Navbar bg="light" expand="lg" className='px-3 fixed-top'>
      <Container fluid>
        <Link className='rout-link my-2 logo' to="/">e-Ecommerce</Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="m-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
          <Link className='rout-link my-2' to="/">Home</Link>
          <Link className='rout-link my-2' to="/About">About</Link>
            <Link className='rout-link my-2' to="/Prodect" >Products</Link>
            <Link className='my-2 cart-icon' to='/Cart' ><i class="fa-solid fa-cart-plus"> <div className='countr-cart'>{cart.length}</div> </i></Link>
          </Nav>
                <span className='px-2'><i class="fa-brands fa-facebook"></i></span>  
                 <span className='px-2'><i class="fa-brands fa-twitter"></i></span>   
                 <span className='px-2'><i class="fa-brands fa-instagram"></i></span>
                 <span className='px-2'><i class="fa-brands fa-youtube"></i></span> 
                 <span className='px-2'><i class="fa-brands fa-linkedin"></i></span>     
             
        </Navbar.Collapse>
      </Container>
    </Navbar>   
        </>  
    )      
}
export default Navapp;
