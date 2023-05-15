import { Link } from 'react-router-dom';
import aboutim from '../image/profile.jpg';
 function About()
{
     return(
          <>
          <section className="about ">
          <div className="container ">
          <div className="row">
          <div className="col-lg-6 wow bounceILeft" data-wow-duration='1s'>
          <div className="about-item pb-3 text-center  cont-im">
          <img src={aboutim} alt='image' className='img-fluid itself'></img>
          </div>     
          </div>
          <div className="col-lg-6 contant-about wow bounceILeft" data-wow-duration='2s'>
          <div className="about-item  pb-3">
            <h2 className='pb-3'>About Us</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt quae aliquid officiis quod, accusamus repellendus quidem reiciendis dolor cum quaerat repellat porro veritatis alias odio vitae velit laboriosam commodi. Et perferendis animi, tempora voluptatibus exercitationem aperiam corrupti aut modi ipsum voluptatum quam libero veritatis. Perferendis esse veritatis ullam voluptatum laboriosam, quasi amet obcaecati praesentium dolore at quia corrupti? Exercitationem facilis, numquam ab aut dolorem totam corporis non illo recusandae quia itaque et praesentium dolor adipisci ad maiores eaque nulla facere autem. Cupiditate nam, enim voluptatem eius blanditiis delectus quos quod aliquid at neque perferendis fugit ipsum ea ad accusamus perspiciatis!</p>
             <Link to='/Notfound'> <button className='btn btn-danger wow bounceIUp' data-wow-duration='2s'>Contact Us</button></Link>
          </div>     
          </div>
          </div>     
          </div>     
          </section>
          </>
     )     
}

export default About;