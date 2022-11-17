import { Fragment } from 'react';
import HeaderCartButton from './HeaderCartButton';
import classes from './Header.module.css';
import Logo from '../../assets/Logo.png'
import HeaderSlider from './HeaderSlider';

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1><a href="https://www.cocktailart.co.il"><img src={Logo} alt='Logo' /></a></h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes['main-image']}>
        <HeaderSlider />
      </div>

    </Fragment>
  );
};

export default Header;
