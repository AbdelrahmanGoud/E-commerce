import React, { useState, useEffect } from "react";
import back from '../image/model4.jpg';

function Countdown() {
  let date =new Date()
  let showdate=date.getDate();
  let showday=date.getMonth();

  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
    
  useEffect(() => {
  const countdownDate = new Date(`2023-${showday}-${showdate+3}T00:00:00`).getDate(); // تاريخ العد التنازلي
     console.log(countdown)
    const interval = setInterval(() => {
      const now = new Date().getDate();
      console.log( now)
      const distance = countdownDate - now;

      const days = Math.floor(distance / (2500 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setCountdown({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
        <>
        <section className="counter ">
        <div className="container cards">
        <div className="row">
        <div className="col-md-6 pl-5 mb-3 wow bounceInDown" data-wow-duration='2s'>
         <div className="countr-item">
          <p>Featured Product</p>
          <h2>Ecommerce Fashionable Jeans</h2>
          <p>Fashion is not something that exists in dresses only.
              Fashion is in the sky, in the street; fashion has to do with ideas,
              the way we live, what is happening.</p>
           <div className="pric pb-4">
            <h5 className="mx-3">$199 </h5> 
            <h6 className="mx-3"><del>$399</del></h6>    
            <button className="btn btn-danger mx-3 but">BUY NOW</button>   
           </div> 
           <p>Endes in</p>
          <div className="countrday ">
      <p>{countdown.days} <br></br> DAYS</p>
      :
      <p>{countdown.hours} <br></br>HRS</p>
      :
      <p>{countdown.minutes}<br></br> MINS</p>
      :
      <p>{countdown.seconds}<br></br> SECS</p>
    </div>
          </div> 
         </div> 

         <div className="col-md-6 mb-3 wow bounceInUp" data-wow-duration='2s'>
          <div className="count-item">
          <img src={back} alt="image" className="img-fluid"></img>          
          </div>
          </div> 
        </div>  
        </div>

     
        </section>
        </>
  );
}

export default Countdown;