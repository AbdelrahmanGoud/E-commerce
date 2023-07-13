import './App.css';
import Navapp from './commpontjs/Navapp';
import Sectionone from './commpontjs/Sectionone';
import './commponentcss/Nstyle.css'
import './commponentcss/Sstyle.css';
import './commponentcss/Tostyle.css';
import './commponentcss/Brand.css';
import './commponentcss/Countstyle.css';
import About from './commpontjs/About';
import { Routes,Route,Link } from 'react-router-dom';
import Cart from './commpontjs/Cart';
import './commponentcss/Productstyle.css';
import Product from './commpontjs/Product';
import './commponentcss/Cartstyle.css';
import './commponentcss/Categorystyle.css';
import './commponentcss/Slidestyle.css';
import './commponentcss/Newstyle.css';
import Footer from './commpontjs/Footer';
import './commponentcss/Footerstyle.css';
import  './commponentcss/Aboutstyle.css';
import Notfound from './commpontjs/Notfound';
import Arrowup from './commpontjs/Arrowup';
import './commponentcss/Arrowstyle.css';
import $ from 'jquery';
import React, { useEffect } from 'react';
import WOW from 'wowjs';
import 'wowjs/css/libs/animate.css';
function App() {

  useEffect(() => {
    const wow = new WOW.WOW();
    wow.init();
  }, []);
  $(document).ready(function(){
    $('.spanlayer').fadeOut(2000,()=>{ $('body').css('overflow','auto')});
   
})
  return (
    <div className="App">
       <div className='spanlayer'>
    <div class="sk-cube-grid">
  <div class="sk-cube sk-cube1"></div>
  <div class="sk-cube sk-cube2"></div>
  <div class="sk-cube sk-cube3"></div>
  <div class="sk-cube sk-cube4"></div>
  <div class="sk-cube sk-cube5"></div>
  <div class="sk-cube sk-cube6"></div>
  <div class="sk-cube sk-cube7"></div>
  <div class="sk-cube sk-cube8"></div>
  <div class="sk-cube sk-cube9"></div>
</div>
    </div>
    <Navapp/>
   
    <Routes>
      <Route path='/' element={<Sectionone/>}/>
      <Route path='Prodect' element={<Product/>}/>
      <Route 
      path='/About'
      element={<About/>}
      />
      <Route path='/Cart' element={<Cart/>}/>
      <Route path='Notfound' element={<Notfound/>}/>
    </Routes>
    <Arrowup/>
   <Footer/>
    </div>
  );
}

export default App;
