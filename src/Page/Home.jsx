
import Header from './../Component/header/Header';
import Navbar from './../Component/navbar/Navbar';
import Hotproduct from './../Component/hotProduct/Hotproduct';
import Category from './../Component/category/Category';
import Products from './../Component/products/Products';
import Mail from './../Component/mail/Mail';
import Footer from './../Component/footer/Footer';

const Home = () => {
  return <div>
    <Navbar/>
      <Header/>
      <Hotproduct/>
      <Category/>
      <Products/>
      <Mail/>
      <Footer/>
  </div>;
};

export default Home;
