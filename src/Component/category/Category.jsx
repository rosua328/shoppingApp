import './Category.css'
import { categoryList } from './../../data/data';
import Cate_product from './cat-product/Cate_product';

const Category = () => {
  return (
  <div className="cate-container">
{categoryList.map((item)=>(
    <Cate_product key={item.id} item={item}/>
))}
  </div>
    );
};

export default Category;
