import './styles/main.scss';
import Header from "./components/Header/Header";
import Gallery from "./components/Gallery/Gallery";
import Hero from "./components/Hero/Hero";
import {BasketProvider} from "./context/BasketContext";
import {GalleryProvider} from "./context/GalleryContext";
import {CartProvider} from "./context/CartContext";

function App() {
  return (
    <div className="App">
      <BasketProvider>
        <CartProvider>
          <Header/>
        </CartProvider>
        <GalleryProvider>
          <Gallery/>
        </GalleryProvider>
        <Hero/>
      </BasketProvider>
    </div>
  );
}

export default App;
