import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from '../redux/cartSlice';



const Cart = () => {

  const dispatch = useDispatch();
  const cart = useSelector((state) => state.items.cart);
  const items = useSelector((state) => state.items.items);

  const handleRemoveFromCart = (itemId) => {
    dispatch(removeFromCart(itemId));
  };

  return (
    <div className='container ' style={{ color: "black" }}>
      <h3 className='p-2 m-2 text-center '>Cart</h3>
      <br/>
      <div style={{ color: "black", width: "80%",borderRadius:"10px" }} className='p-5 shadow-lg mx-auto'>
        {cart.map((itemId) => {
          const item = items.find((item) => item.id === itemId);
          return (
            <div key={itemId} className='d-flex gap-5  m-2 p-2 '>
              <img src={item.img} className='' style={{width:"90px"}} />
              <div className=' text-center my-auto' style={{width:"40%",fontWeight:"bold"}}><p>{item.name}</p></div>
              <div className=' text-center my-auto' style={{width:"20%",fontWeight:"bold",color:"#3187ED"}}><p>{item.price}</p></div>
              <div className=' my-auto'>
              <button className='btn btn-danger' onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  )
}

export default Cart