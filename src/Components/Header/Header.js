import React,{useContext} from 'react';
import { useNavigate,Link } from 'react-router-dom';
import './Header.css';
import OlxLogo from '../../assets/OlxLogo';
import Search from '../../assets/Search';
import Arrow from '../../assets/Arrow';
import SellButton from '../../assets/SellButton';
import SellButtonPlus from '../../assets/SellButtonPlus';
import { AuthContext, FirebaseContext } from '../../Store/FirbaseContext';
function Header() {
  const{user}=useContext(AuthContext);
  const{firebase}=useContext(FirebaseContext);
  const navigate=useNavigate();
 
  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div className="brandName">
          <OlxLogo></OlxLogo>
        </div>
        <div className="placeSearch">
          <Search></Search>
          <input type="text" />
          <Arrow></Arrow>
        </div>
        <div className="productSearch">
          <div className="input">
            <input
              type="text"
              placeholder="Find car,mobile phone and more..."
            />
          </div>
          <div className="searchAction">
            <Search color="#ffffff"></Search>
          </div>
        </div>
        <div className="language">
          <span> ENGLISH </span>
          <Arrow></Arrow>
        </div>
        <div className="loginPage">
          <button className='btn'> {user ? `Hi ${user.displayName}` : <Link className='btnout' to="/login">Login</Link>}</button>
          
        </div>
        {user&&<button className='btn' onClick={()=>{
          firebase.auth().signOut().then(()=>{
            navigate('/')
          })

        }}>Logout</button>}
        <div className="sellMenu">
          <SellButton></SellButton>
          <div className="sellMenuContent">
            <SellButtonPlus ></SellButtonPlus>
            {user&&<span onClick={()=>{
             navigate('/create') 
            }}>SELL</span>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
