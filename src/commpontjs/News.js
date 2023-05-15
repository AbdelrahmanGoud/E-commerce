import im1 from '../image/1 (2).jpg';
import im2 from '../image/1.jpg';
import im3 from '../image/1 (1).jpg'
import im4 from '../image/3 (2).jpg'
import im5 from '../image/4.jpg';
import { Link } from 'react-router-dom';
function News() {
  let date = new Date()
  let shweDate = date.toDateString()
  let slishwedate = shweDate.slice(3)
  return (
    <>
      <section className="news">
        <div className="container">
          <div className="new-desc pb-3">
            <div className="N-titel wow bounceInLeft" data-wow-duration='1s'>
              <h2>Latest News</h2>
              <p>Showing our latest arrival on the summer</p>
            </div>
            <div className='wow bounceInRight' data-wow-duration='1s'>
              <Link to='/Notfound'><button className="btn btn-transparnt news-butt">View All</button></Link>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 mb-3">
              <div className="new-item-img">
                <div className="contant-img wow bounceInDown" data-wow-duration='2s'>
                  <p><i className="fa-solid fa-folder-open mx-2"></i>Shopping</p>
                  <p> <i className="fa-solid fa-clock mx-2"></i>{slishwedate}</p>
                  <p><i class="fa-solid fa-user mx-2"></i>John Anderson</p>
                </div>
                <h5 className='wow bounceInUp' data-wow-duration='2s'>Fashion is a language that expresses your personality</h5>
              </div>
            </div>
            <div className="col-lg-6 wow bounceInDown" data-wow-duration='2s'>
              <div className="new-item mb-3">
                <div className="row">
                  <div className="col-sm-6 mb-3">
                    <div className="new-two-item ">
                      <span className="mx-2"><i className="fa-solid fa-folder-open"></i>Shopping</span>
                      <span> <i className="fa-solid fa-clock"></i>{slishwedate}</span>

                      <p className="pb-5">Fashion is a language that expresses your personality</p>
                      <Link to='/Notfound'><button className="btn btn-transparnt news-butt">Read More</button></Link>
                    </div>
                  </div>
                  <div className="col-sm-6 mb-3 wow bounceInDown" data-wow-duration='2s'>
                    <div className="new-two-item ">
                      <span className="mx-2"><i className="fa-solid fa-folder-open"></i>Shopping</span>
                      <span> <i className="fa-solid fa-clock"></i>{slishwedate}</span>

                      <p className="pb-5">Fashion is a language that expresses your personality</p>
                      <Link to='/Notfound'><button className="btn btn-transparnt news-butt">Read More</button></Link>
                    </div>
                  </div>
                  <div className="col-sm-6 mb-3 wow bounceInUp" data-wow-duration='3s'>
                    <div className="new-two-item ">
                      <span className="mx-2"><i className="fa-solid fa-folder-open"></i>Shopping</span>
                      <span> <i className="fa-solid fa-clock"></i>{slishwedate}</span>

                      <p className="pb-5">Fashion is a language that expresses your personality</p>
                      <Link to='/Notfound'><button className="btn btn-transparnt news-butt">Read More</button></Link>
                    </div>
                  </div>
                  <div className="col-sm-6 mb-3 wow bounceInUp" data-wow-duration='3s'>
                    <div className="new-two-item ">
                      <span className="mx-2"><i className="fa-solid fa-folder-open"></i>Shopping</span>
                      <span> <i className="fa-solid fa-clock"></i>{slishwedate}</span>

                      <p className="pb-5">Fashion is a language that expresses your personality</p>
                      <Link to='/Notfound'><button className="btn btn-transparnt news-butt">Read More</button></Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="colc-image pt-5 m-auto pb-5 ">
            <div className="clc-titel text-center wow bounceILeft" data-wow-duration='2s'>
              <h2 className="text-center py-5">Follow Us In Instagram @E-Commerce </h2>
            </div>
           <div className='d-flex pb-5'>
           <img src={im1} alt='img' className='img-fluid wow bounceInLeft' data-wow-duration='5s'></img>
            <img src={im3} alt='img' className='img-fluid wow bounceInLeft'data-wow-duration='4s'></img>
            <img src={im2} alt='img' className='img-fluid wow bounceInLeft'data-wow-duration='3s'></img>
            <img src={im5} alt='img' className='img-fluid wow bounceInLeft'data-wow-duration='2s'></img>
            <img src={im4} alt='img' className='img-fluid wow bounceInLeft'data-wow-duration='1s'></img>
           </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default News;