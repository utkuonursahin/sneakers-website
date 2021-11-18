import {useBasket} from "../../../../context/BasketContext";

const CounterNotification = () => {
  const {basket} = useBasket()
  return (
      <>
        {basket && <span>{basket.count}</span>}
      </>
  );
};

export default CounterNotification;
