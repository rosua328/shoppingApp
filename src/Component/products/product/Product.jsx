import "./Product.css"
import { ShoppingCartOutlined, Search } from '@material-ui/icons';

const Product = ({item}) => {
  return (
    <div className="products-product">
    <img className="products-img" src={`img/${item.img}`} alt={item.img} />
    <div className="products-btn">
    <button className="product-button">
      <ShoppingCartOutlined/>
    </button>
    <button className="product-button">
      <Search/>
    </button>
    <button className="product-button">
      
    </button>
    </div>
</div>
    );
};

export default Product;
