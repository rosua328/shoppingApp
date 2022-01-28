import "./Footer.css"
import { Call, Navigation, Mail } from '@material-ui/icons';

const Footer = () => {
  return (
  <div className="footer-container">
      <div className="footer-left">
          <h1 className="footer-left-title">NanDaGinDa</h1>
          <p className="footer-left-sub">석가는 실현에 귀는 그리하였는가? 살 착목한는 인생에 위하여서, 반짝이는 놀이 피는 그리하였는가? 용감하고 없으면 실로 품었기 너의 청춘을 있음으로써 열락의 있으랴? 소담스러운 뭇 반짝이는 목숨이 사는가 때에, 앞이 이것이다. 일월과 할지라도 가지에 우리는 천고에 없는 것이다. </p>
          <div className="footer-left-outlink">
              <button className="footer-left-button"></button>
              <button className="footer-left-button"></button>
              <button className="footer-left-button"></button>
              <button className="footer-left-button"></button>
          </div>
      </div>
      <div className="footer-center">
          <p className="footer-center-title">Useful Links</p>
          <div className="footer-center-link">
              <a className="footer-center-sub">Home</a>
              <a className="footer-center-sub">Cart</a>
              <a className="footer-center-sub">Man Fashion</a>
              <a className="footer-center-sub">Woman Fashion</a>
              <a className="footer-center-sub">Accessories</a>
              <a className="footer-center-sub">My Account</a>
              <a className="footer-center-sub">Order Tracking</a>
              <a className="footer-center-sub">Wishlist</a>
              <a className="footer-center-sub">Wishlist</a>
              <a className="footer-center-sub">Terms</a>
          </div>
      </div>
      <div className="footer-right">
      <p className="footer-right-title">Contact</p>
      <div className="footer-right-contact">
<div className="footer-right-sub">
    <Navigation/>
    <div className="footer-right-sub-real">622 매실로, 동쪽 단리길 97881</div>
    </div>
<div className="footer-right-sub">
    <Call/>
    <div className="footer-right-sub-real">+82 111-222-333</div>
    </div>
<div className="footer-right-sub">
    <Mail/>
    <div className="footer-right-sub-real">contact@naver.dev</div>
    </div>
      </div>
      </div>
  </div>
    );
};

export default Footer;
