import iconMinus from '../../../images/icon-minus.svg';
import iconPlus from '../../../images/icon-plus.svg'
import {useBasket} from "../../../context/BasketContext";
const Counter = () => {
  const {count,setCount,handleCount} = useBasket()
  return (
      <div className="hero__counter">
        <figure className="hero__counter--fig" onClick={handleCount} data-operation="minus">
          <img src={iconMinus} alt="icon-minus"/>
        </figure>
        <input value={count} type="number" className="hero__counter-count" onChange={e => setCount(e.target.value)}/>
        <figure className="hero__counter--fig" onClick={handleCount} data-operation="plus">
          <img src={iconPlus} alt="icon-plus"/>
        </figure>
      </div>
  );
};

export default Counter;
