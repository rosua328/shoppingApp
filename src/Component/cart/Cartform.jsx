import { useState } from 'react';
import { cartcount } from '../../data/respon';
import './Cartform.css'
import Cartproduct from './cartProduct/Cartproduct';

const Cartform = () => {

// [scrolling, setscroll] = useState(false);

  return( 
  <div className='cart-container'>
<div className="cart-title">
  Your Bag
</div>
<div className="cart-go">
  <button className="cart-gomain">
    CONTINU SHOPPING
  </button>
  <button className="cart-checking">
    CHECKOUT NOW
  </button>
</div>

<div className="cart-main">
  <div className="cart-left">
  {cartcount.map((item)=>(
<Cartproduct key={item.id}/>
  ))}
  </div>
  <div className="cart-right">
<div className="cart-check-title">
  ORDER SUMMARY
</div>

{/* item */}
<div className="cart-check-costs">
  <div className="cart-check-cost">
<div className="cart-check-cost-title">
  Subtotal
</div>
<div className="cart-check-cost-cost">
  12,000원
</div>
  </div>
  <div className="cart-check-cost">
  <div className="cart-check-cost-title">
  Delivery Fee
</div>
<div className="cart-check-cost-cost">
  5,000원
</div>
  </div>
  <div className="cart-check-cost">
  <div className="cart-check-cost-title">
  Shipping Discount
</div>
<div className="cart-check-cost-cost">
  -5,000원
</div>
  </div>
</div>

<div className="cart-check-total">
  <div className="">
Total
  </div>
  <div className="">
12,000원
  </div>
</div>

<button className="cart-checkout">
  CHECKOUT NOW
</button>

  </div>
</div>

  </div>
  );
};

export default Cartform;
