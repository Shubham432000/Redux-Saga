import React from 'react'
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux/es/exports'
const Cart = () => {

    const cartData= useSelector((state)=>state.cartData)
    let amount = cartData.length && cartData.map(item=>item.price).reduce((prev,next)=>prev + next)
  return (
    <div>
        <Link to='/'>Product List</Link>
        <h1>Cart Page</h1>
        <div className='cart-page-container'>
            <table>
                
                
               <thead>
                
                <tr>
                    <td>Name</td>
                    <td>Color</td>
                    <td>Price</td>
                    <td>Brand</td>
                    <td>Category</td>
                </tr>
                </thead>
               
                    <tbody>
                {
                    cartData.map((item)=> <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.color}</td>
                    <td>{item.price}</td>
                    <td>{item.brand}</td>
                    <td>{item.category}</td>
                </tr>)
                }
               
               </tbody>
            </table>
            <div className='price-detail'>
                <div className='adjust-price'><span>Amount</span><span>{amount}</span></div>
                <div className='adjust-price'><span>Discount</span><span>{amount/10}</span></div>
                <div className='adjust-price'><span>Tax</span><span>0</span></div>
                <div className='adjust-price'><span>Total</span><span>{amount -(amount/10)}</span></div>
            </div>
        </div>
        
    </div>
  )
}

export default Cart




/* react_devtools_backend.js:4026 Warning: validateDOMNesting(...): <tr> cannot appear as a child of <table>. Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser.
    at tr
    at table
    at div
    at div
    at Cart (http://localhost:3000/main.2843f2a4e88e35d104dd.hot-update.js:33:87)
    at Routes (http://localhost:3000/static/js/bundle.js:48814:5)
    at div
    at App
    at Router (http://localhost:3000/static/js/bundle.js:48747:15)
    at BrowserRouter (http://localhost:3000/static/js/bundle.js:47556:5)
    at Provider (http://localhost:3000/static/js/bundle.js:44873:5) 
    
     <td>{item.name}</td>
                    <td>{item.color}</td>
                    <td>{item.price}</td>
                    <td>{item.brand}</td>
                    <td>{item.category}</td>
    
    
    
    */