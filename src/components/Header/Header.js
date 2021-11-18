import logo from '../../images/logo.svg'
import mobileIcon from "../../images/icon-menu.svg";
import {useState} from "react";
import NavMenu from "./NavMenu/NavMenu";
import UserMenu from "./UserMenu/UserMenu";
import MobileMenu from "./MobileMenu/MobileMenu";
import Cart from "./Cart/Cart";
import {useCart} from "../../context/CartContext";

const Header = () => {
  const {isCartClicked} = useCart()
  const [isClicked,setIsClicked] = useState(false);
  return (
      <div className="header">
        <img src={mobileIcon} alt="Mobile menu icon" className="icon-mobile-menu" onClick={() => setIsClicked(true)}/>
        <img src={logo} alt="sneakers logo" className="header-logo"/>
        <NavMenu/>
        <UserMenu/>
        {isClicked && <MobileMenu setIsClicked={setIsClicked}/>}
        {isCartClicked && <Cart/>}
      </div>
  );
};

export default Header;
