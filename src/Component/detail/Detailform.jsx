import { ExposurePlus1, PlusOne } from '@material-ui/icons';
import './Detailform.css'

const Detailform = () => {
  return( 
  <div className='detail-container'>
    <div className="detail-left">
      <img className='detail-image' src="img/cloth1.jpg" alt="a" />
    </div>
    <div className="detail-right">
      <div className="detail-title">
        Denim Jumpsuit
      </div>
      <div className="detail-sub">
        동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라만세. 무궁화 삼천리 화려강산 대한사람 대한으로 길이 보전하세
      </div>
      <div className="detail-cost">
        13,000원
      </div>
      <div className="detail-menu">
<div className="detail-menu-color">
  <div className="detail-menu-color-title">
    Color
  </div>
  <div className="detail-menu-color-button">
    <button className="color black"></button>
    <button className="color blue"></button>
    <button className="color gray"></button>
  </div>
</div>
<div className="detail-menu-size">
  <div className="detail-menu-size-title">Size</div>
  <select name="" id="" className="detail-menu-size-select">
    <option value="">SIZE</option>
    <option value="">XL</option>
    <option value="">L</option>
    <option value="">M</option>
    <option value="">S</option>
  </select>
  </div>
      </div>
      <div className="detail-final">
        <div className="detail-num">
          <button className="detail-minus">
           - 
          </button>
          <div className="detail-count">3</div>
          <button className="detail-plus">
          +
          </button>
        </div>
        <button className="detail-add">
          add cart
        </button>
      </div>
    </div>
  </div>
  )
};

export default Detailform;
