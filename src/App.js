import { useState } from 'react';
import Header from './components/Layout/Header';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';
import { Route, Routes } from 'react-router-dom';
import Description from './components/Products/Description';
import Categories from './components/Products/Categories';
import Cocktails from './components/Products/Cocktails';
import Packages from './components/Products/Packages';
import Bartools from './components/Products/Bartools';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <>
      <CartProvider>
        {cartIsShown && <Cart onClose={hideCartHandler} />}
        <Header onShowCart={showCartHandler} />
        <main style={{ marginTop: "-4px", background: "	#FFF5EE" }} >
          <Description />
          <Categories />
          <Routes>
            <Route path='/' element={<Cocktails />} />
            <Route path='/packages' element={<Packages />} />
            <Route path='/bartools' element={<Bartools />} />
          </Routes>
        </main>
      </CartProvider >
    </>
  )



}

export default App;
