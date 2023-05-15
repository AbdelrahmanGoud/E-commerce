import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Catagory from './Catagory';
import Countdown from './Countdown';
import Product from './Product';
import Servicesection from './Servicesection';
import Tsection from './Tsection';
import Slider from './Slider';
import News from './News';
function Sectionone()
{       
   return(
     <>
      <section id="home">
       <header className="hid">
       <div class="slider-thumb wow fadeIn "data-wow-duration="2.2s"></div>
       <div className="contant wow bounceInLeft" data-wow-duration="2s">
        <p className="">SUMMER SALE IS ON</p> 
        <h1 className="pb-3">Discover Latest Fashion</h1> 
        <p className='pragraph'>Fashion is not something that exists in dresses only.<br></br> 
          Fashion is in the sky, in the street; fashion has to do with ideas, <br></br>
          the way we live, what is happening.</p>
       <Link to='/Prodect'><Button variant="dark">EXPLORE NOW</Button>{' '}</Link> 
        </div>   
       </header>   
      </section>
      <Servicesection/>
      <Tsection/>
      <Countdown/>
      <Catagory/>
      <Slider/>
      <News/>
      </>    
   )       
}
export default Sectionone;