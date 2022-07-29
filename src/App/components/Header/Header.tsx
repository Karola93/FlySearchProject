// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Image from 'App/components/Reuse/Image';
import Button from 'App/components/Reuse/Button';
import classes from './Header.module.css';
import { authActions } from '../../store/auth';

function Header() {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.auth.isAuthenticated);

  const logoutHandler = () => {
    dispatch(authActions.logout());
  };

  return (
    <header className={classes.header}>
      <div>
        <Image src="../../../public/logo.png" name="logo" alt="logo" />
      </div>
      <h1>FlySearch</h1>
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
    </header>
  );
}

export default Header;
