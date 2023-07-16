import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { addTocart } from '../rtok/eslices/cart-slice';
import Product from './Product';
import { useDispatch } from 'react-redux';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Mens() {
  const [mens, setmens] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/category/mensclothing')
      .then((res) => res.json())
      .then((mens) => setmens(mens));
  }, []);

  return (
    <>
      <section className="elct">
        <div className="dec-prodect text-center pb-5">
          <h2 className="pb-2 text-center">Men's clothing</h2>
          <div className="P-line pt-2">
            <div className="lin-product"></div>
          </div>
        </div>
        <div className="px-5">
          <Row>  
 {mens.map((men) => (
          <Col className='col-lg-3 col-md-6 mb-3'>
  <Card style={{ width: '18rem' }} key={men.id} className="elc-cat text-center">
                    <Card.Img variant="top" src={men.image} className="img-fluid img-elct text-center" />
                    <Card.Body>
                    <p className='my-4'>{men.title}</p>
                      <p className='mb-3 text-left rate-name'>{men.rating.rate}<i class="fa-solid fa-star mx-2"></i> || {men.rating.count} piece</p>
                      <h6 className='mb-3 text-left'>{men.price} $</h6>
                      <Link to="/Prodect" className='elc-but'>add to cart</Link>
                    </Card.Body>
                  </Card>                   
          </Col>
 ))}
          </Row>
        </div>
      </section>
    </>
  );
}

export default Mens;
