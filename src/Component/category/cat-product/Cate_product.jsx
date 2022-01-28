import "./Cate_product.css"

const Cate_product = ({item}) => {
  return (
    <div className="cate-product">
    <img className='cate-img' src={`img/${item.img}`} alt={item.img} />
    <div className="cate-des">
    <span className="cate-title">{item.title}</span>
    <button className="cate-button">Shop Now</button>
    </div>
</div>
    );
};

export default Cate_product;
