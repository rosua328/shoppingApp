import "./Products.css"
import { productList } from './../../data/data';
import Product from './product/Product';

const Products = () => {
  return (
  <div className="products-container">
      {productList.map((item)=>(
<Product key={item.id} item={item}/>
  ))}
  </div>
    );
};

export default Products;
