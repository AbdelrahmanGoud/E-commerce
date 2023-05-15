import Table from 'react-bootstrap/Table'
import { useDispatch, useSelector } from 'react-redux'
import { clearFromcart, deleteFromcart } from '../rtok/eslices/cart-slice';
export default function Cart()
{  
       const dispatch =useDispatch()
       const cart =useSelector(state=>state.cart);
       const totileprice = cart.reduce((acc,product)=>{
                  acc +=product.price*product.quantity;
                  return acc;
       },0)
       
     return(
          <>
           <section className='cartProduct'>
           <div className="cart-dec pb-5">
               <h2>Cart</h2>
               <div className="P-line pt-3"><div className="lin-product"></div></div>

            </div>
            <div className='container'>
            <button className='btn btn-primary my-3' onClick={()=>dispatch(clearFromcart())}>Clear Cart</button>
            <h6 className='totalp'>Total Price: {totileprice.toFixed(2)}$</h6>

            </div>
            <Table striped bordered hover variant="dark" className='container'>
            
      <thead>
        <tr>
          <th>Id</th>
          <th>Category</th>
          <th>Title</th>
          <th>Description</th>
          <th>Image</th>
          <th>Quantity</th>
          <th>Price</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
          {cart.map((product)=>(
                 <tr key={product.id}>
                 <td>{product.id}</td>
                 <td>{product.category}</td>
                 <td>{product.title}</td>
                 <td >{product.description}</td>
                 <td><img className='cat-img' src={product.image} /></td>
                 <td>{product.quantity}</td>
                 <td>{product.price}$</td>
                 <td><button className='btn btn-danger' onClick={()=>dispatch(deleteFromcart(product))}>Delete</button></td>
               </tr>
          ))}
      </tbody>
    </Table>   
           </section>

          </>
     )
}