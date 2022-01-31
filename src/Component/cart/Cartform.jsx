import './Cartform.css'

const Cartform = () => {
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
<div className="cart-product">
  <div className="cart-product-left">
<img src="img/cloth1.jpg" alt="img" className="cart-img" />
  </div>
  <div className="cart-product-center">

  </div>
  <div className="cart-product-right">

  </div>
</div>
  </div>
  <div className="cart-right">
a
  </div>
</div>

  </div>
  );
};

export default Cartform;
