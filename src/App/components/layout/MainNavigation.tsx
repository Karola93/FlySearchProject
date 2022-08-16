// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { Link } from 'react-router-dom';
import Button from 'App/components/Reuse/Button';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Image from 'App/components/Reuse/Image';
import { authActions } from 'App/store/auth';
import classes from './MainNavigation.module.css';
import logo from 'logo-1.png';

function MainNavigation() {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.auth.isAuthenticated);

  const logoutHandler = () => {
    dispatch(authActions.logout());
  };

  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Image src={logo} alt="logo" width="70px" height="70px" />
        <h1>FlySearch</h1>
      </div>
      <nav>
        {!isAuth && (
          <ul>
            <li>
              <Link to="/auth">
                <Button text="Log in" />
              </Link>
            </li>
            <li>
              <Link to="/signin">
                <Button text="Sign in" />
              </Link>
            </li>
          </ul>
        )}
        {isAuth && (
          <ul>
            <li>
              <Link to="/reservations">Reservations</Link>
            </li>
            <li>
              <Link to="/basket">Basket</Link>
            </li>
            <li>
              <Link to="/">
                <button type="submit" onClick={logoutHandler}>
                  Logout
                </button>
              </Link>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
}

export default MainNavigation;
