import { useContext } from 'react';
import ProductForm from './ProductForm';
import classes from './Product.module.css';
import CartContext from '../../../store/cart-context';
import { BsCurrencyDollar } from 'react-icons/bs';

const Product = (props) => {
  const cartCtx = useContext(CartContext);

  const price = `${props.price.toFixed(2)}`;

  const addToCartHandler = amount => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price
    });
  };

  return (
    <li className={classes.meal}>
      <img src={props.image} alt='s' />
      <div className={classes.card}>
        <h2>{props.name}</h2>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price} >
          <BsCurrencyDollar className={classes.coin} />
          {price}
        </div>
      </div>
      <div>
        <ProductForm id={props.id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default Product;
