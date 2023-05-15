import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function Catagory()
{       const [category,setcategory]=useState([])
          useEffect(()=>{
             fetch(' https://api.escuelajs.co/api/v1/categories')
             .then((res)=>res.json())
             .then((categorys)=>setcategory(categorys))    
              
          },[])
          
    return(
       <>
        <section className="sec-cate">
        <div className="cate-desc px-5">
        <h2 className="">Shop By Category</h2>
       <p className="pb-3">
          Showin our latest arrival on this summer
         </p>
         <div className="row text-center">
          {category.map((cat)=>(
                 <div className="col-lg-2 col-md-6 text-center pb-3 wow bounceInLeft"key={cat.id} data-wow-duration='2s'>
                 <div className="cat-item">
                 <img src={cat.image} className="img-fluid pb-2"/>
                 <p>{cat.name}</p>      
                 </div>         
                </div>       
          ))}
            <Link className="cat-link" to='/Prodect'>  <button className="btn btn-transparnt"><i class="fa-solid fa-chevron-right px-2"></i>SHOP NOW</button></Link>
         </div>
          </div>  

        </section>
       </>   
    )      
}

export default Catagory;