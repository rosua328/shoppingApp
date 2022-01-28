import './Hotproduct.css'
import { ArrowRight, ArrowLeft } from '@material-ui/icons';
import { scrollList } from './../../data/data';
import { useState } from 'react';
const Hotproduct = () => {

const [index, setindex] = useState(0);

const scrollProduct=(direction)=>{
if(direction==="left"){
setindex(index>0?index-1:2)
}else{
    setindex(index<2?index+1:0)
}
}

  return (
  <div className='hot-container'>
<button  onClick={()=>scrollProduct("left")} className="hot-leftArrow">
    <ArrowLeft className='arrow'/>
</button>


<div className="hot-wrap" style={{transform : `translateX(${index*-100}vw)`}}>

{scrollList.map((product)=>(
    <div key={product.id} className="hot-slide" style={{backgroundColor: product.color}}>
<div className="hot-left">
<img className='hot-image' src={`img/${product.img}`} alt={product.img}/>
</div>
<div className="hot-right">
    <div className="hot-right-wrap">
    <h1 className="hot-title">{product.title}</h1>
    <span className="hot-sub">{product.sub}</span>
    <button className="hot-go">Shop Now ▶</button>
    </div>
</div>
</div>
))}

</div>

<button onClick={()=>scrollProduct("right")} className="hot-rightArrow">
<ArrowRight/>
</button>
  </div>
  );
};

export default Hotproduct;
