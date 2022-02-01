import './Cartproduct.css'

const Cartproduct = () => {
  return (
  <div className="cart-product">
    <button className="cart-product-delete">
      X
    </button>
  <div className="cart-product-left">
<img src="img/cloth1.jpg" alt="img" className="cart-img" />
  </div>
  <div className="cart-product-center">
<div className="cart-product-titlespace">
<div className="cart-product-title-title">
Product:
</div>
<div className="cart-product-title-sub">
  JuneShirts
</div>
</div>
<div className="cart-product-color">
</div>
<div className="cart-product-sizespace">
  <div className="cart-product-size-title">
    Size:
  </div>
  <div className="cart-product-size-sub">
    M
  </div>
</div>
  </div>
  <div className="cart-product-right">
<div className="cart-product-num">
  <button className="cart-product-minus">
    -
  </button>
  <div className="cart-product-count">
    3
  </div>
  <button className="cart-product-plus">
    +
  </button>
</div>
<div className="cart-product-cost">
  13,000원
</div>
  </div>
</div>
  )
  
};

export default Cartproduct;
