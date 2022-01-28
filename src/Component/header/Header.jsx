import './Header.css';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';


const Header = () => {
  return (
  <div className='header-container'>

<div className="header-mobile-menu">
    <button className="header-mobile-register">REGISTER</button>
    <button className="header-mobile-login">SIGN IN</button>
    <button className="header-mobile-cart">
    <ShoppingCartOutlined/>
    </button>
</div>

<div className="header-left">
    <div className="header-left-wrap">
    <select className='header-language'>
        <option value="EN">EN</option>
        <option value="KR">KR</option>
    </select>
    <div className="header-search">
        <input type="text" className="header-search-input" />
        <button className="header-search-button">
            <Search/>
        </button>
    </div>
    </div>
</div>
<div className="header-center">
    <h1 className="header-logo">
        NanDaGinDa
    </h1>
</div>
<div className="header-right">
    <button className="header-register">REGISTER</button>
    <button className="header-login">SIGN IN</button>
    <button className="header-cart">
    <ShoppingCartOutlined/>
    </button>
</div>

<div className="header-mobile">
        <input type="text" className="header-mobile-input" />
        <button className="header-mobile-button">
            <Search/>
        </button>
    </div>

  </div>
  );
};


export default Header;
