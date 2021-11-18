import iconMinus from '../../../images/icon-minus.svg';
import iconPlus from '../../../images/icon-plus.svg'
import {useBasket} from "../../../context/BasketContext";
const Counter = () => {
  const {count,setCount,handleCount} = useBasket()
  return (
      <div className="hero__counter">
        <img src={iconMinus} alt="Icon-minus" onClick={handleCount}/>
        <input value={count} type="number" className="hero__counter-count" onChange={e => setCount(e.target.value)}/>
        <img src={iconPlus} alt="Icon-plus" onClick={handleCount}/>
      </div>
  );
};

export default Counter;
