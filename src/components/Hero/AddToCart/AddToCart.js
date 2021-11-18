import basketIcon from '../../../images/icon-cart.svg'
import {useBasket} from "../../../context/BasketContext";
const AddToCart = ({name,price}) => {
  const {count, setBasket} = useBasket()

  const addBasket = function (){
    if(count === 0) return
    setBasket({name, price, count})
  }

  return (
      <button className="hero__add-to-cart" onClick={addBasket}>
        <img src={basketIcon} alt="Basket icon"/>
        <p>Add to cart</p>
      </button>
  );
};

export default AddToCart;
