import React, { useState, useEffect } from "react";
import back from '../image/model4.jpg';

function Countdown() {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Set the date we're counting down to
    const countDownDate = new Date("December 30, 2023 00:00:00").getTime();

    // Update the count down every 1 second
    const timer = setInterval(() => {

      // Get today's date and time
      const now = new Date().getTime();
        
      // Find the distance between now and the count down date
      const distance = countDownDate - now;
        
      // Time calculations for days, hours, minutes and seconds
      const days = Math.floor(distance / (1500 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
      // Update the countdown state
      setCountdown({
        days,
        hours,
        minutes,
        seconds,
      });
        
      // If the count down is over, clear the interval
      if (distance < 0) {
        clearInterval(timer);
      }
    }, 1000);

    // Clear the interval on component unmount
    return () => clearInterval(timer);
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