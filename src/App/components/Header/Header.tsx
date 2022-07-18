import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Image from 'App/components/Reuse/Image';
import Button from 'App/components/Reuse/Button';
import classes from './Header.module.css';
import { authActions } from '../../store/auth';
// eslint-disable-next-line import/extensions,import/no-unresolved
// eslint-disable-next-line import/extensions,import/no-unresolved,import/no-duplicates
// eslint-disable-next-line import/extensions,import/no-duplicates

function Header() {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.auth.isAuthenticated);

  const logoutHandler = () => {
    dispatch(authActions.logout());
  };

  return (
    <headrer className={classes.header}>
      <div>
        <Image src="../../../public/logo.png" name="logo" />
      </div>
      <div>
        {!isAuth && (
          <section>
            <Button text="Log in" />
            <Button text="Sign in" />
          </section>
        )}
        {isAuth && (
          <section>
            <ul>
              <li>
                <a href="/">Reservations</a>
              </li>
              <li>
                <a href="/">Basket</a>
              </li>
              <li>
                <button type="submit" onClick={logoutHandler}>
                  Logout
                </button>
              </li>
            </ul>
          </section>
        )}
      </div>
    </headrer>
  );
}

export default Header;
