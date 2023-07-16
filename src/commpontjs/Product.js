import { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { addTocart } from '../rtok/eslices/cart-slice';
import { fetchproducts } from '../rtok/eslices/product-slice';
import { Link } from 'react-router-dom';
export default function Product() {
   const products =useSelector((state)=>state.products)
    console.log(products)

  const dispatch=useDispatch();

  useEffect(()=>{
    dispatch(fetchproducts())
  },[])
    
  return (
    <>
      <section id="Prodect">
        <div className="dec-prodect text-center pb-5">
          <h2 className="pb-2 text-center">Our Products</h2>
          <div className="P-line pt-3"><div className="lin-product"></div></div>
        </div>
        <div className='cat-prouduct text-center my-5'>
        <Link to="/Electronics" className='cat-1'>electronics</Link>
        <Link to="/Jewelery" className='cat-1'>jewelery</Link>
        <Link to="/Mens" className='cat-1'>men's clothing</Link>
        <Link to="" className='cat-1'>women's clothing</Link>
        </div>
          <div className="container text-center">
            <Row>
             {products.map((product)=>
                <Col className='col-lg-3 p-3 px-3'>
                
                <Card style={{ width: '18rem' }} key={product.id} className='card-pro'>
               <Card.Img variant="top" className='pro-img' src={product.image} />
            <Card.Body>
            <Card.Text className='text-center desc-pro'>
          {product.category}
           </Card.Text>
              
                <Card.Title className='text-left rate-name '>{product.rating.rate}<i class="fa-solid fa-star mx-2"></i></Card.Title>

           <Card.Title className='text-left pro-price '>{product.price} $</Card.Title>

           <Button variant="primary" onClick={()=>dispatch(addTocart(product))}>add to cart</Button>
             </Card.Body>
            </Card>
               
              </Col>
             )}
             
              </Row>   
          </div>  
      </section>
    </>
  );
}
