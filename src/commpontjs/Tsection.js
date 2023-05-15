import imges from '../image/img4.jpeg';
import image2 from '../image/mode.jpg';
import image3 from '../image/model6.jpg';
import image4 from '../image/cotsh.jpg';
import image5 from '../image/imgs8.png';
import image6 from '../image/img9.jpeg';
import { Link } from 'react-router-dom';
function Tsection()
{

  
    return(
       <>
         <section id='Brand'>
         <div className="container">
       <div className="row">
       <div className="col-lg-4 col-md-6 mb-3 post wow bounceInLeft" data-wow-duration='6s'>
       <div className="brind-item  FLEX px-2">
       <div className="dic-brind  ">
       <p className="pt-5 pb-2">Get 40% off</p>  
       <h2 className="pb-3">Man’s Lasets <br></br> Collection</h2> 
       <Link className='brand-link' to='/Prodect'><button className="btn btn-transparnt"><i class="fa-solid fa-chevron-right px-2"></i>SHOP NOW</button></Link> 
       </div>
       <div className='bind-img'><img src={imges} alt="imges"></img></div>
  
       </div>   
       </div> 

       <div className="col-lg-4 col-md-6 mb-3 post wow bounceInLeft" data-wow-duration='5s'>
       <div className="brind-item  text-center px-2">
       <div className="dic2-brind  ">
       <p className="pt-5 pb-2">Couple Fashion</p>  
       <h2 className="pb-3">Best Collection For<br></br> Stylish Couple</h2> 
       <Link className='brand-link' to='/Prodect'><button className="btn btn-transparnt"><i class="fa-solid fa-chevron-right px-2"></i>EXPLORE NOW</button></Link> 
       </div>
       <div className='bind-img-2 pt-2'><img src={image2} alt="imges" className='img-fluid'></img></div>
  
       </div>   
       </div>  


       <div className="col-lg-4 col-md-6 mb-3 post wow bounceInLeft" data-wow-duration='4s'>
       <div className="brind-item  FLEX px-2">
       <div className="dic-brind   ">
       <p className="pt-5 pb-2">Be Stylish</p>  
       <h2 className="pb-3">Girl’s Lasets Fashion</h2> 
       <Link className='brand-link' to='/Prodect'><button className="btn btn-transparnt"><i class="fa-solid fa-chevron-right px-2"></i>SHOP NOW</button></Link> 
       </div>
       <div className='bind-img3'><img src={image3} alt="imges" className='img-fluid'></img></div>
  
       </div>   
       </div> 

       <div className='col-lg-4 col-md-6 mb-3 post wow bounceInLeft'data-wow-duration='3s'>
        <div className='brand-item4 text-center '>
          <div className='img-bande-4 m-auto'><img src={image4} alt='image'className='img-fluid pb-3'></img></div>
          <div className='dec-brande-4'>
            <p className=''>New Arrival</p>
            <h2 className='pb-2'>Exlusive Shoes <br></br> Collection</h2>
            <Link className='brand-link' to='/Prodect'><button className="btn btn-transparnt"><i class="fa-solid fa-chevron-right px-2"></i>EXPLORE NOW</button></Link> 

          </div>
        </div>
       </div>

       <div className='col-lg-4 col-md-6 mb-3 post wow bounceInLeft'data-wow-duration='2s'>
        <div className='brand-item5  '>
          <div className='dec-brande-5'>
            <p className=''>Get 40% off</p>
            <h2 className=''>Trendy Sunglass</h2>
            <Link className='brand-link' to='/Prodect'><button className="btn btn-transparnt"><i class="fa-solid fa-chevron-right px-2"></i>SHOP NOW</button></Link> 
          </div>
          <div className='img-bande-5 '><img src={image5} alt='image'className='img-fluid '></img></div>
        </div>
       </div>

       <div className='col-lg-4 col-md-6 mb-3 post wow bounceInLeft'data-wow-duration='1s'>
        <div className='brand-item4  text-center'>
          <div className='dec-brande-4  '>
            <p className=''>New in 2023</p>
            <h2 className=''>Discover New Bag <br></br>Collection</h2>
            <Link className='brand-link' to='/Prodect'><button className="btn btn-transparnt"><i class="fa-solid fa-chevron-right px-2 "></i>SHOP NOW</button></Link> 
          </div>
          <div className='img-bande-6 m-auto '><img src={image6} alt='image'className='img-fluid pt-5 '></img></div>
        </div>
       </div>
       </div>   
       </div>
         </section>
       
       </>   
    )      
}

export default Tsection;