import Carousel from 'react-bootstrap/Carousel';
import slid1 from '../image/fprson.jpeg';
import slid2 from '../image/sprson.jpeg';
function Slider()
{ 
 
     return(
      <>
      <section className="slide-sec  ">
        <div className='mx-5'>
          <div className='row'>
          <div className='col-md-6 col-lg-3 wow bounceInLeft' data-wow-duration='3s'>
          <div className='catd-slid'>
              
              <div className="slid-icon">
               <div className='question'>
               <span><i class="fa-solid fa-quote-right"></i></span>
               </div>
            <div className='star'>
            <span><i class="fa-solid fa-star"></i></span>
        <span><i class="fa-solid fa-star"></i></span>
        <span><i class="fa-solid fa-star"></i></span>
        <span><i class="fa-solid fa-star"></i></span>
        <span><i class="fa-solid fa-star-half-stroke"></i></span>
            </div>
              </div>
       <div className='person-cap'>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla architecto, iusto voluptas ullam eveniet dolorem nostrum, molestiae, ducimus pariatur beatae voluptatum quibusdam. Praesentium ipsum, laudantium et sint ad tempore aspernatur?</p>
       <img
                className="d-block img-fluid"
                src={slid1}
                alt="First slide"
              />
              <h6>Katherine Lang</h6>
              <p>Journalist</p>
       </div>
               </div> 
            </div> 
            <div className='col-md-6 col-lg-3 wow bounceInDown' data-wow-duration='2s'>
              
            <div className='catd-slid '>
               <div className="slid-icon">
                 <div className='question'>
                 <span><i class="fa-solid fa-quote-right"></i></span>
                 </div>
              <div className='star'>
              <span><i class="fa-solid fa-star"></i></span>
          <span><i class="fa-solid fa-star"></i></span>
          <span><i class="fa-solid fa-star"></i></span>
          <span><i class="fa-solid fa-star"></i></span>
          <span><i class="fa-solid fa-star-half-stroke"></i></span>
              </div>
                </div>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla architecto, iusto voluptas ullam eveniet dolorem nostrum, molestiae, ducimus pariatur beatae voluptatum quibusdam. Praesentium ipsum, laudantium et sint ad tempore aspernatur?</p>
           <div className='person-cap'>
           <img
                  className="d-block img-fluid"
                  src={slid2}
                  alt="Second slide"
                />
               <h6> John Anderson</h6>
               <p>Web Development</p>
           </div>
               </div>
            </div> 
            <div className='col-md-6 col-lg-3 wow bounceInUp' data-wow-duration='2s'>
          <div className='catd-slid'>
              
              <div className="slid-icon">
               <div className='question'>
               <span><i class="fa-solid fa-quote-right"></i></span>
               </div>
            <div className='star'>
            <span><i class="fa-solid fa-star"></i></span>
        <span><i class="fa-solid fa-star"></i></span>
        <span><i class="fa-solid fa-star"></i></span>
        <span><i class="fa-solid fa-star"></i></span>
        <span><i class="fa-solid fa-star-half-stroke"></i></span>
            </div>
              </div>
       <div className='person-cap'>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla architecto, iusto voluptas ullam eveniet dolorem nostrum, molestiae, ducimus pariatur beatae voluptatum quibusdam. Praesentium ipsum, laudantium et sint ad tempore aspernatur?</p>
       <img
                className="d-block img-fluid"
                src={slid1}
                alt="First slide"
              />
              <h6>Katherine Lang</h6>
              <p>Journalist</p>
       </div>
               </div> 
            </div>
            <div className='col-md-6 col-lg-3 wow bounceInLeft' data-wow-duration='1s'>
              
              <div className='catd-slid '>
                 <div className="slid-icon">
                   <div className='question'>
                   <span><i class="fa-solid fa-quote-right"></i></span>
                   </div>
                <div className='star'>
                <span><i class="fa-solid fa-star"></i></span>
            <span><i class="fa-solid fa-star"></i></span>
            <span><i class="fa-solid fa-star"></i></span>
            <span><i class="fa-solid fa-star"></i></span>
            <span><i class="fa-solid fa-star-half-stroke"></i></span>
                </div>
                  </div>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla architecto, iusto voluptas ullam eveniet dolorem nostrum, molestiae, ducimus pariatur beatae voluptatum quibusdam. Praesentium ipsum, laudantium et sint ad tempore aspernatur?</p>
             <div className='person-cap'>
             <img
                    className="d-block img-fluid"
                    src={slid2}
                    alt="Second slide"
                  />
                 <h6> John Anderson</h6>
                 <p>Web Development</p>
             </div>
                 </div>
              </div>            
          </div>
        </div>
      </section>
      </>
     ) 
}
export default Slider;



