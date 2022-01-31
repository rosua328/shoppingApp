import './Dressheader.css'

const Dressheader = () => {
  return (
  <div className="dress-container">
    <div className="dress-title">Dress</div>
<div className="dress-listbox">
    <span className="dress-listbox-title">
Filter Products :
    </span>
    <select className='dress-color'>
        <option className='dress-inlist' value="Color">Color</option>
        <option className='dress-inlist' value="White">White</option>
        <option className='dress-inlist' value="Black">Black</option>
        <option className='dress-inlist' value="Red">Red</option>
        <option className='dress-inlist' value="Blue">Blue</option>
        <option className='dress-inlist' value="Yellow">Yellow</option>
        <option className='dress-inlist' value="Green">Green</option>
    </select>
    <select className='dress-size'>
        <option className='dress-inlist' value="Size">Size</option>
        <option className='dress-inlist' value="XL">XL</option>
        <option className='dress-inlist' value="L">L</option>
        <option className='dress-inlist' value="M">M</option>
        <option className='dress-inlist' value="S">S</option>
    </select>
</div>
  </div>
    );
};

export default Dressheader;
