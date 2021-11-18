import closeIcon from "../../../images/icon-close.svg";

const MobileMenu = ({setIsClicked}) => {
  return (
      <nav className="mobile-nav">
        <img src={closeIcon} alt="close icon" className="icon-close" onClick={() => setIsClicked(false)}/>
        <ul className="mobile-nav__list">
          <li className="mobile-nav__list--item">Collections</li>
          <li className="mobile-nav__list--item">Men</li>
          <li className="mobile-nav__list--item">Women</li>
          <li className="mobile-nav__list--item">About</li>
          <li className="mobile-nav__list--item">Contact</li>
        </ul>
      </nav>
  );
};

export default MobileMenu;
