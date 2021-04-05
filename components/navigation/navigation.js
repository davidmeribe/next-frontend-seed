import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/form';
import Button from 'react-bootstrap/Button'
import styles from './navigation.module.css';
import  InputGroup  from 'react-bootstrap/InputGroup';


export default function Navigation(){
    return (
        <Navbar bg='light' expand='lg'>
           <Navbar.Brand href='/home'>
               <img
                 src='/favicon.ico'
                 width='30'
                 height='30'
                 className='d-inline-block align-top'
               />{' '}
               Rolo Bank
           </Navbar.Brand> 
           <Navbar.Toggle aria-controls="responsive-navbar-nav" />  
           <Navbar.Collapse>
             <Nav className='mr-auto'>
                <Nav.Link href='/home'>HOME</Nav.Link>
                <Nav.Link>ABOUT US</Nav.Link>
                <Nav.Link>PORTFOLIO</Nav.Link>
                <Nav.Link>NEWS</Nav.Link>
                <Nav.Link>LOCATION</Nav.Link>
              </Nav>
               <Form inline>
                 <Form.Control type='text' placeholder='Search' className='mr-sm-3' />
                 <span className={styles.searchIcon}></span>
                </Form>
                <Nav className='ml-sm-3'>
                  <Nav.Link>LOGIN</Nav.Link>
                  <Button variant='primary'>SIGN UP</Button>
                </Nav>
           </Navbar.Collapse>   
        </Navbar>
    )
}