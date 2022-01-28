import './Navbar.css'
import { Clear } from '@material-ui/icons';
import { useState } from 'react';


const Navbar = () => {

const [toggle, settoggle] = useState(true);

    const deleteForm = ()=>{
        let date = new Date();
        date.setDate(date.getDate() +1);
        document.cookie = `Popup=top; Expires=${date.toUTCString()}`;
        settoggle(false);
    }
    

    
  return (<>
      {toggle||!document.cookie?
  <div className='nav-container'>
      <div className="nav-title">오늘 티셔츠 품목 선착순 50% 세일</div>
      <button onClick={()=>deleteForm()} className="nav-delete">
          <Clear className='nav-delete-icon'/>
      </button>
  </div>:<div></div>
  }
</>
  );
};

export default Navbar;
