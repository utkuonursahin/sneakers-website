import Counter from "./Counter/Counter";
import AddToCart from "./AddToCart/AddToCart";

const Hero = () => {
  const price = 125
  const name = 'Fall Limited Edition Sneakers'
  return (
      <div className="hero">
        <div className="hero__header">
          <h1 className="hero__header--company">Sneaker Company</h1>
          <h2 className="hero__header--product">{name}</h2>
        </div>
        <p className="hero__paragraph">
          These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole,
          they'll withstand everything the weather can offer.
        </p>
        <div className="hero__prices">
          <span className="hero__prices--actual">${price}.00</span>
          <span className="hero__prices--deprecated">$250.00</span>
        </div>
        <Counter/>
        <AddToCart price={price} name={name}/>
      </div>
  );
};

export default Hero;
