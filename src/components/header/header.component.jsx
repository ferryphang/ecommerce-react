import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import './header.styles.scss';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import CartIcon from '../cart-icon/cart-icon.component';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectCartToggle } from '../../redux/cart/cart.selectors';

const Header = ({ current_user, cartToggle }) => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/shop">
          CONTACT
        </Link>

        {current_user ? (
          <span className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </span>
        ) : (
          <Link to="/signin">SIGN IN</Link>
        )}
        <CartIcon />
      </div>
      {cartToggle ? <CartDropdown /> : null}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  current_user: selectCurrentUser,
  cartToggle: selectCartToggle,
});

export default connect(mapStateToProps)(Header);
