import React from 'react'
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import './Cart.scss'

import { useSelector, useDispatch } from 'react-redux';
import { removeItem, resetCart } from '../../redux/cartReducer';

import {makeRequest} from '../../makeRequest'
import {loadStripe} from '@stripe/stripe-js';

const Cart = () => {

  const dispatch = useDispatch();

  const products = useSelector(state=>state.cart.products);
  console.log('prod', products);

  const totalPrice = () => {
    let total = 0;
    products.forEach((item) => (total += item.quantity * item.price));
    return total.toFixed(2);
  }

  const stripePromise = loadStripe('pk_test_51MBgocGOvvIKLUrmY7M5zz4Z5oIM2cXTUPuHIlvWh2PYq9I4PnY5cDGx5jptypljZGdARTV0SZzg6vvLE2cED6ze00iY8aZ0xR');

  const handlePayment = async () => {
    try {
      const stripe = await stripePromise;

      const res = await makeRequest.post("/orders", {
        products,
      });

      await stripe.redirectToCheckout({
        sessionId: res.data.stripeSession.id,
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='cart'>
      <h1>Products in your cart</h1>
      {products.map((item) => (
        <div className="item" key={item.id}>
          <img src={import.meta.env.VITE_REACT_APP_UPLOAD_URL+item.img} alt="img" />
          <div className="details">
            <h1>{item.title}</h1>
            <p>{item.desc?.substring(0, 100)}</p>
            <div className="price">{item.quantity} x Rp {item.price} </div>
          </div>
          <DeleteOutlinedIcon className='delete' onClick={() => dispatch(removeItem(item.id))} />
        </div>
      ))}
      <div className="total">
        <span>SUBTOTAL</span>
        <span>Rp {totalPrice()}</span>
      </div>
      
      <button onClick={handlePayment}>PROCEED TO CHECKOUT</button>
      <span className="reset" onClick={() => dispatch(resetCart())}>Reset</span>
    </div>
  )
}

export default Cart