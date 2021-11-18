import profile from '../../../images/image-avatar.png';
import basketIcon from '../../../images/icon-cart.svg'
import {useCart} from "../../../context/CartContext";
import CounterNotification from "./CounterNotification/CounterNotification";

const UserMenu = () => {
  const {isCartClicked,setIsCartClicked} = useCart()
  const handleClick = (e) => { //event bubbling
    const target = e.target.className
    if(target === 'header-usermenu__basket' || target === 'header-usermenu__profile') setIsCartClicked(!isCartClicked)
  }
  return (
      <div className="header-usermenu">
        <div className="header-usermenu__icons">
          <img src={basketIcon} alt="Basket" className="header-usermenu__basket" onClick={handleClick}/>
          <CounterNotification/>
          <img src={profile} alt="Profile" className="header-usermenu__profile" onClick={handleClick}/>
        </div>
      </div>
  );
};

export default UserMenu;
